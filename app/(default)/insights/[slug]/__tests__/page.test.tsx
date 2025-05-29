import { render, screen } from '@testing-library/react'
import { notFound } from 'next/navigation'
import PostDetailPage from '../page'
import { insights, InsightPost } from '@/data/insights'
import { TeamMember } from '@/data/team'

// Mock Next.js navigation and metadata
jest.mock('next/navigation', () => ({
  notFound: jest.fn().mockImplementation(() => {
    // This prevents the test from trying to render further
    throw new Error('NEXT_NOT_FOUND')
  }),
}))

// Mock Next.js Image component for testing
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

// Mock the insights module with getInsightWithAuthor
jest.mock('@/data/insights', () => ({
  insights: [
    {
      id: '1',
      slug: 'test-post',
      title: 'Test Post',
      excerpt: 'Test excerpt',
      content: 'Test content for the post',
      coverImage: '/images/test.jpg',
      date: '2023-10-26',
      authorName: 'Sarah Johnson',
      category: 'Cloud Solutions',
      readTime: 5,
      featured: false,
    },
  ],
  getInsightWithAuthor: jest.fn((post) => ({
    ...post,
    author: {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      title: 'Cloud Solutions Architect',
      image: '/images/team/sarah-johnson.svg',
      alt: 'Sarah Johnson headshot',
      isAuthor: true,
    },
  })),
}))

// Mock team data
jest.mock('@/data/team', () => ({
  getAuthorByName: jest.fn((name: string) => {
    if (name === 'Sarah Johnson') {
      return {
        id: 'sarah-johnson',
        name: 'Sarah Johnson',
        title: 'Cloud Solutions Architect',
        image: '/images/team/sarah-johnson.svg',
        alt: 'Sarah Johnson headshot',
        isAuthor: true,
      }
    }
    return undefined
  }),
}))

// Mock only the components that don't need integration testing
jest.mock('@/components/insights/post-content', () => ({
  __esModule: true,
  default: ({ post }: { post: InsightPost }) => (
    <div data-testid='post-content'>{post.content.substring(0, 20)}</div>
  ),
}))

jest.mock('@/components/insights/author-bio', () => ({
  __esModule: true,
  default: ({ author }: { author: TeamMember }) => (
    <div data-testid='author-bio'>{author.name}</div>
  ),
}))

jest.mock('@/components/insights/related-posts', () => ({
  __esModule: true,
  default: ({
    currentPostId,
    category,
  }: {
    currentPostId: string
    category: string
  }) => (
    <div data-testid='related-posts'>
      Related posts for {category} excluding {currentPostId}
    </div>
  ),
}))

jest.mock('@/components/insights/back-button', () => ({
  __esModule: true,
  default: () => <div data-testid='back-button'>Back to Insights</div>,
}))

describe('Post Detail Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render all post components with correct data', () => {
    const validPost = insights[0]
    render(<PostDetailPage params={{ slug: validPost.slug }} />)

    // Check that all components are rendered
    expect(screen.getByTestId('post-content')).toBeInTheDocument()
    expect(screen.getByTestId('author-bio')).toHaveTextContent('Sarah Johnson')
    expect(screen.getByTestId('back-button')).toBeInTheDocument()

    // Check related posts component
    const relatedPosts = screen.getByTestId('related-posts')
    expect(relatedPosts).toHaveTextContent(
      `Related posts for ${validPost.category}`
    )
    expect(relatedPosts).toHaveTextContent(`excluding ${validPost.id}`)
  })

  it('should render PostHeader with real integration', () => {
    const validPost = insights[0]
    render(<PostDetailPage params={{ slug: validPost.slug }} />)

    // Test real PostHeader integration - these should work with the actual component
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Post'
    )
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument()
    expect(screen.getByText('5 min read')).toBeInTheDocument()
    expect(screen.getByText('October 26, 2023')).toBeInTheDocument()

    // Test author information rendered by real PostHeader (using more specific selectors)
    const authorSection = screen.getByRole('heading', {
      level: 1,
    }).parentElement
    expect(authorSection).toHaveTextContent('Sarah Johnson')
    expect(authorSection).toHaveTextContent('Cloud Solutions Architect')

    // Test images are rendered
    expect(screen.getByTestId('cover-image')).toHaveAttribute(
      'data-src',
      '/images/test.jpg'
    )
    expect(screen.getByTestId('author-image')).toHaveAttribute(
      'data-src',
      '/images/team/sarah-johnson.svg'
    )
  })

  it('should handle missing author data gracefully', () => {
    // Mock getAuthorByName to return undefined for any name
    const { getAuthorByName } = jest.requireMock('@/data/team')
    getAuthorByName.mockReturnValue(undefined)

    const validPost = insights[0]
    render(<PostDetailPage params={{ slug: validPost.slug }} />)

    // Should still render the page
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Post'
    )

    // Should fallback to authorName when author is not found (check in header section)
    const headerSection = screen.getByRole('heading', {
      level: 1,
    }).parentElement
    expect(headerSection).toHaveTextContent('Sarah Johnson')

    // Should not render author image since author is not found
    expect(screen.queryByTestId('author-image')).not.toBeInTheDocument()
  })

  it('should call notFound when post is not found', () => {
    try {
      render(<PostDetailPage params={{ slug: 'non-existent-slug' }} />)
    } catch (error) {
      // Expected error due to notFound mock
      if ((error as Error).message !== 'NEXT_NOT_FOUND') {
        throw error
      }
    }
    expect(notFound).toHaveBeenCalled()
  })
})
