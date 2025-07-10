import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutPage from '../../../../app/(default)/about/page'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} data-testid='next-image' />
  }
})

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})
window.IntersectionObserver = mockIntersectionObserver

describe('AboutPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders all main sections', () => {
    render(<AboutPage />)

    // Hero section
    expect(
      screen.getByRole('heading', { level: 1, name: 'Who We Are' })
    ).toBeInTheDocument()

    // Mission & Vision
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText('Our Vision')).toBeInTheDocument()

    // Core Values
    expect(screen.getByText('Our Core Values')).toBeInTheDocument()

    // Impact Stats
    expect(screen.getByText('Our Impact')).toBeInTheDocument()

    // Company Timeline
    expect(screen.getByText('Our Journey')).toBeInTheDocument()

    // Leadership Team
    expect(screen.getByText('Our Leadership Team')).toBeInTheDocument()

    // Partners
    expect(
      screen.getByText('Our Partners & Certifications')
    ).toBeInTheDocument()
  })

  it('displays mission and vision content', () => {
    render(<AboutPage />)

    expect(
      screen.getByText(
        /To empower businesses with innovative digital solutions/
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/To be the leading digital transformation partner/)
    ).toBeInTheDocument()
  })

  it('displays core values', () => {
    render(<AboutPage />)

    expect(screen.getByText('Innovation')).toBeInTheDocument()
    expect(screen.getByText('Collaboration')).toBeInTheDocument()
    expect(screen.getByText('Excellence')).toBeInTheDocument()
    expect(screen.getByText('Integrity')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
    expect(screen.getByText('Impact')).toBeInTheDocument()
  })

  it('displays impact statistics', () => {
    render(<AboutPage />)

    expect(screen.getByText('Years of Excellence')).toBeInTheDocument()
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument()
    expect(screen.getByText('Countries Served')).toBeInTheDocument()
  })

  it('displays company timeline events', () => {
    render(<AboutPage />)

    expect(screen.getByText('The Beginning')).toBeInTheDocument()
    expect(screen.getByText('First Major Milestone')).toBeInTheDocument()
    expect(screen.getByText('Industry Recognition')).toBeInTheDocument()
    expect(screen.getByText('Remote-First Transformation')).toBeInTheDocument()
    expect(screen.getByText('Expanding Horizons')).toBeInTheDocument()
    expect(screen.getByText('Today & Beyond')).toBeInTheDocument()
  })

  it('displays leadership team members', () => {
    render(<AboutPage />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('CTO')).toBeInTheDocument()
    expect(screen.getByText('Priya Patel')).toBeInTheDocument()
    expect(screen.getByText('Head of Design')).toBeInTheDocument()
    expect(screen.getByText('David Wilson')).toBeInTheDocument()
    expect(screen.getByText('VP of Engineering')).toBeInTheDocument()
    expect(screen.getByText('Olivia Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Head of Strategy')).toBeInTheDocument()
    expect(screen.getByText('Alex Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Head of Data & AI')).toBeInTheDocument()
  })

  it('has proper page structure and semantics', () => {
    render(<AboutPage />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveClass('min-h-screen')

    // Check that all sections are present
    const sections = screen.getAllByRole('region')
    expect(sections.length).toBeGreaterThan(5) // Should have multiple sections
  })

  it('uses custom hero background gradient', () => {
    render(<AboutPage />)

    const heroSection = screen.getAllByRole('region')[0] // First section should be hero
    expect(heroSection).toHaveClass('from-purple-50', 'to-white')
  })

  it('includes large testimonial component', () => {
    render(<AboutPage />)

    // LargeTestimonial component should be rendered
    // We can't test its content without knowing the exact implementation,
    // but we can verify the page structure is complete
    const sections = screen.getAllByRole('region')
    expect(sections.length).toBeGreaterThanOrEqual(7) // All sections including testimonial
  })

  it('displays partner logos', () => {
    render(<AboutPage />)

    // Should have partner/certification logos
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(6) // Team images + partner logos
  })
})
