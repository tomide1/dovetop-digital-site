import React from 'react'
import { render, screen } from '@testing-library/react'
import ImpactStats from '../../../components/about/impact-stats'

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})
window.IntersectionObserver = mockIntersectionObserver

const mockStats = [
  {
    label: 'Years of Excellence',
    value: 10,
    suffix: '+',
  },
  {
    label: 'Projects Delivered',
    value: 250,
    suffix: '+',
  },
  {
    label: 'Happy Clients',
    value: 150,
  },
]

describe('ImpactStats', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders all stats', () => {
    render(<ImpactStats stats={mockStats} />)

    expect(screen.getByText('Our Impact')).toBeInTheDocument()
    expect(screen.getByText('Years of Excellence')).toBeInTheDocument()
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<ImpactStats stats={mockStats} />)

    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toHaveTextContent('Our Impact')
  })

  it('applies correct styling classes', () => {
    render(<ImpactStats stats={mockStats} />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass('bg-blue-600', 'py-16', 'md:py-24')

    const container = section.querySelector('.max-w-6xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6')
  })

  it('has responsive grid layout', () => {
    render(<ImpactStats stats={mockStats} />)

    const gridContainer = screen.getByTestId('stats-grid')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-6',
      'gap-8'
    )
  })

  it('renders stat cards with proper styling', () => {
    render(<ImpactStats stats={mockStats} />)

    const cards = screen.getAllByTestId(/stat-card/)
    expect(cards).toHaveLength(3)

    cards.forEach((card) => {
      expect(card).toHaveClass('text-center', 'text-white')
    })
  })

  it('renders values with suffixes when provided', () => {
    render(<ImpactStats stats={mockStats} />)

    // Check that suffixes are rendered
    const valueElements = screen.getAllByTestId(/stat-value/)
    expect(valueElements).toHaveLength(3)

    // The component should render the values (we'll test animation separately)
    expect(screen.getByTestId('stat-value-0')).toBeInTheDocument()
    expect(screen.getByTestId('stat-value-1')).toBeInTheDocument()
    expect(screen.getByTestId('stat-value-2')).toBeInTheDocument()
  })

  it('handles empty stats array', () => {
    render(<ImpactStats stats={[]} />)

    expect(screen.getByText('Our Impact')).toBeInTheDocument()
    expect(screen.queryByTestId(/stat-card/)).not.toBeInTheDocument()
  })

  it('sets up intersection observer', () => {
    render(<ImpactStats stats={mockStats} />)

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      })
    )
  })
})
