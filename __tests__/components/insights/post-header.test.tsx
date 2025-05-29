import { render, screen } from '@testing-library/react'
import PostHeader from '@/components/insights/post-header'
import { InsightPost } from '@/data/insights'
import { getAuthorByName } from '@/data/team'

// Mock the getAuthorByName function
jest.mock('@/data/team', () => ({
  getAuthorByName: jest.fn(),
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    fill,
    className,
  }: {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    className?: string
  }) => (
    <div
      data-src={src}
      data-alt={alt}
      data-width={width}
      data-height={height}
      className={className}
      data-testid={fill ? 'cover-image' : 'author-image'}
      role='img'
      aria-label={alt}
    />
  ),
}))

const mockGetAuthorByName = getAuthorByName as jest.MockedFunction<
  typeof getAuthorByName
>

describe('PostHeader Component', () => {
  const basePost: InsightPost = {
    id: '1',
    slug: 'test-post',
    title: 'Test Post Title',
    excerpt: 'Test excerpt',
    content: 'Test content',
    coverImage: '/images/test-cover.jpg',
    date: '2023-10-26',
    authorName: 'John Doe',
    category: 'Cloud Solutions',
    readTime: 5,
    featured: false,
  }

  const mockAuthor = {
    id: 'john-doe',
    name: 'John Doe',
    title: 'Senior Developer',
    image: '/images/team/john-doe.svg',
    alt: 'John Doe headshot',
    isAuthor: true,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Basic Rendering', () => {
    it('should render all basic post information', () => {
      mockGetAuthorByName.mockReturnValue(mockAuthor)

      render(<PostHeader post={basePost} />)

      // Check title
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Test Post Title'
      )

      // Check category
      expect(screen.getByText('Cloud Solutions')).toBeInTheDocument()

      // Check read time
      expect(screen.getByText('5 min read')).toBeInTheDocument()

      // Check formatted date
      expect(screen.getByText('October 26, 2023')).toBeInTheDocument()

      // Check cover image
      expect(screen.getByTestId('cover-image')).toHaveAttribute(
        'data-src',
        '/images/test-cover.jpg'
      )
      expect(screen.getByTestId('cover-image')).toHaveAttribute(
        'data-alt',
        'Test Post Title'
      )
    })

    it('should use placeholder image when coverImage is missing', () => {
      mockGetAuthorByName.mockReturnValue(mockAuthor)
      const postWithoutCover = { ...basePost, coverImage: '' }

      render(<PostHeader post={postWithoutCover} />)

      expect(screen.getByTestId('cover-image')).toHaveAttribute(
        'data-src',
        '/images/insights/placeholder.svg'
      )
    })
  })

  describe('Author Information', () => {
    it('should render complete author information when author exists', () => {
      mockGetAuthorByName.mockReturnValue(mockAuthor)

      render(<PostHeader post={basePost} />)

      // Check author name
      expect(screen.getByText('John Doe')).toBeInTheDocument()

      // Check author title
      expect(screen.getByText('Senior Developer')).toBeInTheDocument()

      // Check author image
      const authorImage = screen.getByTestId('author-image')
      expect(authorImage).toHaveAttribute(
        'data-src',
        '/images/team/john-doe.svg'
      )
      expect(authorImage).toHaveAttribute('data-alt', 'John Doe')
      expect(authorImage).toHaveAttribute('data-width', '48')
      expect(authorImage).toHaveAttribute('data-height', '48')
    })

    it('should fallback to authorName when author is not found', () => {
      mockGetAuthorByName.mockReturnValue(undefined)

      render(<PostHeader post={basePost} />)

      // Should display the authorName as fallback
      expect(screen.getByText('John Doe')).toBeInTheDocument()

      // Should not display title since author object doesn't exist
      expect(screen.queryByText('Senior Developer')).not.toBeInTheDocument()

      // Should not render author image
      expect(screen.queryByTestId('author-image')).not.toBeInTheDocument()
    })

    it('should handle author without image', () => {
      const authorWithoutImage = { ...mockAuthor, image: '' }
      mockGetAuthorByName.mockReturnValue(authorWithoutImage)

      render(<PostHeader post={basePost} />)

      // Should display author name and title
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('Senior Developer')).toBeInTheDocument()

      // Should not render author image
      expect(screen.queryByTestId('author-image')).not.toBeInTheDocument()
    })

    it('should handle missing authorName gracefully', () => {
      const postWithoutAuthorName = { ...basePost, authorName: '' }
      mockGetAuthorByName.mockReturnValue(undefined)

      render(<PostHeader post={postWithoutAuthorName} />)

      // Should display fallback text
      expect(screen.getByText('Unknown Author')).toBeInTheDocument()

      // Should not display title
      expect(screen.queryByText('Senior Developer')).not.toBeInTheDocument()

      // Should not render author image
      expect(screen.queryByTestId('author-image')).not.toBeInTheDocument()
    })

    it('should handle author with missing name but valid authorName', () => {
      const authorWithoutName = { ...mockAuthor, name: '' }
      mockGetAuthorByName.mockReturnValue(authorWithoutName)

      render(<PostHeader post={basePost} />)

      // Should fallback to authorName from post
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('Senior Developer')).toBeInTheDocument()
    })
  })

  describe('Date Formatting', () => {
    it('should format different date formats correctly', () => {
      const testCases = [
        { date: '2023-01-15', expected: 'January 15, 2023' },
        { date: '2023-12-31', expected: 'December 31, 2023' },
        { date: '2023-06-01', expected: 'June 1, 2023' },
      ]

      testCases.forEach(({ date, expected }) => {
        const postWithDate = { ...basePost, date }
        mockGetAuthorByName.mockReturnValue(mockAuthor)

        const { unmount } = render(<PostHeader post={postWithDate} />)

        expect(screen.getByText(expected)).toBeInTheDocument()

        unmount()
      })
    })

    it('should include proper datetime attribute', () => {
      mockGetAuthorByName.mockReturnValue(mockAuthor)

      render(<PostHeader post={basePost} />)

      const timeElement = screen.getByText('October 26, 2023')
      expect(timeElement.tagName).toBe('TIME')
      expect(timeElement).toHaveAttribute('dateTime', '2023-10-26')
    })
  })

  describe('Categories and Metadata', () => {
    it('should render different categories with proper styling', () => {
      const categories = [
        'Cloud Solutions',
        'User-Centered Design',
        'Data Analytics & ML',
        'Security & Governance',
      ]

      categories.forEach((category) => {
        const postWithCategory = { ...basePost, category }
        mockGetAuthorByName.mockReturnValue(mockAuthor)

        const { unmount } = render(<PostHeader post={postWithCategory} />)

        const categoryElement = screen.getByText(category)
        expect(categoryElement).toBeInTheDocument()
        expect(categoryElement).toHaveClass('inline-block')
        expect(categoryElement).toHaveClass('rounded-full')
        expect(categoryElement).toHaveClass('bg-blue-100')
        expect(categoryElement).toHaveClass('text-blue-800')

        unmount()
      })
    })

    it('should display read time correctly', () => {
      const readTimes = [1, 5, 10, 15]

      readTimes.forEach((readTime) => {
        const postWithReadTime = { ...basePost, readTime }
        mockGetAuthorByName.mockReturnValue(mockAuthor)

        const { unmount } = render(<PostHeader post={postWithReadTime} />)

        expect(screen.getByText(`${readTime} min read`)).toBeInTheDocument()

        unmount()
      })
    })
  })

  describe('Error Handling', () => {
    it('should not crash when getAuthorByName throws an error', () => {
      mockGetAuthorByName.mockImplementation(() => {
        throw new Error('Database error')
      })

      expect(() => render(<PostHeader post={basePost} />)).not.toThrow()

      // Should fallback to authorName
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('should handle invalid date gracefully', () => {
      const postWithInvalidDate = { ...basePost, date: 'invalid-date' }
      mockGetAuthorByName.mockReturnValue(mockAuthor)

      expect(() =>
        render(<PostHeader post={postWithInvalidDate} />)
      ).not.toThrow()

      // The invalid date should still render something (browser dependent)
      expect(screen.getByRole('heading')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      mockGetAuthorByName.mockReturnValue(mockAuthor)

      render(<PostHeader post={basePost} />)

      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Test Post Title')
    })

    it('should have proper alt text for images', () => {
      mockGetAuthorByName.mockReturnValue(mockAuthor)

      render(<PostHeader post={basePost} />)

      const coverImage = screen.getByTestId('cover-image')
      expect(coverImage).toHaveAttribute('data-alt', 'Test Post Title')

      const authorImage = screen.getByTestId('author-image')
      expect(authorImage).toHaveAttribute('data-alt', 'John Doe')
    })

    it('should have semantic time element with datetime attribute', () => {
      mockGetAuthorByName.mockReturnValue(mockAuthor)

      render(<PostHeader post={basePost} />)

      const timeElement = screen.getByText('October 26, 2023')
      expect(timeElement.tagName).toBe('TIME')
      expect(timeElement).toHaveAttribute('dateTime', '2023-10-26')
    })
  })
})
