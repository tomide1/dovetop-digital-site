import React from 'react'

interface MissionVisionProps {
  mission: string
  vision: string
}

export default function MissionVision({ mission, vision }: MissionVisionProps) {
  return (
    <section
      className='bg-gray-50 py-16 md:py-24'
      role='region'
      aria-labelledby='mission-vision-title'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
          <div
            className='bg-white rounded-lg shadow-lg p-8'
            data-testid='mission-vision-card-mission'
          >
            <h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-4'>
              Our Mission
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed'>{mission}</p>
          </div>

          <div
            className='bg-white rounded-lg shadow-lg p-8'
            data-testid='mission-vision-card-vision'
          >
            <h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-4'>
              Our Vision
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed'>{vision}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
