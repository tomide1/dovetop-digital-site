import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

      expect(within(desktopNav).getByText('Who We Are')).toBeInTheDocument()
      expect(within(desktopNav).getByText('What We Do')).toBeInTheDocument()
      expect(within(desktopNav).getByText('What We Think')).toBeInTheDocument()
      expect(within(desktopNav).getByText('Contact')).toBeInTheDocument()
    })

    it('renders Contact button with CTA styling', () => {
      render(<Header />)

      // Target the desktop navigation and find Contact link within it
      const desktopNav = screen.getByLabelText('Main navigation')
      const contactLink = within(desktopNav).getByText('Contact').closest('a')

      expect(contactLink).toHaveClass(
        'bg-gradient-to-t from-blue-600 to-blue-500'
      )
    })

    it('shows "What We Do" dropdown on hover', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Target the desktop navigation and find "What We Do" within it
      const desktopNav = screen.getByLabelText('Main navigation')
      const whatWeDoItem = within(desktopNav).getByText('What We Do')

      // Hover over "What We Do"
      await user.hover(whatWeDoItem)

      // Wait for dropdown to appear
      await waitFor(() => {
        expect(screen.getByText('Services')).toBeInTheDocument()
        expect(screen.getByText('Industries')).toBeInTheDocument()
        expect(screen.getByText('Case Studies')).toBeInTheDocument()
      })
    })

    it('shows Services submenu on hover', async () => {
      const user = userEvent.setup()
      render(<Header />)

      // Target the desktop navigation
      const desktopNav = screen.getByLabelText('Main navigation')
      const whatWeDoItem = within(desktopNav).getByText('What We Do')

      // First hover over "What We Do" to open the dropdown
      await user.hover(whatWeDoItem)

      await waitFor(() => {
        expect(screen.getByText('Services')).toBeInTheDocument()
      })

      // Then hover over "Services" to open its submenu
      const servicesItem = screen.getByText('Services')
      await user.hover(servicesItem)

      // Check for service items (these come from data/services.ts)
      await waitFor(() => {
        expect(screen.getByText('Cloud Solutions')).toBeInTheDocument()
        expect(screen.getByText('User-Centered Design')).toBeInTheDocument()
        expect(
          screen.getByText('Data Analytics, Engineering & ML')
        ).toBeInTheDocument()
        expect(screen.getByText('Security & Governance')).toBeInTheDocument()
      })
    })
  })

  describe('Links', () => {
    it('has correct href attributes for top-level items', () => {
      render(<Header />)

      // Target the desktop navigation specifically
      const desktopNav = screen.getByLabelText('Main navigation')

      const whoWeAreLink = within(desktopNav)
        .getByText('Who We Are')
        .closest('a')
      const whatWeDoLink = within(desktopNav)
        .getByText('What We Do')
        .closest('a')
      const whatWeThinkLink = within(desktopNav)
        .getByText('What We Think')
        .closest('a')
      const contactLink = within(desktopNav).getByText('Contact').closest('a')

      expect(whoWeAreLink).toHaveAttribute('href', '/about')
      expect(whatWeDoLink).toHaveAttribute('href', '/what-we-do')
      expect(whatWeThinkLink).toHaveAttribute('href', '/insights')
      expect(contactLink).toHaveAttribute('href', '/contact')
    })
  })
})
