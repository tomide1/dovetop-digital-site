import Link from 'next/link'
import { useState, useRef, useEffect, memo, useCallback } from 'react'
import Logo from './logo'
import { services } from '../../data/services'
import { industries } from '../../data/industries'
import { Service, Industry } from '../../types/what-we-do'

/**
 * Interface for navigation items to ensure type safety and consistency
 */
interface NavigationItem {
  id: string // Unique identifier for stable React keys
  label: string
  href?: string // Made optional for parent items that only toggle submenus
  isEnabled?: boolean // For future use if some links need to be disabled
  variant?: 'default' | 'cta' // Add variant for special styling
  children?: NavigationItem[] // Added for submenus
}

/**
 * Helper function to map services to navigation items
 */
const mapServicesToNavItems = (allServices: Service[]): NavigationItem[] => {
  return allServices.map((service) => ({
    id: service.id, // Use the existing service ID for stability
    label: service.title,
    href: `/services/${service.id}`,
  }))
}

/**
 * Helper function to map industries to navigation items
 */
const mapIndustriesToNavItems = (
  allIndustries: Industry[]
): NavigationItem[] => {
  return allIndustries.filter((industry) => industry.isActive).map((industry) => ({
    id: industry.id, // Use the existing industry ID for stability
    label: industry.name,
    href: `/industries/${industry.id}`,
  }))
}

/**
 * Central configuration for all navigation items
 * This makes it easier to maintain and update navigation structure
 */
const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'who-we-are',
    label: 'Who We Are',
    href: '/about',
    children: [
      { id: 'vision-mission', label: 'Vision and Mission', href: '/about#mission_vision' },
      { id: 'corporate-sustainability', label: 'Corporate and Sustainability', href: '/about#corporate_sustainability' },
      { id: 'board-directors', label: 'Board of Directors', href: '/about#team' },
      { id: 'locations', label: 'Locations', href: '/about#locations' },
    ],
  },
  {
    id: 'what-we-do',
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      {
        id: 'services',
        label: 'Services',
        href: '/what-we-do#services',
        children: mapServicesToNavItems(services),
      },
      {
        id: 'industries',
        label: 'Industries',
        href: '/what-we-do#industries',
        children: mapIndustriesToNavItems(industries),
      },
    ],
  },
  {
    id: 'what-we-think',
    label: 'What We Think',
    href: '/insights',
    children: [
      { id: 'projects', label: 'Projects', href: '/projects' },
      { id: 'insights', label: 'Insights', href: '/insights' }
    ],
  },
  { id: 'contact', label: 'Contact', href: '/contact', variant: 'cta' },
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
      <ul className='flex items-center space-x-6'>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.id}>
            <DesktopDropdownMenuItem item={item} level={0} />
          </li>
        ))}
      </ul>
    </nav>
  )
})
DesktopNavigation.displayName = 'DesktopNavigation'

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
MobileMenuButton.displayName = 'MobileMenuButton'

/**
 * Mobile dropdown menu item component
 * Handles both regular links and items with children (accordion-style dropdowns)
 */
interface MobileDropdownMenuItemProps {
  item: NavigationItem
  onNavigate: () => void
  level?: number
  isOpen?: boolean
  index?: number
}

