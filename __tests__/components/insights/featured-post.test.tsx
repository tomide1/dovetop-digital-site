import { render, screen } from '@testing-library/react'
import FeaturedPost from '@/components/insights/featured-post'
import { InsightWithAuthor } from '@/data/insights'

// Mock featured insight for testing
const mockFeaturedInsight: InsightWithAuthor = {
  id: '1',
  slug: 'featured-post',
  title: 'Featured Post Title',
  excerpt: 'This is a featured post excerpt that should stand out.',
  content: 'Full content for the featured post...',
  coverImage: '/images/insights/featured-cover.jpg',
  date: '2023-11-15',
  authorName: 'Jane Smith',
  author: {
    id: 'jane-smith',
    name: 'Jane Smith',
    title: 'Chief Technology Officer',
    image: '/images/team/jane-smith.svg',
    alt: 'Jane Smith headshot',
    isAuthor: true,
  },
  category: 'Data Analytics & ML',
  readTime: 7,
  featured: true,
}

// Mock Next.js's Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { fill?: boolean; [key: string]: unknown }) => {
    // Remove fill prop to avoid warnings in test
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, ...restProps } = props
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...restProps} />
  },
}))

describe('FeaturedPost Component', () => {
  test('renders featured post with all information correctly', () => {
    render(<FeaturedPost post={mockFeaturedInsight} />)

    // Title should be present and prominently displayed
    expect(screen.getByText(mockFeaturedInsight.title)).toBeInTheDocument()

    // Excerpt should be rendered
    expect(screen.getByText(mockFeaturedInsight.excerpt)).toBeInTheDocument()

    // Author information should be displayed
    expect(
      screen.getByText(mockFeaturedInsight.author!.name)
    ).toBeInTheDocument()

    // Read time should be shown
    expect(
      screen.getByText(`${mockFeaturedInsight.readTime} min read`)
    ).toBeInTheDocument()

    // Category should be displayed
    expect(screen.getByText(mockFeaturedInsight.category)).toBeInTheDocument()

    // Should indicate it's a featured post
    expect(screen.getByText('Featured')).toBeInTheDocument()

    // Cover image should be rendered
    const images = screen.getAllByRole('img')
    const coverImage = images.find(
      (img) => img.getAttribute('alt') === mockFeaturedInsight.title
    )
    expect(coverImage).toBeInTheDocument()
    expect(coverImage).toHaveAttribute('alt', mockFeaturedInsight.title)
    expect(coverImage).toHaveAttribute(
      'src',
      expect.stringContaining('featured-cover')
    )

    // Should link to the post details page
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        `/insights/${mockFeaturedInsight.slug}`
      )
    })
  })

  test('renders correctly with minimal data', () => {
    const minimalFeaturedPost: InsightWithAuthor = {
      id: '2',
      slug: 'minimal-featured-post',
      title: 'Minimal Featured Post Title',
      excerpt: '',
      content: 'Full content for the minimal featured post...',
      coverImage: '/images/insights/minimal-featured-cover.jpg',
      date: '2023-11-15',
      authorName: 'Anonymous',
      author: {
        id: 'anonymous',
        name: 'Anonymous',
        title: '',
        image: '/images/team/anonymous.svg',
        alt: 'Anonymous headshot',
        isAuthor: true,
      },
      category: 'Data Analytics & ML',
      readTime: 7,
      featured: true,
    }

    render(<FeaturedPost post={minimalFeaturedPost} />)

    // Title should still be present
    expect(screen.getByText(minimalFeaturedPost.title)).toBeInTheDocument()

    // Author should show "Anonymous"
    expect(screen.getByText('Anonymous')).toBeInTheDocument()

    // Should not show an empty excerpt
    expect(screen.queryByTestId('featured-excerpt')).not.toBeInTheDocument()
  })

  test('handles missing author gracefully', () => {
    const postWithoutAuthor: InsightWithAuthor = {
      id: '3',
      slug: 'no-author-featured-post',
      title: 'Featured Post Without Author',
      excerpt: 'This featured post has no author.',
      content: 'Full content for the featured post...',
      coverImage: '/images/insights/no-author-featured-cover.jpg',
      date: '2023-11-15',
      authorName: 'Unknown Author',
      author: undefined,
      category: 'Data Analytics & ML',
      readTime: 7,
      featured: true,
    }

    render(<FeaturedPost post={postWithoutAuthor} />)

    // Title should still be present
    expect(screen.getByText(postWithoutAuthor.title)).toBeInTheDocument()

    // Should not show author information
    expect(screen.queryByText('Unknown Author')).not.toBeInTheDocument()

    // Should still show other information
    expect(screen.getByText(postWithoutAuthor.category)).toBeInTheDocument()
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })
})
