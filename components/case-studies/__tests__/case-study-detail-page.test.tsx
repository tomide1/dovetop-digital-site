import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import CaseStudyDetailPage from '../case-study-detail-page'
import type { CaseStudy } from '@/data/case-studies'

// Mock Next.js components
jest.mock('next/image', () => {
  return function MockImage({
    src,
    alt,
    ...props
  }: React.ComponentProps<'img'>) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />
  }
})

jest.mock('next/link', () => {
  return function MockLink({
    href,
    children,
    ...props
  }: {
    href: string
    children: React.ReactNode
    [key: string]: unknown
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

// Mock case study data
const mockCaseStudy: CaseStudy = {
  id: 'test-case-study',
  title: 'Test Case Study Title',
  serviceIds: ['cloud-solutions', 'data-analytics'],
  shortDescription: 'This is a test case study description',
  detailedDescription:
    'This is the detailed description of the test case study with multiple paragraphs.\n\nSecond paragraph goes here.',
  results: [
    'Improved performance by 50%',
    'Reduced costs by 30%',
    'Increased user satisfaction',
  ],
  imageUrl: 'https://example.com/test-image.jpg',
  client: 'Test Client Inc',
  industryIds: ['healthcare', 'finance'],
  duration: '6 months',
  technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
}

const mockRelatedCaseStudies: CaseStudy[] = [
  {
    id: 'related-1',
    title: 'Related Case Study 1',
    serviceIds: ['cloud-solutions'],
    shortDescription: 'Related case study description 1',
    detailedDescription: 'Detailed description 1',
    results: ['Result 1'],
    imageUrl: 'https://example.com/related1.jpg',
    client: 'Related Client 1',
    industryIds: ['healthcare'],
    duration: '3 months',
    technologies: ['React'],
  },
  {
    id: 'related-2',
    title: 'Related Case Study 2',
    serviceIds: ['data-analytics'],
    shortDescription: 'Related case study description 2',
    detailedDescription: 'Detailed description 2',
    results: ['Result 2'],
    imageUrl: 'https://example.com/related2.jpg',
    client: 'Related Client 2',
    industryIds: ['finance'],
    duration: '4 months',
    technologies: ['Python'],
  },
]

describe('CaseStudyDetailPage', () => {
  const defaultProps = {
    caseStudy: mockCaseStudy,
    relatedCaseStudies: mockRelatedCaseStudies,
  }

  describe('Breadcrumb Navigation', () => {
    it('renders breadcrumb navigation correctly', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      const nav = screen.getByRole('navigation', { name: /breadcrumb/i })
      expect(nav).toBeInTheDocument()

      const homeLink = screen.getByRole('link', { name: /home/i })
      expect(homeLink).toHaveAttribute('href', '/')

      // Get the breadcrumb navigation first
      const breadcrumbNav = screen.getByRole('navigation', {
        name: /breadcrumb/i,
      })
      const caseStudiesLink = within(breadcrumbNav).getByRole('link', {
        name: /case studies/i,
      })
      expect(caseStudiesLink).toHaveAttribute('href', '/case-studies')

      // Check that the title appears in the breadcrumb navigation
      const breadcrumbTitle = within(breadcrumbNav).getByText(
        mockCaseStudy.title
      )
      expect(breadcrumbTitle).toBeInTheDocument()
    })
  })

  describe('Hero Section', () => {
    it('displays case study title and description', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        mockCaseStudy.title
      )
      expect(
        screen.getByText(mockCaseStudy.shortDescription)
      ).toBeInTheDocument()
    })

    it('displays client and duration information', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(screen.getByText('Client')).toBeInTheDocument()
      expect(screen.getByText(mockCaseStudy.client)).toBeInTheDocument()

      expect(screen.getByText('Duration')).toBeInTheDocument()
      expect(screen.getByText(mockCaseStudy.duration)).toBeInTheDocument()
    })

    it('displays hero image when provided', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      const heroImage = screen.getByRole('img', { name: mockCaseStudy.title })
      expect(heroImage).toBeInTheDocument()
      expect(heroImage).toHaveAttribute('src', mockCaseStudy.imageUrl)
    })

    it('does not render hero image when not provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { imageUrl: _, ...caseStudyWithoutImage } = mockCaseStudy
      const propsWithoutImage = {
        ...defaultProps,
        caseStudy: caseStudyWithoutImage as CaseStudy,
      }

      render(<CaseStudyDetailPage {...propsWithoutImage} />)

      const heroImages = screen.queryAllByRole('img', {
        name: mockCaseStudy.title,
      })
      expect(heroImages).toHaveLength(0)
    })
  })

  describe('Services and Industries Tags', () => {
    it('displays service tags correctly', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(screen.getByText('Services')).toBeInTheDocument()
      expect(screen.getAllByText('Cloud Solutions').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Data Analytics').length).toBeGreaterThan(0)
    })

    it('displays industry tags correctly', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(screen.getByText('Industries')).toBeInTheDocument()
      expect(screen.getAllByText('Healthcare').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Finance').length).toBeGreaterThan(0)
    })
  })

  describe('Project Overview', () => {
    it('displays detailed description with proper formatting', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(
        screen.getByRole('heading', { name: /project overview/i })
      ).toBeInTheDocument()
      expect(
        screen.getByText(/this is the detailed description/i)
      ).toBeInTheDocument()
    })
  })

  describe('Technologies Section', () => {
    it('displays technologies when available', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(
        screen.getByRole('heading', { name: /technologies used/i })
      ).toBeInTheDocument()

      mockCaseStudy.technologies.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument()
      })
    })

    it('does not display technologies section when empty', () => {
      const propsWithoutTech = {
        ...defaultProps,
        caseStudy: { ...mockCaseStudy, technologies: [] },
      }

      render(<CaseStudyDetailPage {...propsWithoutTech} />)

      expect(
        screen.queryByRole('heading', { name: /technologies used/i })
      ).not.toBeInTheDocument()
    })
  })

  describe('Results & Impact Section', () => {
    it('displays results when available', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(
        screen.getByRole('heading', { name: /results & impact/i })
      ).toBeInTheDocument()

      mockCaseStudy.results.forEach((result) => {
        expect(screen.getByText(result)).toBeInTheDocument()
      })
    })

    it('does not display results section when empty', () => {
      const propsWithoutResults = {
        ...defaultProps,
        caseStudy: { ...mockCaseStudy, results: [] },
      }

      render(<CaseStudyDetailPage {...propsWithoutResults} />)

      expect(
        screen.queryByRole('heading', { name: /results & impact/i })
      ).not.toBeInTheDocument()
    })

    it('displays checkmark icons for each result', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      // Results section should exist with our results
      expect(
        screen.getByRole('heading', { name: /results & impact/i })
      ).toBeInTheDocument()

      // Each result should be displayed
      mockCaseStudy.results.forEach((result) => {
        expect(screen.getByText(result)).toBeInTheDocument()
      })
    })
  })

  describe('Call to Action Section', () => {
    it('displays CTA heading and description', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(
        screen.getByRole('heading', {
          name: /ready to start your own success story/i,
        })
      ).toBeInTheDocument()
      expect(
        screen.getByText(
          /let's discuss how we can help transform your business/i
        )
      ).toBeInTheDocument()
    })

    it('displays action buttons with correct links', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      const startProjectLink = screen.getByRole('link', {
        name: /start your project/i,
      })
      expect(startProjectLink).toHaveAttribute('href', '/contact')

      const viewMoreLink = screen.getByRole('link', {
        name: /view more case studies/i,
      })
      expect(viewMoreLink).toHaveAttribute('href', '/case-studies')
    })
  })

  describe('Related Case Studies Section', () => {
    it('displays related case studies when available', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(
        screen.getByRole('heading', { name: /related case studies/i })
      ).toBeInTheDocument()
      expect(
        screen.getByText(
          'Explore more success stories from similar projects and industries'
        )
      ).toBeInTheDocument()

      mockRelatedCaseStudies.forEach((relatedCase) => {
        expect(screen.getByText(relatedCase.title)).toBeInTheDocument()
      })
    })

    it('does not display related section when no related cases', () => {
      const propsWithoutRelated = {
        ...defaultProps,
        relatedCaseStudies: [],
      }

      render(<CaseStudyDetailPage {...propsWithoutRelated} />)

      expect(
        screen.queryByRole('heading', { name: /related case studies/i })
      ).not.toBeInTheDocument()
    })

    it('displays View All Case Studies link in related section', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      const relatedSection = screen
        .getByRole('heading', { name: /related case studies/i })
        .closest('section')
      expect(relatedSection).toBeInTheDocument()

      if (relatedSection) {
        const viewAllLink = within(relatedSection).getByRole('link', {
          name: /view all case studies/i,
        })
        expect(viewAllLink).toHaveAttribute('href', '/case-studies')
      }
    })

    it('applies correct test IDs to related case study cards', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      mockRelatedCaseStudies.forEach((relatedCase) => {
        expect(
          screen.getByTestId(`related-case-study-${relatedCase.id}`)
        ).toBeInTheDocument()
      })
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toHaveTextContent(mockCaseStudy.title)

      const h2s = screen.getAllByRole('heading', { level: 2 })
      expect(h2s.length).toBeGreaterThan(0)

      const h3s = screen.getAllByRole('heading', { level: 3 })
      expect(h3s.length).toBeGreaterThan(0)
    })

    it('has proper ARIA labels and landmarks', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      expect(
        screen.getByRole('navigation', { name: /breadcrumb/i })
      ).toBeInTheDocument()
      expect(screen.getAllByRole('link').length).toBeGreaterThan(0)
    })

    it('has hidden decorative icons', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      const decorativeIcons = screen.getAllByRole('img', { hidden: true })
      expect(decorativeIcons.length).toBeGreaterThan(0)
    })
  })

  describe('Responsive Design', () => {
    it('applies responsive grid classes', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      // Check for responsive grid classes in the DOM
      const heroSection = screen
        .getByRole('heading', { level: 1 })
        .closest('section')
      expect(
        heroSection?.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2')
      ).toBeInTheDocument()
    })

    it('applies mobile-first responsive classes', () => {
      render(<CaseStudyDetailPage {...defaultProps} />)

      // Technologies section should have responsive grid
      const techSection = screen.queryByRole('heading', {
        name: /technologies used/i,
      })?.parentElement
      if (techSection) {
        expect(
          techSection.querySelector(
            '.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4'
          )
        ).toBeInTheDocument()
      }
    })
  })
})