const MobileDropdownMenuItem = memo<MobileDropdownMenuItemProps>(
  ({ item, onNavigate, level = 0, isOpen = true, index = 0 }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    // Get delay class based on index for animations
    const delayClass =
      ANIMATION_DELAY_CLASSES[index] ||
      ANIMATION_DELAY_CLASSES[ANIMATION_DELAY_CLASSES.length - 1]

    const hasChildren = item.children && item.children.length > 0

    const toggleSubmenu = useCallback(() => {
      setIsSubmenuOpen((prev) => !prev)
    }, [])

    // Base classes with indentation for nested items
    const fontWeight = level === 0 ? 'font-semibold' : (level === 1 || (level === 2 && hasChildren)) ? 'font-medium' : 'font-normal'
    const baseClasses = `block py-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md transition duration-150 ease-in-out ${
      level === 0 ? 'px-2' : level === 1 ? 'pl-6 pr-2' : 'pl-10 pr-2'
    } ${fontWeight}`

    // CTA button classes
    const ctaClasses =
      'block py-3 px-4 text-center text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ease-in-out'

    const linkClasses = item.variant === 'cta' ? ctaClasses : baseClasses

    if (!hasChildren) {
      // Simple link item
      return (
        <li
          className={`transform transition-all duration-300 ease-in-out ${delayClass} ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {item.href ? (
            <Link
              href={item.href}
              className={linkClasses}
              onClick={onNavigate}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onNavigate()
                }
              }}
            >
              {item.label}
            </Link>
          ) : (
            <div className={baseClasses}>{item.label}</div>
          )}
        </li>
      )
    }

    // Item with children (accordion)
    return (
      <>
        <li
          className={`transform transition-all duration-300 ease-in-out ${delayClass} ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {item.href ? (
            <div className='flex items-center'>
              <Link
                href={item.href}
                className={`${linkClasses} flex-1`}
                onClick={onNavigate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onNavigate()
                  }
                }}
              >
                {item.label}
              </Link>
              <button
                className='p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md'
                onClick={toggleSubmenu}
                aria-expanded={isSubmenuOpen}
                aria-controls={`submenu-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                type='button'
              >
                <svg
                  className='w-4 h-4 transition-transform duration-200'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  style={{
                    transform: isSubmenuOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              className={`${linkClasses} flex items-center justify-between w-full text-left`}
              onClick={toggleSubmenu}
              aria-expanded={isSubmenuOpen}
              aria-controls={`submenu-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
              type='button'
            >
              {item.label}
              <svg
                className='w-4 h-4 transition-transform duration-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                style={{
                  transform: isSubmenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          )}
        </li>

        {/* Submenu */}
        {isSubmenuOpen && (
          <li>
            <ul
              id={`submenu-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
              className='space-y-1 mt-1'
              role='menu'
            >
              {item.children?.map((child, childIndex) => (
                <MobileDropdownMenuItem
                  key={child.id}
                  item={child}
                  onNavigate={onNavigate}
                  level={level + 1}
                  isOpen={isSubmenuOpen}
                  index={childIndex}
                />
              ))}
            </ul>
          </li>
        )}
      </>
    )
  }
)
MobileDropdownMenuItem.displayName = 'MobileDropdownMenuItem'

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
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
        role='navigation'
        aria-label='Mobile navigation'
      >
        <nav className='px-4 py-3'>
          <ul className='flex flex-col space-y-3' role='menu'>
            {NAVIGATION_ITEMS.map((item, index) => (
              <MobileDropdownMenuItem
                key={item.id}
                item={item}
                onNavigate={onItemClick}
                level={0}
                isOpen={isOpen}
                index={index}
              />
            ))}
          </ul>
        </nav>
      </div>
    )
  }
)
MobileNavigation.displayName = 'MobileNavigation'

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
 * Desktop dropdown menu item component
 * Handles both regular links and items with children (dropdowns)
 */
interface DesktopDropdownMenuItemProps {
  item: NavigationItem
  level?: number
}

const DesktopDropdownMenuItem = memo<DesktopDropdownMenuItemProps>(
  ({ item, level = 0 }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleMouseEnter = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      setIsDropdownOpen(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false)
      }, 150) // Small delay to prevent flicker when moving between elements
    }, [])

    // Clean up timeout on unmount
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    const hasChildren = item.children && item.children.length > 0
    const isTopLevel = level === 0

    // Base classes for navigation items
    const baseClasses = isTopLevel
      ? 'text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md px-2 py-1 cursor-pointer transition duration-150 ease-in-out'
      : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition duration-150 ease-in-out'

    // CTA button classes for top-level contact button
    const ctaClasses =
      'inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ease-in-out'

    const linkClasses = item.variant === 'cta' ? ctaClasses : baseClasses

    if (!hasChildren) {
      // Simple link item
      return item.href ? (
        <Link href={item.href} className={linkClasses}>
          {item.label}
        </Link>
      ) : (
        <span className={baseClasses}>{item.label}</span>
      )
    }

    // Item with children (dropdown)
    return (
      <div
        className='relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.href ? (
          <Link
            href={item.href}
            className={`${linkClasses} flex items-center`}
            aria-haspopup='true'
            aria-expanded={isDropdownOpen}
          >
            {item.label}
            <svg
              className='ml-1 h-4 w-4 transition-transform duration-200'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              style={{
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </Link>
        ) : (
          <button
            className={`${linkClasses} flex items-center`}
            aria-haspopup='true'
            aria-expanded={isDropdownOpen}
            type='button'
          >
            {item.label}
            <svg
              className='ml-1 h-4 w-4 transition-transform duration-200'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              style={{
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
        )}

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            className={`absolute z-50 ${isTopLevel ? 'left-0 top-full mt-1' : 'left-full top-0 ml-1'} min-w-[200px] bg-white border border-gray-200 rounded-md shadow-lg`}
          >
            <div className='py-1' role='menu'>
              {item.children?.map((child) => (
                <div key={child.id} role='menuitem'>
                  <DesktopDropdownMenuItem item={child} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
)
DesktopDropdownMenuItem.displayName = 'DesktopDropdownMenuItem'

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
          <div className='flex items-center md:flex-1'>
            <Link
              href='/'
              className='flex items-center gap-2 md:justify-start justify-center md:w-auto w-full'
              aria-label='Dovetop Digital Homepage'
            >
              <Logo />
              <span className='text-gray-900 font-bold text-xl tracking-wide'>
                Dovetop Digital
              </span>
            </Link>
          </div>

          {/* Main Navigation with Search */}
          <div className='hidden md:flex md:items-center md:gap-4'>
            <DesktopNavigation />
            <button
              className='p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md transition-colors'
              aria-label='Search'
            >
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>
          </div>

          {/* Mobile Menu and Search */}
          <div className='flex items-center gap-3 md:hidden'>
            <button
              className='p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md transition-colors'
              aria-label='Search'
            >
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
              buttonRef={buttonRef}
            />
          </div>

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
