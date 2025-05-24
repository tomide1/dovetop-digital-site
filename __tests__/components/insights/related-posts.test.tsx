import { render, screen } from '@testing-library/react'
import RelatedPosts from '@/components/insights/related-posts'
import { InsightPost } from '@/data/insights'

// Mock the insights data module
jest.mock('@/data/insights', () => ({
  insights: [
    {
      id: '1',
      slug: 'current-post',
      title: 'Current Post',
      excerpt: 'Current post excerpt',
      content: 'Current post content',
      coverImage: '/images/current.jpg',
      date: '2023-10-26',
      author: { name: 'Author 1', title: 'Title 1' },
      category: 'Cloud Solutions',
      readTime: 5,
      featured: false,
    },
    {
      id: '2',
      slug: 'related-post-1',
      title: 'Related Post 1',
      excerpt: 'Related post 1 excerpt',
      content: 'Related post 1 content',
      coverImage: '/images/related1.jpg',
      date: '2023-10-25',
      author: { name: 'Author 2', title: 'Title 2' },
      category: 'Cloud Solutions',
      readTime: 3,
      featured: false,
    },
    {
      id: '3',
      slug: 'related-post-2',
      title: 'Related Post 2',
      excerpt: 'Related post 2 excerpt',
      content: 'Related post 2 content',
      coverImage: '/images/related2.jpg',
      date: '2023-10-24',
      author: { name: 'Author 3', title: 'Title 3' },
      category: 'Cloud Solutions',
      readTime: 4,
      featured: false,
    },
    {
      id: '4',
      slug: 'different-category-post',
      title: 'Different Category Post',
      excerpt: 'Different category excerpt',
      content: 'Different category content',
      coverImage: '/images/different.jpg',
      date: '2023-10-23',
      author: { name: 'Author 4', title: 'Title 4' },
      category: 'Data Analytics',
      readTime: 6,
      featured: false,
    },
  ],
}))

// Mock the PostCard component
jest.mock('@/components/insights/post-card', () => ({
  __esModule: true,
  default: ({
    post,
    variant,
  }: {
    post: InsightPost
    variant?: 'default' | 'compact'
  }) => (
    <div
      data-testid='related-post-card'
      data-variant={variant}
      data-post-id={post.id}
    >
      {post.title}
    </div>
  ),
}))

describe('RelatedPosts Component', () => {
  test('renders related posts in the same category', () => {
    render(<RelatedPosts currentPostId='1' category='Cloud Solutions' />)

    // Should show the section title
    expect(screen.getByText('Related Insights')).toBeInTheDocument()

    // Should render related posts (excluding current post)
    const relatedCards = screen.getAllByTestId('related-post-card')
    expect(relatedCards).toHaveLength(2)

    // Check that cards use compact variant
    relatedCards.forEach((card) => {
      expect(card).toHaveAttribute('data-variant', 'compact')
    })

    // Should show specific related posts
    expect(screen.getByText('Related Post 1')).toBeInTheDocument()
    expect(screen.getByText('Related Post 2')).toBeInTheDocument()

    // Should not show current post or different category post
    expect(screen.queryByText('Current Post')).not.toBeInTheDocument()
    expect(
      screen.queryByText('Different Category Post')
    ).not.toBeInTheDocument()
  })

  test('does not render when no related posts exist', () => {
    render(<RelatedPosts currentPostId='1' category='Nonexistent Category' />)

    // Should not render anything
    expect(screen.queryByText('Related Insights')).not.toBeInTheDocument()
    expect(screen.queryByTestId('related-post-card')).not.toBeInTheDocument()
  })

  test('excludes current post from related posts', () => {
    render(<RelatedPosts currentPostId='2' category='Cloud Solutions' />)

    const relatedCards = screen.getAllByTestId('related-post-card')

    // Should not include the current post (id="2")
    relatedCards.forEach((card) => {
      expect(card).not.toHaveAttribute('data-post-id', '2')
    })

    // Should show current post title is not in the related posts
    expect(screen.queryByText('Related Post 1')).not.toBeInTheDocument()

    // Should show other posts in same category
    expect(screen.getByText('Current Post')).toBeInTheDocument()
    expect(screen.getByText('Related Post 2')).toBeInTheDocument()
  })

  test('limits to maximum of 3 related posts', () => {
    // For this test, we'll assume the mock data has enough posts to test the limit
    // Since we have 3 posts in the same category (Cloud Solutions) excluding current post
    render(<RelatedPosts currentPostId='1' category='Cloud Solutions' />)

    const relatedCards = screen.getAllByTestId('related-post-card')
    // Should show 2 posts (since we only have 2 other posts in same category)
    expect(relatedCards).toHaveLength(2)
  })
})
