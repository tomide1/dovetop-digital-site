import React from 'react'
import { render, screen } from '@testing-library/react'
import CompanyTimeline from '../../../components/about/company-timeline'

const mockTimeline = [
  {
    year: '2014',
    title: 'The Beginning',
    description:
      'Company was founded with a vision to transform digital solutions.',
  },
  {
    year: '2018',
    title: 'Major Milestone',
    description: 'Reached significant growth and industry recognition.',
  },
  {
    year: '2024',
    title: 'Today & Beyond',
    description: 'Continuing to innovate and expand our services.',
  },
]

describe('CompanyTimeline', () => {
  it('renders all timeline events', () => {
    render(<CompanyTimeline timeline={mockTimeline} />)

    expect(screen.getByText('Our Journey')).toBeInTheDocument()
    expect(screen.getByText('2014')).toBeInTheDocument()
    expect(screen.getByText('The Beginning')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Company was founded with a vision to transform digital solutions.'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('2018')).toBeInTheDocument()
    expect(screen.getByText('Major Milestone')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.getByText('Today & Beyond')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<CompanyTimeline timeline={mockTimeline} />)

    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toHaveTextContent('Our Journey')

    const eventHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(eventHeadings).toHaveLength(3)
  })

  it('applies correct styling classes', () => {
    render(<CompanyTimeline timeline={mockTimeline} />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass('bg-gray-50', 'py-16', 'md:py-24')

    const container = section.querySelector('.max-w-6xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6')
  })

  it('renders timeline events with proper structure', () => {
    render(<CompanyTimeline timeline={mockTimeline} />)

    const timelineContainer = screen.getByTestId('timeline-container')
    expect(timelineContainer).toBeInTheDocument()

    const events = screen.getAllByTestId(/timeline-event/)
    expect(events).toHaveLength(3)

    events.forEach((event, index) => {
      expect(event).toHaveClass(
        'relative',
        'flex',
        'items-start',
        'mb-8',
        'md:mb-12'
      )

      // Check for year badge
      const yearBadge = event.querySelector('[data-testid*="year-badge"]')
      expect(yearBadge).toBeInTheDocument()
      expect(yearBadge).toHaveClass('bg-blue-600', 'text-white', 'rounded-full')

      // Check for content area
      const content = event.querySelector('[data-testid*="event-content"]')
      expect(content).toBeInTheDocument()
      expect(content).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg', 'p-6')
    })
  })

  it('renders timeline line connector', () => {
    render(<CompanyTimeline timeline={mockTimeline} />)

    const timelineEvents = screen.getAllByTestId(/timeline-event/)

    // All events except the last should have a connector line
    timelineEvents.slice(0, -1).forEach((event, index) => {
      const connector = event.querySelector(
        '[data-testid*="timeline-connector"]'
      )
      expect(connector).toBeInTheDocument()
      expect(connector).toHaveClass(
        'absolute',
        'left-6',
        'top-12',
        'w-0.5',
        'bg-blue-200'
      )
    })
  })

  it('handles empty timeline array', () => {
    render(<CompanyTimeline timeline={[]} />)

    expect(screen.getByText('Our Journey')).toBeInTheDocument()
    expect(screen.queryByTestId(/timeline-event/)).not.toBeInTheDocument()
  })

  it('renders years in chronological order', () => {
    render(<CompanyTimeline timeline={mockTimeline} />)

    const yearBadges = screen.getAllByTestId(/year-badge/)
    expect(yearBadges[0]).toHaveTextContent('14')
    expect(yearBadges[1]).toHaveTextContent('18')
    expect(yearBadges[2]).toHaveTextContent('24')
  })
})
