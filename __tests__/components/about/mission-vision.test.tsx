import React from 'react'
import { render, screen } from '@testing-library/react'
import MissionVision from '../../../components/about/mission-vision'

const mockData = {
  mission: 'Test mission statement',
  vision: 'Test vision statement',
}

describe('MissionVision', () => {
  it('renders mission and vision content', () => {
    render(
      <MissionVision mission={mockData.mission} vision={mockData.vision} />
    )

    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
    expect(screen.getByText(mockData.mission)).toBeInTheDocument()
    expect(screen.getByText(mockData.vision)).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(
      <MissionVision mission={mockData.mission} vision={mockData.vision} />
    )

    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(2)
    expect(headings[0]).toHaveTextContent('Our Mission')
    expect(headings[1]).toHaveTextContent('Our Vision')
  })

  it('applies correct styling classes', () => {
    render(
      <MissionVision mission={mockData.mission} vision={mockData.vision} />
    )

    const section = screen.getByRole('region')
    expect(section).toHaveClass('py-16', 'md:py-24')

    const container = section.querySelector('.max-w-6xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6')
  })

  it('has responsive grid layout', () => {
    render(
      <MissionVision mission={mockData.mission} vision={mockData.vision} />
    )

    const gridContainer = screen.getByRole('region').querySelector('.grid')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveClass(
      'grid-cols-1',
      'md:grid-cols-2',
      'gap-8',
      'md:gap-12'
    )
  })

  it('renders mission and vision cards with proper styling', () => {
    render(
      <MissionVision mission={mockData.mission} vision={mockData.vision} />
    )

    const cards = screen.getAllByTestId(/mission-vision-card/)
    expect(cards).toHaveLength(2)

    cards.forEach((card) => {
      expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg', 'p-8')
    })
  })
})
