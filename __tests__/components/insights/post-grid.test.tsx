import { render, screen } from '@testing-library/react'
import PostGrid from '@/components/insights/post-grid'
import { InsightPost } from '@/data/insights'

// Mock the PostCard component
jest.mock('@/components/insights/post-card', () => ({
  __esModule: true,
  default: ({
    post,
    variant,
  }: {
    post: InsightPost
    variant?: 'default' | 'compact'
    showExcerpt?: boolean
    showAuthor?: boolean
    showDate?: boolean
  }) => (
    <div data-testid='post-card' data-variant={variant}>
      {post.title}
    </div>
  ),
}))

// Sample posts for testing
const mockPosts: InsightPost[] = [
  {
    id: '1',
    slug: 'post-1',
    title: 'Post 1',
    excerpt: 'Excerpt 1',
    content: 'Content 1',
    coverImage: '/images/post-1.jpg',
    date: '2023-10-15',
    author: { name: 'Author 1', title: 'Title 1' },
    category: 'Category 1',
    readTime: 5,
    featured: false,
  },
  {
    id: '2',
    slug: 'post-2',
    title: 'Post 2',
    excerpt: 'Excerpt 2',
    content: 'Content 2',
    coverImage: '/images/post-2.jpg',
    date: '2023-10-16',
    author: { name: 'Author 2', title: 'Title 2' },
    category: 'Category 2',
    readTime: 6,
    featured: false,
  },
  {
    id: '3',
    slug: 'post-3',
    title: 'Post 3',
    excerpt: 'Excerpt 3',
    content: 'Content 3',
    coverImage: '/images/post-3.jpg',
    date: '2023-10-17',
    author: { name: 'Author 3', title: 'Title 3' },
    category: 'Category 3',
    readTime: 7,
    featured: false,
  },
]

describe('PostGrid Component', () => {
  test('renders a PostCard for each post in the posts array', () => {
    render(<PostGrid posts={mockPosts} />)

    const postCards = screen.getAllByTestId('post-card')
    expect(postCards).toHaveLength(mockPosts.length)

    mockPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    })
  })

  test('renders empty state message when no posts are provided', () => {
    render(<PostGrid posts={[]} />)

    expect(screen.getByText(/no insights found/i)).toBeInTheDocument()
    expect(screen.queryByTestId('post-card')).not.toBeInTheDocument()
  })
})
