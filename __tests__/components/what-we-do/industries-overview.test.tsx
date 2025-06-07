import React from 'react'
import { render, screen } from '@testing-library/react'
import IndustriesOverview from '@/components/what-we-do/industries-overview'
import { industries } from '@/data/industries'

// Mock the custom hook to control its return values
jest.mock('@/components/what-we-do/hooks/use-industries-overview', () => ({
  useIndustriesOverview: () => ({
    industries: industries.map((industry, index) => ({
      ...industry,
      isVisible: true,
      animationDelay: index * 100,
    })),
    isVisible: true,
    triggerAnimation: jest.fn(),
  }),
}))

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})
window.IntersectionObserver = mockIntersectionObserver

describe('IndustriesOverview', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders the main heading', () => {
    render(<IndustriesOverview />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Industries We Serve')
  })

  test('renders the correct number of industry cards', () => {
    render(<IndustriesOverview />)

    // Check that all industry cards are rendered
    industries.forEach((industry) => {
      const card = screen.getByTestId(`industry-card-${industry.id}`)
      expect(card).toBeInTheDocument()
    })
  })

  test('each industry card is a link with correct href', () => {
    render(<IndustriesOverview />)

    industries.forEach((industry) => {
      const card = screen.getByTestId(`industry-card-${industry.id}`)

      // Check that the card is a link element
      expect(card.tagName).toBe('A')

      // Check that the href points to the correct industry page
      expect(card).toHaveAttribute('href', `/industries/${industry.id}`)
    })
  })

  test('displays industry names and descriptions', () => {
    render(<IndustriesOverview />)

    industries.forEach((industry) => {
      // Check that industry name is displayed
      expect(screen.getByText(industry.name)).toBeInTheDocument()

      // Check that industry description is displayed (if it exists)
      if (industry.description) {
        expect(screen.getByText(industry.description)).toBeInTheDocument()
      }
    })
  })

  test('has correct data-testid attribute', () => {
    render(<IndustriesOverview />)

    const section = screen.getByTestId('industries-overview')
    expect(section).toBeInTheDocument()
    expect(section.tagName).toBe('SECTION')
  })

  test('applies correct CSS classes for responsive grid layout', () => {
    render(<IndustriesOverview />)

    const gridContainer = screen
      .getByTestId('industries-overview')
      .querySelector('.grid')
    expect(gridContainer).toHaveClass('md:grid-cols-2')
    expect(gridContainer).toHaveClass('lg:grid-cols-3')
  })
})
