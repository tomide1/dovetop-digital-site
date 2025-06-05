import { render, screen, waitFor } from '@testing-library/react'
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

      expect(screen.getByText('Who We Are')).toBeInTheDocument()
      expect(screen.getByText('What We Do')).toBeInTheDocument()
      expect(screen.getByText('What We Think')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('renders Contact button with CTA styling', () => {
      render(<Header />)

      const contactLink = screen.getByText('Contact').closest('a')
      expect(contactLink).toHaveClass(
        'bg-gradient-to-t from-blue-600 to-blue-500'
      )
    })

    it('shows "What We Do" dropdown on hover', async () => {
      const user = userEvent.setup()
      render(<Header />)

      const whatWeDoItem = screen.getByText('What We Do')

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

      const whatWeDoItem = screen.getByText('What We Do')

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

      const whoWeAreLink = screen.getByText('Who We Are').closest('a')
      const whatWeDoLink = screen.getByText('What We Do').closest('a')
      const whatWeThinkLink = screen.getByText('What We Think').closest('a')
      const contactLink = screen.getByText('Contact').closest('a')

      expect(whoWeAreLink).toHaveAttribute('href', '/about')
      expect(whatWeDoLink).toHaveAttribute('href', '/what-we-do')
      expect(whatWeThinkLink).toHaveAttribute('href', '/insights')
      expect(contactLink).toHaveAttribute('href', '/contact')
    })
  })
})
