'use client'

import React, { useRef, useEffect } from 'react'
import { useIndustriesOverview } from './hooks/use-industries-overview'
import IndustryCard from '@/components/shared/industry-card'

export default function IndustriesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const { industries, isVisible, triggerAnimation } = useIndustriesOverview()

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
      className='py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white'
      data-testid='industries-overview'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Industries We Serve
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover how our services apply to your industry. Explore our
            tailored solutions, specific applications, and relevant case
            studies.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              isVisible={industry.isVisible}
              animationDelay={industry.animationDelay}
              variant='default'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
