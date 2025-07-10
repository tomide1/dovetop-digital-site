import { render, screen } from '@testing-library/react'
import TechnologyBadge from '@/components/technology/technology-badge'
import { technologies } from '@/data/technologies'
import type { TechnologyId } from '@/types/what-we-do'

// Mock the Iconify component
jest.mock('@iconify/react', () => ({
  Icon: ({ icon, className }: { icon: string; className?: string }) => (
    <div data-testid={`icon-${icon}`} className={className}>
      Mock Icon
    </div>
  ),
}))

// Mock the technology helpers
jest.mock('@/utils/technology-helpers', () => ({
  getTechnologyDisplayName: jest.fn(),
  getTechnologyIcon: jest.fn(),
}))

// Import the mocked functions for type safety
import {
  getTechnologyDisplayName,
  getTechnologyIcon,
} from '@/utils/technology-helpers'

const mockGetTechnologyDisplayName =
  getTechnologyDisplayName as jest.MockedFunction<
    typeof getTechnologyDisplayName
  >
const mockGetTechnologyIcon = getTechnologyIcon as jest.MockedFunction<
  typeof getTechnologyIcon
>

describe('TechnologyBadge Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockGetTechnologyDisplayName.mockClear()
    mockGetTechnologyIcon.mockClear()

    // Set default mock implementations
    mockGetTechnologyDisplayName.mockImplementation((id) => {
      if (id === 'react') return 'React'
      if (id === 'nodejs') return 'Node.js'
      if (id === 'aws') return 'AWS'
      return id as string
    })

    mockGetTechnologyIcon.mockImplementation((id) => {
      if (id === 'react') return 'devicon:react'
      if (id === 'nodejs') return 'devicon:nodejs'
      if (id === 'aws') return 'logos:aws'
      return 'simple-icons:code'
    })
  })

  describe('Basic Rendering', () => {
    test('renders technology badge with correct display name and icon', () => {
      render(<TechnologyBadge id='react' />)

      // Check if the component renders
      expect(screen.getByTestId('technology-badge-react')).toBeInTheDocument()

      // Check if the display name is shown
      expect(screen.getByText('React')).toBeInTheDocument()

      // Check if the icon is rendered
      expect(screen.getByTestId('icon-devicon:react')).toBeInTheDocument()

      // Verify helper functions were called
      expect(mockGetTechnologyDisplayName).toHaveBeenCalledWith('react')
      expect(mockGetTechnologyIcon).toHaveBeenCalledWith('react')
    })

    test('renders with valid TechnologyId type', () => {
      const validId: TechnologyId = 'nodejs'
      render(<TechnologyBadge id={validId} />)

      expect(screen.getByTestId('technology-badge-nodejs')).toBeInTheDocument()
      expect(screen.getByText('Node.js')).toBeInTheDocument()
      expect(screen.getByTestId('icon-devicon:nodejs')).toBeInTheDocument()
    })

    test('renders with string type (non-TechnologyId)', () => {
      render(<TechnologyBadge id='custom-technology' />)

      expect(
        screen.getByTestId('technology-badge-custom-technology')
      ).toBeInTheDocument()
      expect(screen.getByText('custom-technology')).toBeInTheDocument()
      expect(screen.getByTestId('icon-simple-icons:code')).toBeInTheDocument()
    })

    test('handles empty string id', () => {
      render(<TechnologyBadge id='' />)

      expect(screen.getByTestId('technology-badge-')).toBeInTheDocument()
      expect(mockGetTechnologyDisplayName).toHaveBeenCalledWith('')
      expect(mockGetTechnologyIcon).toHaveBeenCalledWith('')
    })
  })

  describe('Styling and Classes', () => {
    test('applies default styling', () => {
      render(<TechnologyBadge id='react' />)

      const badge = screen.getByTestId('technology-badge-react')
      expect(badge).toHaveClass('flex')
      expect(badge).toHaveClass('items-center')
      expect(badge).toHaveClass('gap-2')
      expect(badge).toHaveClass('bg-gray-50')
      expect(badge).toHaveClass('px-3')
      expect(badge).toHaveClass('py-2')
      expect(badge).toHaveClass('rounded-lg')
      expect(badge).toHaveClass('border')
      expect(badge).toHaveClass('border-gray-200')
    })

    test('applies custom className', () => {
      render(<TechnologyBadge id='react' className='custom-test-class' />)

      const badge = screen.getByTestId('technology-badge-react')
      expect(badge).toHaveClass('custom-test-class')
      expect(badge).toHaveClass('bg-gray-50') // Should still have default classes
    })

    test('icon has correct styling', () => {
      render(<TechnologyBadge id='react' />)

      const icon = screen.getByTestId('icon-devicon:react')
      expect(icon).toHaveClass('w-5')
      expect(icon).toHaveClass('h-5')
    })

    test('text has correct styling', () => {
      render(<TechnologyBadge id='react' />)

      const text = screen.getByText('React')
      expect(text).toHaveClass('text-sm')
      expect(text).toHaveClass('font-medium')
      expect(text).toHaveClass('text-gray-900')
    })

    test('handles multiple custom classes', () => {
      render(
        <TechnologyBadge
          id='react'
          className='custom-class-1 custom-class-2 bg-blue-100'
        />
      )

      const badge = screen.getByTestId('technology-badge-react')
      expect(badge).toHaveClass('custom-class-1')
      expect(badge).toHaveClass('custom-class-2')
      expect(badge).toHaveClass('bg-blue-100')
    })
  })

  describe('Helper Function Integration', () => {
    test('calls getTechnologyDisplayName with correct id', () => {
      render(<TechnologyBadge id='aws' />)

      expect(mockGetTechnologyDisplayName).toHaveBeenCalledWith('aws')
      expect(mockGetTechnologyDisplayName).toHaveBeenCalledTimes(1)
    })

    test('calls getTechnologyIcon with correct id', () => {
      render(<TechnologyBadge id='aws' />)

      expect(mockGetTechnologyIcon).toHaveBeenCalledWith('aws')
      expect(mockGetTechnologyIcon).toHaveBeenCalledTimes(1)
    })

    test('handles fallback icon when invalid id provided', () => {
      mockGetTechnologyIcon.mockReturnValue('simple-icons:code')

      render(<TechnologyBadge id='invalid-tech' />)

      expect(screen.getByTestId('icon-simple-icons:code')).toBeInTheDocument()
    })

    test('displays fallback name when invalid id provided', () => {
      mockGetTechnologyDisplayName.mockReturnValue('invalid-tech')

      render(<TechnologyBadge id='invalid-tech' />)

      expect(screen.getByText('invalid-tech')).toBeInTheDocument()
    })
  })

  describe('Real Technology Data Integration', () => {
    test('works with actual technology data', () => {
      // Use real implementations
      jest.unmock('@/utils/technology-helpers')
      const realHelpers = jest.requireActual('@/utils/technology-helpers')
      mockGetTechnologyDisplayName.mockImplementation(
        realHelpers.getTechnologyDisplayName
      )
      mockGetTechnologyIcon.mockImplementation(realHelpers.getTechnologyIcon)

      // Test with a real technology from the data
      const realTech = technologies[0]
      render(<TechnologyBadge id={realTech.id} />)

      expect(
        screen.getByTestId(`technology-badge-${realTech.id}`)
      ).toBeInTheDocument()
      expect(screen.getByText(realTech.name)).toBeInTheDocument()

      // Reset mocks
      mockGetTechnologyDisplayName.mockImplementation((id) => id as string)
      mockGetTechnologyIcon.mockImplementation(() => 'simple-icons:code')
    })

    test('handles all technology IDs from data', () => {
      jest.unmock('@/utils/technology-helpers')
      const realHelpers = jest.requireActual('@/utils/technology-helpers')
      mockGetTechnologyDisplayName.mockImplementation(
        realHelpers.getTechnologyDisplayName
      )
      mockGetTechnologyIcon.mockImplementation(realHelpers.getTechnologyIcon)

      // Test first 5 technologies to avoid too many renders
      technologies.slice(0, 5).forEach((tech) => {
        const { unmount } = render(<TechnologyBadge id={tech.id} />)

        expect(
          screen.getByTestId(`technology-badge-${tech.id}`)
        ).toBeInTheDocument()
        expect(screen.getByText(tech.name)).toBeInTheDocument()

        unmount() // Clean up between renders
      })

      // Reset mocks
      mockGetTechnologyDisplayName.mockImplementation((id) => id as string)
      mockGetTechnologyIcon.mockImplementation(() => 'simple-icons:code')
    })
  })

  describe('Accessibility', () => {
    test('has proper structure for screen readers', () => {
      render(<TechnologyBadge id='react' />)

      const badge = screen.getByTestId('technology-badge-react')
      expect(badge).toBeInTheDocument()

      // Should have text content accessible to screen readers
      expect(badge).toHaveTextContent('React')
    })

    test('text content is readable by screen readers', () => {
      render(<TechnologyBadge id='nodejs' />)

      const textElement = screen.getByText('Node.js')
      expect(textElement).toBeInTheDocument()
      expect(textElement.tagName).toBe('SPAN')
    })

    test('maintains semantic structure', () => {
      render(<TechnologyBadge id='aws' />)

      const badge = screen.getByTestId('technology-badge-aws')
      expect(badge.tagName).toBe('DIV')

      // Should contain both icon and text
      const icon = screen.getByTestId('icon-logos:aws')
      const text = screen.getByText('AWS')
      expect(badge).toContainElement(icon)
      expect(badge).toContainElement(text)
    })
  })

  describe('Edge Cases', () => {
    test('handles special characters in id', () => {
      render(<TechnologyBadge id='test@tech#special' />)

      expect(
        screen.getByTestId('technology-badge-test@tech#special')
      ).toBeInTheDocument()
    })

    test('handles numeric string id', () => {
      render(<TechnologyBadge id='123' />)

      expect(screen.getByTestId('technology-badge-123')).toBeInTheDocument()
    })

    test('handles very long id', () => {
      const longId = 'very-long-technology-name-that-exceeds-normal-length'
      render(<TechnologyBadge id={longId} />)

      expect(
        screen.getByTestId(`technology-badge-${longId}`)
      ).toBeInTheDocument()
    })

    test('handles unicode characters in id', () => {
      render(<TechnologyBadge id='tech-🚀' />)

      expect(screen.getByTestId('technology-badge-tech-🚀')).toBeInTheDocument()
    })
  })

  describe('Component Interaction', () => {
    test('re-renders correctly when id prop changes', () => {
      const { rerender } = render(<TechnologyBadge id='react' />)

      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByTestId('icon-devicon:react')).toBeInTheDocument()

      rerender(<TechnologyBadge id='nodejs' />)

      expect(screen.getByText('Node.js')).toBeInTheDocument()
      expect(screen.getByTestId('icon-devicon:nodejs')).toBeInTheDocument()
      expect(screen.queryByText('React')).not.toBeInTheDocument()
    })

    test('re-renders correctly when className prop changes', () => {
      const { rerender } = render(<TechnologyBadge id='react' />)

      const badge = screen.getByTestId('technology-badge-react')
      expect(badge).not.toHaveClass('custom-class')

      rerender(<TechnologyBadge id='react' className='custom-class' />)

      expect(badge).toHaveClass('custom-class')
    })

    test('maintains stable testid across re-renders', () => {
      const { rerender } = render(<TechnologyBadge id='react' />)

      const initialBadge = screen.getByTestId('technology-badge-react')
      expect(initialBadge).toBeInTheDocument()

      rerender(<TechnologyBadge id='react' className='new-class' />)

      const updatedBadge = screen.getByTestId('technology-badge-react')
      expect(updatedBadge).toBeInTheDocument()
      expect(updatedBadge).toHaveClass('new-class')
    })
  })

  describe('Performance', () => {
    test('renders efficiently with multiple badges', () => {
      const techIds = ['react', 'nodejs', 'aws', 'python', 'docker']

      const start = performance.now()

      const { container } = render(
        <div>
          {techIds.map((id) => (
            <TechnologyBadge key={id} id={id} />
          ))}
        </div>
      )

      const end = performance.now()

      // Should render multiple badges efficiently (less than 100ms)
      expect(end - start).toBeLessThan(100)

      // All badges should be present
      techIds.forEach((id) => {
        expect(
          container.querySelector(`[data-testid="technology-badge-${id}"]`)
        ).toBeInTheDocument()
      })
    })

    test('helper functions are called only once per render', () => {
      render(<TechnologyBadge id='react' />)

      expect(mockGetTechnologyDisplayName).toHaveBeenCalledTimes(1)
      expect(mockGetTechnologyIcon).toHaveBeenCalledTimes(1)
    })
  })
})
