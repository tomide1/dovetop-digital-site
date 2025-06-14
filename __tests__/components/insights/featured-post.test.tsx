import { render, screen } from '@testing-library/react'
import FeaturedPost from '@/components/insights/featured-post'
import { InsightPost } from '@/data/insights'

// Mock featured insight for testing
const mockFeaturedInsight: InsightPost = {
  id: '1',
  slug: 'featured-post',
  title: 'Featured Post Title',
  excerpt: 'This is a featured post excerpt that should stand out.',
  content: 'Full content for the featured post...',
  coverImage: '/images/insights/featured-cover.jpg',
  date: '2023-11-15',
  author: { name: 'Jane Smith', title: 'Chief Technology Officer' },
  category: 'Data Analytics & ML',
  readTime: 7,
  featured: true,
}

describe('FeaturedPost Component', () => {
  test('renders featured post with all information correctly', () => {
    render(<FeaturedPost post={mockFeaturedInsight} />)

    // Title should be present and prominently displayed
    expect(screen.getByText(mockFeaturedInsight.title)).toBeInTheDocument()

    // Excerpt should be rendered
    expect(screen.getByText(mockFeaturedInsight.excerpt)).toBeInTheDocument()

    // Author information should be displayed
    expect(
      screen.getByText(mockFeaturedInsight.author.name)
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
    const coverImage = screen.getByRole('img')
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
    const minimalFeaturedPost: InsightPost = {
      ...mockFeaturedInsight,
      excerpt: '',
      author: { name: 'Anonymous', title: '' },
    }

    render(<FeaturedPost post={minimalFeaturedPost} />)

    // Title should still be present
    expect(screen.getByText(minimalFeaturedPost.title)).toBeInTheDocument()

    // Author should show "Anonymous"
    expect(screen.getByText('Anonymous')).toBeInTheDocument()

    // Should not show an empty excerpt
    expect(screen.queryByTestId('featured-excerpt')).not.toBeInTheDocument()
  })
})
