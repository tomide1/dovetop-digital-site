import { render, screen, fireEvent } from '@testing-library/react'
import InsightsPage from '@/app/(default)/insights/page'
import { InsightPost } from '@/data/insights'

// Mocks for child components
jest.mock('@/components/insights/insights-hero', () => {
  const MockedInsightsHero = () => (
    <div data-testid='insights-hero'>Mocked Insights Hero</div>
  )
  MockedInsightsHero.displayName = 'InsightsHero'
  return MockedInsightsHero
})

jest.mock('@/components/insights/featured-post', () => ({
  __esModule: true,
  default: ({ post }: { post: InsightPost }) => (
    <div data-testid='featured-post'>{post.title}</div>
  ),
}))

jest.mock('@/components/insights/category-filter', () => ({
  __esModule: true,
  default: ({
    selectedCategory,
    onFilterChange,
  }: {
    selectedCategory: string
    onFilterChange: (category: string) => void
  }) => (
    <div data-testid='category-filter'>
      <span>Selected: {selectedCategory}</span>
      <button onClick={() => onFilterChange('Cloud Solutions')}>
        Filter Cloud Solutions
      </button>
      <button onClick={() => onFilterChange('All')}>Filter All</button>
    </div>
  ),
}))

jest.mock('@/components/insights/post-grid', () => ({
  __esModule: true,
  default: ({ posts }: { posts: InsightPost[] }) => (
    <div data-testid='post-grid'>
      {posts.map((post: InsightPost) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  ),
}))

describe('InsightsPage Component', () => {
  test('renders all required components', () => {
    render(<InsightsPage />)

    expect(screen.getByTestId('insights-hero')).toBeInTheDocument()
    expect(screen.getByTestId('featured-post')).toBeInTheDocument()
    expect(screen.getByTestId('category-filter')).toBeInTheDocument()
    expect(screen.getByTestId('post-grid')).toBeInTheDocument()
  })

  test('filtering changes displayed posts', async () => {
    render(<InsightsPage />)

    // Initially should show "All" category
    expect(screen.getByText('Selected: All')).toBeInTheDocument()

    // Filter to Cloud Solutions
    const filterButton = screen.getByText('Filter Cloud Solutions')
    fireEvent.click(filterButton)

    // Now should show "Cloud Solutions" category
    expect(screen.getByText('Selected: Cloud Solutions')).toBeInTheDocument()

    // Reset back to All
    const resetButton = screen.getByText('Filter All')
    fireEvent.click(resetButton)

    // Should show "All" category again
    expect(screen.getByText('Selected: All')).toBeInTheDocument()
  })
})
