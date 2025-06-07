import { render, screen } from '@testing-library/react'
import WhatWeDoPage from '@/app/(default)/what-we-do/page'

// Mock the data to ensure consistent testing
jest.mock('@/data/services', () => ({
  services: [
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      shortDescription: 'Modern cloud solutions',
    },
  ],
}))

jest.mock('@/data/industries', () => ({
  industries: [
    {
      id: 'legal',
      name: 'Legal',
      description: 'Legal industry solutions',
    },
  ],
}))

jest.mock('@/utils/industry-helpers', () => ({
  getIndustryStats: () => ({ solutionsCount: 3, caseStudiesCount: 2 }),
  getIndustryDetails: () => ({
    industry: { id: 'legal', name: 'Legal', description: 'Legal industry' },
    applications: [],
    caseStudies: [],
    relatedServices: [],
  }),
  getIndustryIcon: () => '⚖️',
}))

describe('What We Do Page - Accessibility', () => {
  test('has proper heading hierarchy', () => {
    render(<WhatWeDoPage />)

    // Should have one h1
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()

    // Should have h2s for main sections
    const h2s = screen.getAllByRole('heading', { level: 2 })
    expect(h2s.length).toBeGreaterThan(0)

    // Ensure proper heading hierarchy (no skipped levels)
    const headings = screen.getAllByRole('heading')
    const levels = headings.map((h) => parseInt(h.tagName.slice(1)))

    for (let i = 1; i < levels.length; i++) {
      expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1)
    }
  })

  test('all interactive elements are keyboard accessible', () => {
    render(<WhatWeDoPage />)

    // All buttons should have proper roles (if any exist)
    const buttons = screen.queryAllByRole('button')
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('tabIndex')
    })

    // All links should be accessible
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('href')
    })
  })

  test('images have proper alt text', () => {
    render(<WhatWeDoPage />)

    const images = screen.queryAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  test('form elements have proper labels', () => {
    render(<WhatWeDoPage />)

    // Check for any form inputs (if present)
    const inputs = screen.queryAllByRole('textbox')
    inputs.forEach((input) => {
      // Should have either aria-label or associated label
      const hasAriaLabel = input.hasAttribute('aria-label')
      const hasAriaLabelledBy = input.hasAttribute('aria-labelledby')
      const hasLabel =
        input.hasAttribute('id') &&
        document.querySelector(`label[for="${input.getAttribute('id')}"]`)

      expect(hasAriaLabel || hasAriaLabelledBy || hasLabel).toBe(true)
    })
  })

  test('color contrast and visual indicators', () => {
    render(<WhatWeDoPage />)

    // Interactive elements should have focus indicators
    const interactiveElements = [
      ...screen.queryAllByRole('button'),
      ...screen.getAllByRole('link'),
    ]

    interactiveElements.forEach((element) => {
      // Should have focus styles (checked via CSS classes)
      const className = element.className
      expect(
        className.includes('focus:') ||
          className.includes('hover:') ||
          element.style.outline !== ''
      ).toBe(true)
    })
  })

  test('ARIA attributes are properly used', () => {
    render(<WhatWeDoPage />)

    // Check for proper ARIA usage
    const elementsWithAria = document.querySelectorAll(
      '[aria-pressed], [aria-expanded], [aria-describedby]'
    )

    elementsWithAria.forEach((element) => {
      // ARIA attributes should have valid values
      if (element.hasAttribute('aria-pressed')) {
        const value = element.getAttribute('aria-pressed')
        expect(['true', 'false'].includes(value!)).toBe(true)
      }

      if (element.hasAttribute('aria-expanded')) {
        const value = element.getAttribute('aria-expanded')
        expect(['true', 'false'].includes(value!)).toBe(true)
      }
    })
  })

  test('semantic HTML structure', () => {
    render(<WhatWeDoPage />)

    // Should have main landmark
    expect(screen.getByRole('main')).toBeInTheDocument()

    // Should have proper section structure
    const sections = document.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(0)

    // Each section should have a heading
    sections.forEach((section) => {
      const headings = section.querySelectorAll('h1, h2, h3, h4, h5, h6')
      expect(headings.length).toBeGreaterThan(0)
    })
  })
})
