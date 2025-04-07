import React from 'react'
import ServiceHero from '@/components/services/service-hero'
import ServiceDetail from '@/components/services/service-detail'
import Cta from '@/components/cta'
import { services } from '@/data/services'

export const metadata = {
  title: 'Services - Dovetop Digital',
  description:
    'Our tailored solutions include Cloud Solutions, User-Centered Design, Data Analytics & ML, and Security & Governance to transform your tech challenges into opportunities for growth.',
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />

      {/* Detailed service sections */}
      <div className='relative'>
        {services.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>

      <Cta />
    </>
  )
}
