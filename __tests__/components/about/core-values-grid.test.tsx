import React from 'react'
import { render, screen } from '@testing-library/react'
import CoreValuesGrid from '../../../components/about/core-values-grid'

const mockValues = [
  {
    icon: 'innovation',
    title: 'Innovation',
    description: 'Test innovation description',
  },
  {
    icon: 'collaboration',
    title: 'Collaboration',
    description: 'Test collaboration description',
  },
  {
    icon: 'excellence',
    title: 'Excellence',
    description: 'Test excellence description',
  },
]

describe('CoreValuesGrid', () => {
  it('renders all core values', () => {
    render(<CoreValuesGrid values={mockValues} />)

    expect(screen.getByText('Our Core Values')).toBeInTheDocument()
    expect(screen.getByText('Innovation')).toBeInTheDocument()
    expect(screen.getByText('Collaboration')).toBeInTheDocument()
    expect(screen.getByText('Excellence')).toBeInTheDocument()
    expect(screen.getByText('Test innovation description')).toBeInTheDocument()
    expect(
      screen.getByText('Test collaboration description')
    ).toBeInTheDocument()
    expect(screen.getByText('Test excellence description')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<CoreValuesGrid values={mockValues} />)

    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toHaveTextContent('Our Core Values')

    const valueHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(valueHeadings).toHaveLength(3)
  })

  it('applies correct styling classes', () => {
    render(<CoreValuesGrid values={mockValues} />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass('py-16', 'md:py-24')

    const container = section.querySelector('.max-w-6xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6')
  })

  it('has responsive grid layout', () => {
    render(<CoreValuesGrid values={mockValues} />)

    const gridContainer = screen.getByTestId('values-grid')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-3',
      'gap-8'
    )
  })

  it('renders value cards with proper styling', () => {
    render(<CoreValuesGrid values={mockValues} />)

    const cards = screen.getAllByTestId(/value-card/)
    expect(cards).toHaveLength(3)

    cards.forEach((card) => {
      expect(card).toHaveClass(
        'bg-white',
        'rounded-lg',
        'shadow-lg',
        'p-6',
        'text-center'
      )
    })
  })

  it('renders icons for each value', () => {
    render(<CoreValuesGrid values={mockValues} />)

    const icons = screen.getAllByTestId(/value-icon/)
    expect(icons).toHaveLength(3)

    icons.forEach((icon) => {
      expect(icon).toHaveClass('w-12', 'h-12', 'mx-auto', 'mb-4')
    })
  })

  it('handles empty values array', () => {
    render(<CoreValuesGrid values={[]} />)

    expect(screen.getByText('Our Core Values')).toBeInTheDocument()
    expect(screen.queryByTestId(/value-card/)).not.toBeInTheDocument()
  })
})
