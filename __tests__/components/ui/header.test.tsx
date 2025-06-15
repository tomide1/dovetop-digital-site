import { render, screen, within } from '@testing-library/react'
import Header from '@/components/ui/header'

// Mock Next.js components
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

jest.mock('@/components/ui/logo', () => {
  return function MockLogo() {
    return <div data-testid='logo'>Logo</div>
  }
})

describe('Header Component', () => {
  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks()
  })

  describe('Desktop Navigation', () => {
    it('renders all top-level navigation items', () => {
      render(<Header />)

      // Target the desktop navigation specifically using aria-label
      const desktopNav = screen.getByLabelText('Main navigation')

      expect(within(desktopNav).getByText('Services')).toBeInTheDocument()
      expect(within(desktopNav).getByText('Case Studies')).toBeInTheDocument()
      expect(within(desktopNav).getByText('Insights')).toBeInTheDocument()
      expect(within(desktopNav).getByText('About Us')).toBeInTheDocument()
      expect(within(desktopNav).getByText('Contact')).toBeInTheDocument()
    })

    it('renders Contact link with standard styling', () => {
      render(<Header />)

      // Target the desktop navigation and find Contact link within it
      const desktopNav = screen.getByLabelText('Main navigation')
      const contactLink = within(desktopNav).getByText('Contact').closest('a')

      expect(contactLink).toHaveClass('text-gray-700 hover:text-gray-900')
    })

    it('has simple navigation without dropdowns', () => {
      render(<Header />)

      // Verify that the navigation is simple and direct
      const desktopNav = screen.getByLabelText('Main navigation')
      const navLinks = within(desktopNav).getAllByRole('link')

      // Should have exactly 5 navigation links
      expect(navLinks).toHaveLength(5)

      // Each link should be a direct navigation item
      expect(navLinks[0]).toHaveTextContent('Services')
      expect(navLinks[1]).toHaveTextContent('Case Studies')
      expect(navLinks[2]).toHaveTextContent('Insights')
      expect(navLinks[3]).toHaveTextContent('About Us')
      expect(navLinks[4]).toHaveTextContent('Contact')
    })
  })

  describe('Links', () => {
    it('has correct href attributes for navigation items', () => {
      render(<Header />)

      // Target the desktop navigation specifically
      const desktopNav = screen.getByLabelText('Main navigation')

      const servicesLink = within(desktopNav).getByText('Services').closest('a')
      const caseStudiesLink = within(desktopNav)
        .getByText('Case Studies')
        .closest('a')
      const insightsLink = within(desktopNav).getByText('Insights').closest('a')
      const aboutLink = within(desktopNav).getByText('About Us').closest('a')
      const contactLink = within(desktopNav).getByText('Contact').closest('a')

      expect(servicesLink).toHaveAttribute('href', '/services')
      expect(caseStudiesLink).toHaveAttribute('href', '/case-studies')
      expect(insightsLink).toHaveAttribute('href', '/insights')
      expect(aboutLink).toHaveAttribute('href', '/about')
      expect(contactLink).toHaveAttribute('href', '/contact')
    })
  })
})
