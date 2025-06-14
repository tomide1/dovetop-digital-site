import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CaseStudyCard from '../case-study-card'
import type { CaseStudy } from '@/data/case-studies'

// Mock case study data
const mockCaseStudy: CaseStudy = {
  id: 'test-case-study',
  title: 'Test Case Study Title',
  serviceIds: ['cloud-solutions'],
  shortDescription:
    'This is a test case study description for testing purposes.',
  detailedDescription: 'Detailed description for testing',
  results: [
    'Improved performance by 50%',
    'Reduced costs by 30%',
    'Increased user satisfaction by 25%',
  ],
  imageUrl: 'https://example.com/test-image.jpg',
  client: 'Test Client Corp',
  industryIds: ['healthcare'],
  duration: '6 months',
  technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
}

const mockCaseStudyMinimal: CaseStudy = {
  id: 'minimal-case-study',
  title: 'Minimal Case Study',
  serviceIds: ['data-analytics'],
  shortDescription: 'Minimal description',
  detailedDescription: 'Detailed description',
  results: [],
  imageUrl: '',
  client: 'Minimal Client',
  industryIds: [],
  duration: '3 months',
  technologies: [],
}

describe('CaseStudyCard', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders case study title and description', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      expect(screen.getByText('Test Case Study Title')).toBeInTheDocument()
      expect(
        screen.getByText(
          'This is a test case study description for testing purposes.'
        )
      ).toBeInTheDocument()
      expect(screen.getByText('Read Case Study')).toBeInTheDocument()
    })

    it('renders as a link to the case study detail page', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/case-studies/test-case-study')
    })

    it('applies default data-testid', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      expect(
        screen.getByTestId('case-study-card-test-case-study')
      ).toBeInTheDocument()
    })

    it('applies custom data-testid when provided', () => {
      render(
        <CaseStudyCard caseStudy={mockCaseStudy} data-testid='custom-test-id' />
      )

      expect(screen.getByTestId('custom-test-id')).toBeInTheDocument()
    })
  })

  // Results display tests
  describe('Results Display', () => {
    it('renders results badges correctly', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      expect(
        screen.getByText('Improved performance by 50%')
      ).toBeInTheDocument()
      expect(screen.getByText('Reduced costs by 30%')).toBeInTheDocument()
    })

    it('shows correct number of results based on maxResults prop', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} maxResults={1} />)

      expect(
        screen.getByText('Improved performance by 50%')
      ).toBeInTheDocument()
      expect(screen.queryByText('Reduced costs by 30%')).not.toBeInTheDocument()
      expect(screen.getByText('+2 more')).toBeInTheDocument()
    })

    it('handles empty results array gracefully', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudyMinimal} />)

      expect(
        screen.queryByText('Improved performance by 50%')
      ).not.toBeInTheDocument()
      expect(screen.getByText('Read Case Study')).toBeInTheDocument()
    })
  })

  // Conditional rendering tests
  describe('Conditional Rendering', () => {
    it('shows client name when showClient is true', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} showClient={true} />)

      expect(screen.getByText('Test Client Corp')).toBeInTheDocument()
    })

    it('hides client name when showClient is false', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} showClient={false} />)

      expect(screen.queryByText('Test Client Corp')).not.toBeInTheDocument()
    })

    it('shows industry tags when showIndustry is true', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} showIndustry={true} />)

      expect(screen.getByText('Healthcare')).toBeInTheDocument()
    })

    it('shows duration when showDuration is true', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} showDuration={true} />)

      expect(screen.getByText('6 months')).toBeInTheDocument()
    })

    it('shows technologies when showTechnologies is true', () => {
      render(
        <CaseStudyCard caseStudy={mockCaseStudy} showTechnologies={true} />
      )

      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('Node.js')).toBeInTheDocument()
      expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
      expect(screen.getByText('Docker')).toBeInTheDocument()
      expect(screen.getByText('+1')).toBeInTheDocument() // Shows +1 for the 5th technology
    })

    it('shows image when showImage is true and imageUrl exists', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} showImage={true} />)

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg')
      expect(image).toHaveAttribute('alt', 'Test Case Study Title')
    })

    it('does not show image when showImage is false', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} showImage={false} />)

      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('does not show image when imageUrl is empty', () => {
      render(
        <CaseStudyCard caseStudy={mockCaseStudyMinimal} showImage={true} />
      )

      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })
  })

  // Variant tests
  describe('Variants', () => {
    it('renders default variant correctly', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} variant='default' />)

      const title = screen.getByText('Test Case Study Title')
      expect(title).toHaveClass('text-xl')
    })

    it('renders compact variant correctly', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} variant='compact' />)

      const title = screen.getByText('Test Case Study Title')
      expect(title).toHaveClass('text-lg')
    })

    it('renders featured variant correctly', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} variant='featured' />)

      const title = screen.getByText('Test Case Study Title')
      expect(title).toHaveClass('text-2xl')
    })

    it('applies custom className', () => {
      render(
        <CaseStudyCard caseStudy={mockCaseStudy} className='custom-class' />
      )

      const link = screen.getByRole('link')
      expect(link).toHaveClass('custom-class')
    })
  })

  // Service badge tests
  describe('Service Badge', () => {
    it('displays correct service badge for cloud-solutions', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      expect(screen.getByText('Cloud Solutions')).toBeInTheDocument()
    })

    it('displays correct service badge for data-analytics', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudyMinimal} />)

      expect(screen.getByText('Data Analytics')).toBeInTheDocument()
    })
  })

  // Interaction tests
  describe('Interactions', () => {
    it('calls onClick handler when provided', () => {
      const mockOnClick = jest.fn()
      render(<CaseStudyCard caseStudy={mockCaseStudy} onClick={mockOnClick} />)

      const link = screen.getByRole('link')
      fireEvent.click(link)

      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('does not throw error when onClick is not provided', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      const link = screen.getByRole('link')
      expect(() => fireEvent.click(link)).not.toThrow()
    })
  })

  // Accessibility tests
  describe('Accessibility', () => {
    it('has proper link structure', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/case-studies/test-case-study')
    })

    it('has proper image alt text when image is shown', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} showImage={true} />)

      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'Test Case Study Title')
    })

    it('has aria-hidden on decorative icons', () => {
      render(<CaseStudyCard caseStudy={mockCaseStudy} />)

      const arrowIcon = screen.getByRole('link').querySelector('svg')
      expect(arrowIcon).toHaveAttribute('aria-hidden', 'true')
    })
  })

  // Edge cases
  describe('Edge Cases', () => {
    it('handles missing optional data gracefully', () => {
      const incompleteCaseStudy = {
        ...mockCaseStudy,
        imageUrl: '',
        technologies: [],
        results: [],
      }

      render(
        <CaseStudyCard
          caseStudy={incompleteCaseStudy}
          showImage={true}
          showTechnologies={true}
        />
      )

      expect(screen.getByText('Test Case Study Title')).toBeInTheDocument()
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('handles long titles gracefully', () => {
      const longTitleCaseStudy = {
        ...mockCaseStudy,
        title:
          'This is an extremely long case study title that should wrap properly and not break the layout or cause any visual issues',
      }

      render(<CaseStudyCard caseStudy={longTitleCaseStudy} />)

      expect(screen.getByText(longTitleCaseStudy.title)).toBeInTheDocument()
    })

    it('handles case study with no industry IDs', () => {
      render(
        <CaseStudyCard caseStudy={mockCaseStudyMinimal} showIndustry={true} />
      )

      expect(screen.queryByText('Healthcare')).not.toBeInTheDocument()
    })

    it('handles unknown service ID gracefully', () => {
      const unknownServiceCaseStudy = {
        ...mockCaseStudy,
        serviceIds: ['unknown-service'],
      }

      render(<CaseStudyCard caseStudy={unknownServiceCaseStudy} />)

      expect(screen.getByText('Unknown Service')).toBeInTheDocument()
    })
  })
})
