'use client'

import { services } from '@/data/services'
import ServiceCard from '@/components/shared/service-card'

function FeaturesBlocks() {
  return (
    <section className='relative' id='features'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none bg-white'
        aria-hidden='true'
      ></div>
      <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pb-12 md:pb-20 pt-36 md:pt-40'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2
              className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'
            >
              Our{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                Expertise
              </span>
            </h2>
            <p className='text-xl text-gray-600'>
              At Dovetop Digital, our tailored solutions are designed to boost
              your efficiency, security, and competitive edge in the digital
              landscape because we transform your tech challenges into
              opportunities for growth and innovation.
            </p>
          </div>

          {/* Items */}
          <div className='max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none'>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                variant='default'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBlocks
