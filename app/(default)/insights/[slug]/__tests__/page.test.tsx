import { render, screen } from '@testing-library/react'
import { notFound } from 'next/navigation'
import PostDetailPage from '../page'
import { insights, Author, InsightPost } from '@/data/insights'

// The global mock in jest.setup.ts will handle next/navigation

// Mock components
jest.mock('@/components/insights/post-header', () => ({
  __esModule: true,
  default: ({ post }: { post: InsightPost }) => (
    <div data-testid='post-header'>{post.title}</div>
  ),
}))

jest.mock('@/components/insights/post-content', () => ({
  __esModule: true,
  default: ({ post }: { post: InsightPost }) => (
    <div data-testid='post-content'>{post.content.substring(0, 20)}</div>
  ),
}))

jest.mock('@/components/insights/author-bio', () => ({
  __esModule: true,
  default: ({ author }: { author: Author }) => (
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

    // Check that all components are rendered with correct props
    expect(screen.getByTestId('post-header')).toHaveTextContent(validPost.title)
    expect(screen.getByTestId('post-content')).toBeInTheDocument()
    expect(screen.getByTestId('author-bio')).toHaveTextContent(
      validPost.author.name
    )
    expect(screen.getByTestId('back-button')).toBeInTheDocument()

    // Check related posts component
    const relatedPosts = screen.getByTestId('related-posts')
    expect(relatedPosts).toHaveTextContent(
      `Related posts for ${validPost.category}`
    )
    expect(relatedPosts).toHaveTextContent(`excluding ${validPost.id}`)
  })

  it('should call notFound when post is not found', () => {
    // Use Jest's toThrow matcher to properly test for errors thrown during render
    expect(() => {
      render(<PostDetailPage params={{ slug: 'non-existent-slug' }} />)
    }).toThrow('NEXT_NOT_FOUND')

    // Verify that the notFound function was called
    expect(notFound).toHaveBeenCalled()
  })
})
