import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/shared/service-card'
import { Service } from '@/data/services'

// Mock service data for testing
const mockService: Service = {
  id: 'cloud-solutions',
  title: 'Cloud Solutions',
  shortDescription: 'Modern, robust, and scalable solutions in the cloud.',
  detailedDescription: 'Detailed description here',
  icon: '/images/icons/cloud.svg',
  benefits: ['Benefit 1', 'Benefit 2'],
  process: {
    steps: [
      { title: 'Step 1', description: 'Description 1' },
      { title: 'Step 2', description: 'Description 2' },
    ],
  },
  deliverables: ['Deliverable 1', 'Deliverable 2'],
}

const mockServiceWithoutIcon: Service = {
  ...mockService,
  id: 'no-icon-service',
  title: 'No Icon Service',
  icon: '',
}

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: {
    src?: string
    alt?: string
    width?: number
    height?: number
    className?: string
  }) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('ServiceCard Component', () => {
  describe('Basic Rendering', () => {
    test('renders service card with all basic information', () => {
      render(<ServiceCard service={mockService} />)

      expect(screen.getByText(mockService.title)).toBeInTheDocument()
      expect(screen.getByText(mockService.shortDescription)).toBeInTheDocument()
      expect(
        screen.getByTestId('service-card-cloud-solutions')
      ).toBeInTheDocument()
    })

    test('renders link with correct href', () => {
      render(<ServiceCard service={mockService} />)

      const link = screen.getByTestId('service-card-cloud-solutions')
      expect(link).toHaveAttribute('href', '/services/cloud-solutions')
    })

    test('displays service icon when provided', () => {
      render(<ServiceCard service={mockService} />)

      const icon = screen.getByAltText(mockService.title)
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveAttribute('src', mockService.icon)
    })

    test('displays fallback when no icon provided', () => {
      render(<ServiceCard service={mockServiceWithoutIcon} />)

      // Should not find an img with alt text, but should find the fallback div
      expect(
        screen.queryByAltText(mockServiceWithoutIcon.title)
      ).not.toBeInTheDocument()
      const fallbackIcon = screen
        .getByTestId('service-card-no-icon-service')
        .querySelector('.bg-blue-600.rounded-full')
      expect(fallbackIcon).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    test('renders default variant correctly', () => {
      render(<ServiceCard service={mockService} variant='default' />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveClass('p-8')
      expect(card).toHaveClass('rounded-2xl')
      expect(card).toHaveClass('border-2')
    })

    test('renders homepage variant with same styling as default', () => {
      render(<ServiceCard service={mockService} variant='homepage' />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveClass('p-8')
      expect(card).toHaveClass('rounded-2xl')
      expect(card).toHaveClass('border-2')
    })

    test('both variants use same icon size', () => {
      const { rerender } = render(
        <ServiceCard service={mockService} variant='default' />
      )

      let icon = screen.getByAltText(mockService.title)
      expect(icon).toHaveAttribute('width', '40')
      expect(icon).toHaveAttribute('height', '40')

      rerender(<ServiceCard service={mockService} variant='homepage' />)

      icon = screen.getByAltText(mockService.title)
      expect(icon).toHaveAttribute('width', '40')
      expect(icon).toHaveAttribute('height', '40')
    })
  })

  describe('Animation and Visibility', () => {
    test('applies visible classes when isVisible is true', () => {
      render(<ServiceCard service={mockService} isVisible={true} />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveClass('opacity-100')
      expect(card).toHaveClass('translate-y-0')
      expect(card).not.toHaveClass('opacity-0')
    })

    test('applies hidden classes when isVisible is false', () => {
      render(<ServiceCard service={mockService} isVisible={false} />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveClass('opacity-0')
      expect(card).toHaveClass('translate-y-8')
      expect(card).not.toHaveClass('opacity-100')
    })

    test('applies animation delay', () => {
      render(<ServiceCard service={mockService} animationDelay={500} />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveStyle('transition-delay: 500ms')
    })

    test('defaults to no animation delay when not provided', () => {
      render(<ServiceCard service={mockService} />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveStyle('transition-delay: 0ms')
    })
  })

  describe('Styling and Classes', () => {
    test('applies custom className', () => {
      render(
        <ServiceCard service={mockService} className='custom-test-class' />
      )

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveClass('custom-test-class')
    })

    test('has proper hover states', () => {
      render(<ServiceCard service={mockService} />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveClass('hover:-translate-y-2')
    })

    test('applies proper text alignment and spacing', () => {
      render(<ServiceCard service={mockService} />)

      const card = screen.getByTestId('service-card-cloud-solutions')
      expect(card).toHaveClass('text-center')
    })
  })

  describe('Accessibility', () => {
    test('has proper heading hierarchy', () => {
      render(<ServiceCard service={mockService} />)

      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toHaveTextContent(mockService.title)
    })

    test('link is accessible', () => {
      render(<ServiceCard service={mockService} />)

      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/services/cloud-solutions')
    })

    test('image has proper alt text', () => {
      render(<ServiceCard service={mockService} />)

      const image = screen.getByAltText(mockService.title)
      expect(image).toBeInTheDocument()
    })
  })

  describe('Content Display', () => {
    test('displays title with consistent styling across variants', () => {
      const { rerender } = render(
        <ServiceCard service={mockService} variant='default' />
      )

      let title = screen.getByText(mockService.title)
      expect(title).toHaveClass('text-xl')
      expect(title).toHaveClass('font-bold')
      expect(title).toHaveClass('text-gray-900')

      rerender(<ServiceCard service={mockService} variant='homepage' />)

      title = screen.getByText(mockService.title)
      expect(title).toHaveClass('text-xl')
      expect(title).toHaveClass('font-bold')
      expect(title).toHaveClass('text-gray-900')
    })

    test('displays description with consistent styling across variants', () => {
      const { rerender } = render(
        <ServiceCard service={mockService} variant='default' />
      )

      let description = screen.getByText(mockService.shortDescription)
      expect(description).toHaveClass('text-sm')

      rerender(<ServiceCard service={mockService} variant='homepage' />)

      description = screen.getByText(mockService.shortDescription)
      expect(description).toHaveClass('text-sm')
    })
  })
})
