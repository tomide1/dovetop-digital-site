import React from 'react'

interface CaseStudiesHeroProps {
  stats: {
    total: number
    industries: number
    services: number
    totalResults: number
    avgDuration: number
  }
}

export default function CaseStudiesHero({ stats }: CaseStudiesHeroProps) {
  return (
    <section className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Main Heading */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            Our Success Stories
          </h1>

          {/* Subheading */}
          <p className='text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
            Real results for real clients. Explore our portfolio of successful
            digital transformation projects that drive meaningful business
            outcomes.
          </p>

          {/* Stats Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-12'>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                {stats.total}+
              </div>
              <div className='text-blue-200 text-sm md:text-base font-medium'>
                Successful Projects
              </div>
            </div>

            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                {stats.industries}
              </div>
              <div className='text-blue-200 text-sm md:text-base font-medium'>
                Industries Served
              </div>
            </div>

            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                {stats.services}
              </div>
              <div className='text-blue-200 text-sm md:text-base font-medium'>
                Core Services
              </div>
            </div>

            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                {stats.avgDuration}
              </div>
              <div className='text-blue-200 text-sm md:text-base font-medium'>
                Avg Project (Months)
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className='mt-12'>
            <p className='text-blue-100 text-lg mb-6'>
              Ready to create your own success story?
            </p>
            <a
              href='/contact'
              className='inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200'
            >
              Start Your Project
              <svg
                className='w-5 h-5 ml-2 transition-transform group-hover:translate-x-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
