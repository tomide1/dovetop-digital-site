import { render, screen } from '@testing-library/react'
import WhatWeDoPage from '@/app/(default)/what-we-do/page'

// Mock the shared PageHero component
jest.mock('@/components/shared', () => ({
  PageHero: function MockPageHero({
    title,
    subtitle,
  }: {
    title: string
    subtitle: string
  }) {
    return (
      <div data-testid='page-hero'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    )
  },
}))

// Mock the what-we-do components
jest.mock('@/components/what-we-do/services-overview', () => {
  return function MockServicesOverview() {
    return <div data-testid='services-overview'>Services Overview</div>
  }
})

jest.mock('@/components/what-we-do/industries-overview', () => {
  return function MockIndustriesOverview() {
    return <div data-testid='industries-overview'>Industries Overview</div>
  }
})

describe('WhatWeDoPage', () => {
  test('renders all main sections', () => {
    render(<WhatWeDoPage />)

    expect(screen.getByTestId('page-hero')).toBeInTheDocument()
    expect(screen.getByTestId('services-overview')).toBeInTheDocument()
    expect(screen.getByTestId('industries-overview')).toBeInTheDocument()
  })

  test('has proper page structure', () => {
    render(<WhatWeDoPage />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveClass('min-h-screen')
  })

  test('renders correct page title and subtitle', () => {
    render(<WhatWeDoPage />)

    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(
      screen.getByText(/We deliver cutting-edge digital solutions/)
    ).toBeInTheDocument()
  })

  test('sections are in correct order', () => {
    render(<WhatWeDoPage />)

    const main = screen.getByRole('main')
    const sections = main.children

    expect(sections[0]).toHaveAttribute('data-testid', 'page-hero')
    expect(sections[1]).toHaveAttribute('data-testid', 'services-overview')
    expect(sections[2]).toHaveAttribute('data-testid', 'industries-overview')
  })
})
