import React from 'react'
import { render, screen } from '@testing-library/react'
import PageHero from '../../../components/shared/page-hero'

describe('PageHero', () => {
  it('renders with required title prop', () => {
    render(<PageHero title='Test Title' />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Title'
    )
  })

  it('renders with title and subtitle', () => {
    render(<PageHero title='Test Title' subtitle='Test subtitle content' />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Title'
    )
    expect(screen.getByText('Test subtitle content')).toBeInTheDocument()
  })

  it('applies default gradient background', () => {
    render(<PageHero title='Test Title' />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass('bg-gradient-to-b', 'from-blue-50', 'to-white')
  })

  it('applies custom gradient background', () => {
    render(<PageHero title='Test Title' bgGradient='from-purple-50 to-white' />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass(
      'bg-gradient-to-b',
      'from-purple-50',
      'to-white'
    )
  })

  it('renders CTA when provided', () => {
    render(
      <PageHero
        title='Test Title'
        cta={{ label: 'Get Started', href: '/contact' }}
      />
    )

    const ctaLink = screen.getByRole('link', { name: 'Get Started' })
    expect(ctaLink).toBeInTheDocument()
    expect(ctaLink).toHaveAttribute('href', '/contact')
  })

  it('does not render CTA when not provided', () => {
    render(<PageHero title='Test Title' />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<PageHero title='Test Title' subtitle='Test subtitle' />)

    const section = screen.getByRole('region')
    expect(section).toHaveClass('py-20', 'md:py-28')

    const container = section.querySelector('.max-w-6xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('mx-auto', 'px-4', 'sm:px-6', 'text-center')
  })

  it('applies correct heading styles', () => {
    render(<PageHero title='Test Title' />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass(
      'text-4xl',
      'md:text-6xl',
      'font-bold',
      'text-blue-600',
      'mb-4'
    )
  })

  it('applies correct subtitle styles', () => {
    render(<PageHero title='Test Title' subtitle='Test subtitle' />)

    const subtitle = screen.getByText('Test subtitle')
    expect(subtitle).toHaveClass(
      'text-lg',
      'md:text-xl',
      'text-gray-700',
      'max-w-3xl',
      'mx-auto'
    )
  })
})
