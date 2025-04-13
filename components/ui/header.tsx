import Link from 'next/link'
import { useState, useRef, useEffect, memo, useCallback } from 'react'
import Logo from './logo'

/**
 * Interface for navigation items to ensure type safety and consistency
 */
interface NavigationItem {
  label: string
  href: string
  isEnabled?: boolean // For future use if some links need to be disabled
}

/**
 * Central configuration for all navigation items
 * This makes it easier to maintain and update navigation structure
 */
const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Define CSS classes for animation delays
const ANIMATION_DELAY_CLASSES = [
  'delay-[50ms]',
  'delay-[100ms]',
  'delay-[150ms]',
  'delay-[200ms]',
  'delay-[250ms]',
  'delay-[300ms]',
  'delay-[350ms]',
]

/**
 * Desktop navigation component
 * Renders horizontal navigation links for desktop/tablet view
 */
const DesktopNavigation = memo(() => {
  return (
    <nav className='hidden md:flex' aria-label='Main navigation'>
      <ul className='flex items-center space-x-8'>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className='text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-2 py-1 cursor-pointer transition duration-150 ease-in-out'
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
})

/**
 * Mobile menu button component
 * Renders the hamburger/close button for mobile navigation
 */
interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
  buttonRef: React.RefObject<HTMLButtonElement>
}

const MobileMenuButton = memo<MobileMenuButtonProps>(
  ({ isOpen, onClick, buttonRef }) => {
    return (
      <button
        ref={buttonRef}
        className='md:hidden text-gray-800'
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        aria-label='Toggle navigation menu'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className={`w-6 h-6 transition-transform duration-300 ease-in-out pointer-events-none ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>
    )
  }
)

/**
 * Mobile menu item component
 * Renders an individual menu item with animation effects
 */
interface MobileMenuItemProps {
  item: NavigationItem
  isOpen: boolean
  index: number
  onClick: () => void
}

const MobileMenuItem = memo<MobileMenuItemProps>(
  ({ item, isOpen, index, onClick }) => {
    // Get delay class based on index (default to the last class if index is out of bounds)
    const delayClass =
      ANIMATION_DELAY_CLASSES[index] ||
      ANIMATION_DELAY_CLASSES[ANIMATION_DELAY_CLASSES.length - 1]

    return (
      <li
        className={`transform transition-all duration-300 ease-in-out ${delayClass} ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}
      >
        <Link
          href={item.href}
          className='block py-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-2'
          onClick={onClick}
          onKeyDown={(e) => {
            // Close menu when pressing Enter or Space key
            if (e.key === 'Enter' || e.key === ' ') {
              onClick()
            }
          }}
        >
          {item.label}
        </Link>
      </li>
    )
  }
)

/**
 * Mobile navigation component
 * Renders the mobile navigation menu with animated items
 */
interface MobileNavigationProps {
  isOpen: boolean
  menuRef: React.RefObject<HTMLDivElement>
  onItemClick: () => void
}

const MobileNavigation = memo<MobileNavigationProps>(
  ({ isOpen, menuRef, onItemClick }) => {
    return (
      <div
        id='mobile-menu'
        ref={menuRef}
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
        role='navigation'
        aria-label='Mobile navigation'
      >
        <nav className='px-4 py-3'>
          <ul className='flex flex-col space-y-3' role='menu'>
            {NAVIGATION_ITEMS.map((item, index) => (
              <MobileMenuItem
                key={item.href}
                item={item}
                isOpen={isOpen}
                index={index}
                onClick={onItemClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    )
  }
)

/**
 * Focus trap component for accessibility
 * Handles keyboard navigation within the mobile menu
 * - Traps focus inside the menu when open
 * - Allows closing menu with Escape key
 * - Returns focus to button when menu closes
 */
interface FocusTrapProps {
  isActive: boolean
  containerRef: React.RefObject<HTMLElement>
  buttonRef: React.RefObject<HTMLElement>
  onClose: () => void
}

const FocusTrap: React.FC<FocusTrapProps> = ({
  isActive,
  containerRef,
  buttonRef,
  onClose,
}) => {
  // Store previous active element to restore focus when trap deactivates
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Store the active element when the trap is activated
  useEffect(() => {
    if (isActive) {
      previousFocusRef.current = document.activeElement as HTMLElement
    }
  }, [isActive])

  // Restore focus when the trap is deactivated
  useEffect(() => {
    if (!isActive && previousFocusRef.current) {
      // Small delay to ensure elements are available
      setTimeout(() => {
        buttonRef.current?.focus()
      }, 10)
    }
  }, [isActive, buttonRef])

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    // Get all focusable elements within the container
    const focusableElements = containerRef.current.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement

    // Focus the first element when the trap is activated
    firstElement.focus()

    // Handle Tab key navigation to keep focus within container
    function handleTabKey(e: KeyboardEvent) {
      if (e.key !== 'Tab') return

      // Shift+Tab on first element should focus last element
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      }
      // Tab on last element should focus first element
      else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    // Handle Escape key to close the menu
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isActive) {
        onClose()
      }
    }

    // Add event listeners
    document.addEventListener('keydown', handleTabKey)
    document.addEventListener('keydown', handleEscape)

    return () => {
      // Remove event listeners when component unmounts or trap deactivates
      document.removeEventListener('keydown', handleTabKey)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isActive, containerRef, onClose])

  return null // This component doesn't render anything
}

/**
 * Header component
 *
 * Renders the site header with responsive navigation:
 * - Desktop navigation for larger screens
 * - Mobile navigation with animated dropdown for smaller screens
 * - Accessible keyboard navigation
 * - Focus management for better accessibility
 *
 * @returns {JSX.Element} The header component
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Memoize event handlers using useCallback
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  // Handle click outside to close the menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // First check if click was on the button - if so, do nothing
      if (
        buttonRef.current &&
        buttonRef.current.contains(event.target as Node)
      ) {
        return
      }

      // Then check if click was outside the menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        mobileMenuOpen
      ) {
        closeMobileMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen, closeMobileMenu])

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className='fixed top-0 z-30 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/60 shadow-sm'>
      <div className='mx-auto w-full px-4 sm:px-6'>
        <div className='flex h-16 items-center justify-between'>
          {/* Site branding */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center gap-2'
              aria-label='Dovetop Digital Homepage'
            >
              <Logo />
              <span className='hidden md:inline text-gray-900 font-bold text-xl tracking-wide'>
                Dovetop Digital
              </span>
            </Link>
          </div>

          {/* Main Navigation */}
          <DesktopNavigation />

          {/* Hamburger button - Mobile only */}
          <MobileMenuButton
            isOpen={mobileMenuOpen}
            onClick={toggleMobileMenu}
            buttonRef={buttonRef}
          />

          {/* Desktop sign in links */}
          {/* <ul className='flex items-center gap-3'>
            <li>
              <Link
                href='/signin'
                className='btn-sm bg-white/80 text-gray-800 shadow-sm hover:bg-white'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href='/signup'
                className='btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900'
              >
                Register
              </Link>
            </li>
          </ul> */}
        </div>
      </div>

      {/* Mobile Navigation Menu - Using CSS transitions instead of conditional rendering */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        menuRef={menuRef}
        onItemClick={closeMobileMenu}
      />

      {/* Focus trap for keyboard accessibility */}
      <FocusTrap
        isActive={mobileMenuOpen}
        containerRef={menuRef as React.RefObject<HTMLElement>}
        buttonRef={buttonRef as React.RefObject<HTMLElement>}
        onClose={closeMobileMenu}
      />
    </header>
  )
}
