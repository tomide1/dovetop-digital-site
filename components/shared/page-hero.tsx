import React from 'react'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle?: string
  bgGradient?: string
  cta?: {
    label: string
    href: string
  }
}

export default function PageHero({
  title,
  subtitle,
  bgGradient = 'from-blue-50 to-white',
  cta,
}: PageHeroProps) {
  return (
    <section
      className={`bg-gradient-to-b ${bgGradient} py-20 md:py-28`}
      role='region'
      aria-labelledby='page-hero-title'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
        <h1
          id='page-hero-title'
          className='text-4xl md:text-6xl font-bold text-blue-600 mb-4'
        >
          {title}
        </h1>
        {subtitle && (
          <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8'>
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors'
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}
