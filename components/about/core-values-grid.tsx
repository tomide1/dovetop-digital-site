import React from 'react'
import { CoreValue } from '@/data/about/core-values'

interface CoreValuesGridProps {
  values: CoreValue[]
}

// Simple icon mapping - in production, you'd use a proper icon library
const getIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    innovation: '💡',
    collaboration: '🤝',
    excellence: '⭐',
    integrity: '🛡️',
    growth: '📈',
    impact: '🎯',
  }
  return icons[iconName] || '📋'
}

export default function CoreValuesGrid({ values }: CoreValuesGridProps) {
  return (
    <section
      className='bg-white py-16 md:py-24'
      role='region'
      aria-labelledby='core-values-title'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <h2
            id='core-values-title'
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'
          >
            Our Core Values
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            These values guide everything we do and shape our relationships with
            clients, partners, and each other.
          </p>
        </div>

        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          data-testid='values-grid'
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow'
              data-testid={`value-card-${index}`}
            >
              <div
                className='text-4xl w-12 h-12 mx-auto mb-4 flex items-center justify-center'
                data-testid={`value-icon-${index}`}
                aria-hidden='true'
              >
                {getIcon(value.icon)}
              </div>

              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {value.title}
              </h3>

              <p className='text-gray-600 leading-relaxed'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
