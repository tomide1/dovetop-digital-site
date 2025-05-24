import { render, screen } from '@testing-library/react'
import PostCard from '@/components/insights/post-card'
import { InsightPost } from '@/data/insights'

// Mock InsightPost for testing
const mockInsight: InsightPost = {
  id: '1',
  slug: 'sample-post',
  title: 'Sample Post Title',
  excerpt: 'This is a short excerpt for the sample post.',
  content: 'Full content here...',
  coverImage: '/images/sample-cover.jpg',
  date: '2023-10-26',
  author: { name: 'John Doe', title: 'Tech Lead' },
  category: 'Cloud Solutions',
  readTime: 5,
  featured: false,
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

describe('PostCard Component', () => {
  describe('Default variant', () => {
    test('renders all post information correctly', () => {
      render(<PostCard post={mockInsight} />)

      expect(screen.getByText(mockInsight.title)).toBeInTheDocument()
      expect(screen.getByText(mockInsight.excerpt)).toBeInTheDocument()
      expect(screen.getByText(mockInsight.author.name)).toBeInTheDocument()
      expect(
        screen.getByText(`${mockInsight.readTime} min read`)
      ).toBeInTheDocument()
      expect(screen.getByText(mockInsight.category)).toBeInTheDocument()

      const coverImage = screen.getByRole('img')
      expect(coverImage).toBeInTheDocument()
      expect(coverImage).toHaveAttribute('alt', mockInsight.title)
      expect(coverImage).toHaveAttribute(
        'src',
        expect.stringContaining('sample-cover')
      )

      // Check that we have links to the post detail page
      const links = screen.getAllByRole('link')
      expect(links.length).toBeGreaterThan(0)
      links.forEach((link) => {
        expect(link).toHaveAttribute('href', `/insights/${mockInsight.slug}`)
      })
    })

    test('renders correctly with minimal data (no excerpt)', () => {
      const minimalPost: InsightPost = {
        ...mockInsight,
        excerpt: '', // No excerpt
      }

      render(<PostCard post={minimalPost} />)
      expect(screen.getByText(minimalPost.title)).toBeInTheDocument()
      // Check that there's no empty space or element for the excerpt
      expect(screen.queryByTestId('post-excerpt')).not.toBeInTheDocument()
    })

    test('displays placeholder or handles missing cover image gracefully', () => {
      const postWithoutImage: InsightPost = {
        ...mockInsight,
        coverImage: '',
      }

      render(<PostCard post={postWithoutImage} />)

      // The component should still render the title and other elements
      expect(screen.getByText(postWithoutImage.title)).toBeInTheDocument()

      // Check that either a placeholder image is shown or no image is rendered
      const image = screen.queryByRole('img')
      if (image) {
        expect(image).toHaveAttribute(
          'src',
          expect.stringContaining('placeholder')
        )
      }
    })
  })

  describe('Compact variant', () => {
    test('renders with compact styling and no author/date info', () => {
      render(<PostCard post={mockInsight} variant='compact' />)

      // Should still show title and basic info
      expect(screen.getByText(mockInsight.title)).toBeInTheDocument()
      expect(screen.getByText(mockInsight.category)).toBeInTheDocument()
      expect(
        screen.getByText(`${mockInsight.readTime} min read`)
      ).toBeInTheDocument()

      // Should not show excerpt, author, or date by default
      expect(screen.queryByTestId('post-excerpt')).not.toBeInTheDocument()
      expect(
        screen.queryByText(mockInsight.author.name)
      ).not.toBeInTheDocument()
      expect(screen.queryByText(/October 26, 2023/)).not.toBeInTheDocument()

      // Check aria label includes "related post"
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute(
        'aria-label',
        `Read related post: ${mockInsight.title}`
      )
    })
  })

  describe('Custom display options', () => {
    test('can override excerpt display in default variant', () => {
      render(<PostCard post={mockInsight} showExcerpt={false} />)

      expect(screen.getByText(mockInsight.title)).toBeInTheDocument()
      expect(screen.queryByTestId('post-excerpt')).not.toBeInTheDocument()
      // Should still show author since we didn't override that
      expect(screen.getByText(mockInsight.author.name)).toBeInTheDocument()
    })

    test('can override author display in default variant', () => {
      render(<PostCard post={mockInsight} showAuthor={false} />)

      expect(screen.getByText(mockInsight.title)).toBeInTheDocument()
      expect(
        screen.queryByText(mockInsight.author.name)
      ).not.toBeInTheDocument()
      // Should still show excerpt since we didn't override that
      expect(screen.getByTestId('post-excerpt')).toBeInTheDocument()
    })

    test('can override date display in default variant', () => {
      render(<PostCard post={mockInsight} showDate={false} />)

      expect(screen.getByText(mockInsight.title)).toBeInTheDocument()
      expect(screen.queryByText(/October 26, 2023/)).not.toBeInTheDocument()
      // Should still show author since we didn't override that
      expect(screen.getByText(mockInsight.author.name)).toBeInTheDocument()
    })

    test('can force show excerpt in compact variant', () => {
      render(
        <PostCard post={mockInsight} variant='compact' showExcerpt={true} />
      )

      expect(screen.getByText(mockInsight.title)).toBeInTheDocument()
      expect(screen.getByTestId('post-excerpt')).toBeInTheDocument()
      // Should still hide author/date since compact variant overrides
      expect(
        screen.queryByText(mockInsight.author.name)
      ).not.toBeInTheDocument()
    })

    test('can force show author in compact variant', () => {
      render(
        <PostCard post={mockInsight} variant='compact' showAuthor={true} />
      )

      expect(screen.getByText(mockInsight.title)).toBeInTheDocument()
      expect(screen.getByText(mockInsight.author.name)).toBeInTheDocument()
      // Should still hide excerpt since compact variant overrides
      expect(screen.queryByTestId('post-excerpt')).not.toBeInTheDocument()
    })
  })
})
