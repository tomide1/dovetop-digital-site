import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LeadershipGrid from '../../../components/about/leadership-grid'

const mockTeam = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Sarah founded the company with over 15 years of experience.',
    image: '/images/team/sarah-johnson.svg',
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael oversees technical strategy and innovation.',
    image: '/images/team/michael-chen.svg',
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    role: 'Head of Design',
    bio: 'Priya leads our design team with user-centered focus.',
    image: '/images/team/priya-patel.svg',
  },
]

describe('LeadershipGrid', () => {
  it('renders all team members', () => {
    render(<LeadershipGrid team={mockTeam} />)

    expect(screen.getByText('Our Leadership Team')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('CTO')).toBeInTheDocument()
    expect(screen.getByText('Priya Patel')).toBeInTheDocument()
    expect(screen.getByText('Head of Design')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<LeadershipGrid team={mockTeam} />)

    const section = screen.getByRole('region')
    expect(section).toBeInTheDocument()

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toHaveTextContent('Our Leadership Team')
  })

  it('applies correct styling classes', () => {
    render(<LeadershipGrid team={mockTeam} />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass('bg-white', 'py-16', 'md:py-24')

    const container = section.querySelector('.max-w-6xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6')
  })

  it('has responsive grid layout', () => {
    render(<LeadershipGrid team={mockTeam} />)

    const gridContainer = screen.getByTestId('leadership-grid')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-3',
      'gap-8'
    )
  })

  it('renders team member cards with proper styling', () => {
    render(<LeadershipGrid team={mockTeam} />)

    const cards = screen.getAllByTestId(/member-card/)
    expect(cards).toHaveLength(3)

    cards.forEach((card) => {
      expect(card).toHaveClass(
        'bg-white',
        'rounded-lg',
        'shadow-lg',
        'p-6',
        'text-center'
      )
    })
  })

  it('renders team member images', () => {
    render(<LeadershipGrid team={mockTeam} />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)

    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', mockTeam[index].image)
      expect(image).toHaveAttribute('alt', mockTeam[index].name)
    })
  })

  it('opens modal when team member card is clicked', async () => {
    const user = userEvent.setup()
    render(<LeadershipGrid team={mockTeam} />)

    const firstCard = screen.getByTestId('member-card-0')
    await user.click(firstCard)

    // Check if modal is open
    const modal = screen.getByTestId('leadership-modal')
    expect(modal).toBeInTheDocument()
    expect(modal).toHaveClass('fixed', 'inset-0', 'z-50')

    // Check modal content (using modal-specific queries)
    const modalContent = screen.getByTestId('leadership-modal')
    expect(modalContent).toBeInTheDocument()
    expect(modalContent).toHaveTextContent('Sarah Johnson')
    expect(modalContent).toHaveTextContent('CEO & Founder')
    expect(modalContent).toHaveTextContent(
      'Sarah founded the company with over 15 years of experience.'
    )
  })

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<LeadershipGrid team={mockTeam} />)

    // Open modal
    const firstCard = screen.getByTestId('member-card-0')
    await user.click(firstCard)

    // Close modal
    const closeButton = screen.getByTestId('modal-close-button')
    await user.click(closeButton)

    // Check if modal is closed
    expect(screen.queryByTestId('leadership-modal')).not.toBeInTheDocument()
  })

  it('closes modal when escape key is pressed', async () => {
    const user = userEvent.setup()
    render(<LeadershipGrid team={mockTeam} />)

    // Open modal
    const firstCard = screen.getByTestId('member-card-0')
    await user.click(firstCard)

    // Press escape key
    await user.keyboard('{Escape}')

    // Check if modal is closed
    expect(screen.queryByTestId('leadership-modal')).not.toBeInTheDocument()
  })

  it('closes modal when backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<LeadershipGrid team={mockTeam} />)

    // Open modal
    const firstCard = screen.getByTestId('member-card-0')
    await user.click(firstCard)

    // Click backdrop
    const backdrop = screen.getByTestId('modal-backdrop')
    await user.click(backdrop)

    // Check if modal is closed
    expect(screen.queryByTestId('leadership-modal')).not.toBeInTheDocument()
  })

  it('handles empty team array', () => {
    render(<LeadershipGrid team={[]} />)

    expect(screen.getByText('Our Leadership Team')).toBeInTheDocument()
    expect(screen.queryByTestId(/member-card/)).not.toBeInTheDocument()
  })

  it('renders "Learn More" button on cards', () => {
    render(<LeadershipGrid team={mockTeam} />)

    const learnMoreButtons = screen.getAllByText('Learn More')
    expect(learnMoreButtons).toHaveLength(3)

    learnMoreButtons.forEach((button) => {
      expect(button).toHaveClass('text-blue-600', 'hover:text-blue-800')
    })
  })
})
