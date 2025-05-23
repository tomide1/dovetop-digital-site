import { render, screen } from '@testing-library/react'
import InsightsHero from '@/components/insights/insights-hero'

describe('InsightsHero Component', () => {
  test('renders hero with title and description', () => {
    render(<InsightsHero />)

    // Check for title
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/insights/i)

    // Check for description
    const description = screen.getByText(/thought leadership/i)
    expect(description).toBeInTheDocument()
  })

  test('has the appropriate styling classes', () => {
    const { container } = render(<InsightsHero />)

    // Check that the section element exists with proper styling
    const heroSection = container.querySelector('section')
    expect(heroSection).toBeInTheDocument()
    expect(heroSection).toHaveClass('bg-gradient-to-r')
  })
})
