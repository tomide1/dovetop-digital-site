'use client'

import React, { useRef, useEffect } from 'react'
import { useServicesOverview } from './hooks/use-services-overview'
import ServiceCard from '@/components/shared/service-card'

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const { services, isVisible, triggerAnimation } = useServicesOverview()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          triggerAnimation()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible, triggerAnimation])

  return (
    <section
      ref={sectionRef}
      className='py-20 md:py-28 bg-white'
      data-testid='services-overview'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Our Core Services
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            We deliver comprehensive solutions across four key areas, each
            designed to address your unique business challenges and drive
            growth.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isVisible={service.isVisible}
              animationDelay={service.animationDelay}
              variant='default'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
