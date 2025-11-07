'use client'

import React from 'react'
import { services } from '@/data/services'
import ServiceCard from '@/components/shared/service-card'

export default function ServicesOverview() {
  return (
    <section id="services" className='py-20 md:py-28 bg-white'>
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
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
