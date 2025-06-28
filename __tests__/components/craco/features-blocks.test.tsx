import { render, screen } from '@testing-library/react'
import FeaturesBlocks from '@/components/craco/features-blocks'

// Mock the services data
jest.mock('@/data/services', () => ({
  services: [
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      shortDescription: 'Modern, robust, and scalable solutions in the cloud.',
      icon: '/images/icons/cloud.svg',
    },
    {
      id: 'user-centered-design',
      title: 'User-Centered Design',
      shortDescription: 'Solutions that prioritize your users needs.',
      icon: '/images/icons/design.svg',
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics, Engineering & ML',
      shortDescription: 'Data-driven insights and solutions.',
      icon: '/images/icons/data.svg',
    },
    {
      id: 'security-governance',
      title: 'Security & Governance',
      shortDescription: 'Comprehensive security solutions.',
      icon: '/images/icons/security.svg',
    },
  ],
}))

// Mock the shared ServiceCard component
jest.mock('@/components/shared/service-card', () => {
  return function MockServiceCard({
    service,
    variant,
  }: {
    service: { id: string; title: string; shortDescription: string }
    variant: string
  }) {
    return (
      <div data-testid={`service-card-${service.id}`} data-variant={variant}>
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
      </div>
    )
  }
})

describe('FeaturesBlocks Component', () => {
  test('renders section with correct structure', () => {
    render(<FeaturesBlocks />)

    const section = document.querySelector('section#features')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'features')
  })

  test('renders section header with correct content', () => {
    render(<FeaturesBlocks />)

    expect(screen.getByText('Our')).toBeInTheDocument()
    expect(screen.getByText('Expertise')).toBeInTheDocument()
    expect(
      screen.getByText(/At Dovetop Digital, our tailored solutions/)
    ).toBeInTheDocument()
  })

  test('renders all service cards', () => {
    render(<FeaturesBlocks />)

    expect(
      screen.getByTestId('service-card-cloud-solutions')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('service-card-user-centered-design')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('service-card-data-analytics')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('service-card-security-governance')
    ).toBeInTheDocument()
  })

  test('service cards use default variant', () => {
    render(<FeaturesBlocks />)

    const serviceCards = screen.getAllByTestId(/service-card-/)
    serviceCards.forEach((card) => {
      expect(card).toHaveAttribute('data-variant', 'default')
    })
  })

  test('service cards display correct content', () => {
    render(<FeaturesBlocks />)

    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument()
    expect(screen.getByText('User-Centered Design')).toBeInTheDocument()
    expect(
      screen.getByText('Data Analytics, Engineering & ML')
    ).toBeInTheDocument()
    expect(screen.getByText('Security & Governance')).toBeInTheDocument()

    expect(
      screen.getByText('Modern, robust, and scalable solutions in the cloud.')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Solutions that prioritize your users needs.')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Data-driven insights and solutions.')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Comprehensive security solutions.')
    ).toBeInTheDocument()
  })

  test('has proper heading hierarchy', () => {
    render(<FeaturesBlocks />)

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toBeInTheDocument()
    expect(mainHeading.textContent).toContain('Our')
    expect(mainHeading.textContent).toContain('Expertise')
  })

  test('applies proper grid layout classes', () => {
    render(<FeaturesBlocks />)

    const gridContainer = document.querySelector('.grid.gap-8')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveClass('md:grid-cols-2')
    expect(gridContainer).toHaveClass('lg:grid-cols-3')
  })

  test('includes background decorative elements', () => {
    render(<FeaturesBlocks />)

    // Check for background elements
    const backgroundElements = document.querySelectorAll('[aria-hidden="true"]')
    expect(backgroundElements.length).toBeGreaterThan(0)
  })

  test('applies AOS animation attribute to heading', () => {
    render(<FeaturesBlocks />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveAttribute('data-aos', 'zoom-y-out')
  })

  test('has proper section spacing and layout', () => {
    render(<FeaturesBlocks />)

    const section = document.querySelector('section#features')
    expect(section).toHaveClass('relative')

    const contentContainer = section?.querySelector(
      '.relative.max-w-6xl.mx-auto'
    )
    expect(contentContainer).toBeInTheDocument()
  })
})
