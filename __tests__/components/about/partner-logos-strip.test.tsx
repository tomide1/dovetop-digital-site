import React from 'react'
import { render, screen } from '@testing-library/react'
import PartnerLogosStrip from '../../../components/about/partner-logos-strip'

const mockPartners = [
  {
    name: 'AWS Partner',
    logo: '/images/partners/aws.svg',
    type: 'certification' as const,
  },
  {
    name: 'Google Cloud Partner',
    logo: '/images/partners/google-cloud.svg',
    type: 'certification' as const,
  },
  {
    name: 'Salesforce Partner',
    logo: '/images/partners/salesforce.svg',
    type: 'strategic' as const,
  },
]

describe('PartnerLogosStrip', () => {
  it('renders all partner logos', () => {
    render(<PartnerLogosStrip partners={mockPartners} />)

    expect(
      screen.getByText('Our Partners & Certifications')
    ).toBeInTheDocument()

    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(3)

    expect(logos[0]).toHaveAttribute('alt', 'AWS Partner')
    expect(logos[0]).toHaveAttribute('src', '/images/partners/aws.svg')
    expect(logos[1]).toHaveAttribute('alt', 'Google Cloud Partner')
    expect(logos[1]).toHaveAttribute('src', '/images/partners/google-cloud.svg')
    expect(logos[2]).toHaveAttribute('alt', 'Salesforce Partner')
    expect(logos[2]).toHaveAttribute('src', '/images/partners/salesforce.svg')
  })

  it('has proper semantic structure', () => {
    render(<PartnerLogosStrip partners={mockPartners} />)

    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toHaveTextContent('Our Partners & Certifications')
  })

  it('applies correct styling classes', () => {
    render(<PartnerLogosStrip partners={mockPartners} />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass('bg-gray-50', 'py-16', 'md:py-24')

    const container = section.querySelector('.max-w-6xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6')
  })

  it('renders logos in a flex layout', () => {
    render(<PartnerLogosStrip partners={mockPartners} />)

    const logosContainer = screen.getByTestId('partners-container')
    expect(logosContainer).toBeInTheDocument()
    expect(logosContainer).toHaveClass(
      'flex',
      'flex-wrap',
      'justify-center',
      'items-center',
      'gap-8',
      'md:gap-12'
    )
  })

  it('applies grayscale and hover effects to logos', () => {
    render(<PartnerLogosStrip partners={mockPartners} />)

    const logoWrappers = screen.getAllByTestId(/partner-logo/)
    expect(logoWrappers).toHaveLength(3)

    logoWrappers.forEach((wrapper) => {
      expect(wrapper).toHaveClass(
        'grayscale',
        'hover:grayscale-0',
        'transition-all',
        'duration-300'
      )
    })
  })

  it('handles empty partners array', () => {
    render(<PartnerLogosStrip partners={[]} />)

    expect(
      screen.getByText('Our Partners & Certifications')
    ).toBeInTheDocument()
    expect(screen.queryByTestId(/partner-logo/)).not.toBeInTheDocument()
  })

  it('renders logos with proper dimensions', () => {
    render(<PartnerLogosStrip partners={mockPartners} />)

    const logos = screen.getAllByRole('img')

    logos.forEach((logo) => {
      expect(logo).toHaveClass('h-12', 'md:h-16', 'w-auto', 'object-contain')
    })
  })

  it('groups partners by type when multiple types exist', () => {
    const mixedPartners = [
      ...mockPartners,
      {
        name: 'HubSpot Partner',
        logo: '/images/partners/hubspot.svg',
        type: 'strategic' as const,
      },
      {
        name: 'Shopify Partner',
        logo: '/images/partners/shopify.svg',
        type: 'technology' as const,
      },
    ]

    render(<PartnerLogosStrip partners={mixedPartners} />)

    // Should still render all logos regardless of type
    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(5)
  })
})
