import { render, screen, fireEvent } from '@testing-library/react'
import CategoryFilter from '@/components/insights/category-filter'

const mockCategories = [
  'All',
  'Cloud Solutions',
  'User-Centered Design',
  'Data Analytics & ML',
  'Security & Governance',
]

describe('CategoryFilter Component', () => {
  test('renders all provided categories as filter options', () => {
    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory='All'
        onFilterChange={jest.fn()}
      />
    )

    mockCategories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
  })

  test('calls onFilterChange with the correct category when a filter is clicked', () => {
    const handleFilterChange = jest.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory='All'
        onFilterChange={handleFilterChange}
      />
    )

    const cloudSolutionsButton = screen.getByText('Cloud Solutions')
    fireEvent.click(cloudSolutionsButton)

    expect(handleFilterChange).toHaveBeenCalledTimes(1)
    expect(handleFilterChange).toHaveBeenCalledWith('Cloud Solutions')
  })

  test('applies active styling to the selected category', () => {
    const selectedCategory = 'User-Centered Design'
    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory={selectedCategory}
        onFilterChange={jest.fn()}
      />
    )

    // Check that the selected category has the active class
    const activeButton = screen.getByText(selectedCategory)
    expect(activeButton.closest('button')).toHaveClass('bg-blue-600')

    // Check that other categories don't have the active class
    const nonActiveButton = screen.getByText('Cloud Solutions')
    expect(nonActiveButton.closest('button')).not.toHaveClass('bg-blue-600')
  })
})
