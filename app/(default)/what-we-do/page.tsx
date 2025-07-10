import React from 'react'
import { PageHero } from '@/components/shared'
import ServicesOverview from '@/components/what-we-do/services-overview'
import IndustriesOverview from '@/components/what-we-do/industries-overview'

export const metadata = {
  title: 'What We Do | Dovetop Digital',
  description:
    'Discover our comprehensive digital solutions across cloud technologies, user-centered design, data analytics, and security. See how we serve various industries with tailored approaches.',
  keywords:
    'digital solutions, cloud services, user experience design, data analytics, cybersecurity, industry solutions',
}

export default function WhatWeDoPage() {
  return (
    <main className='min-h-screen'>
      <PageHero
        title='What We Do'
        subtitle="We deliver cutting-edge digital solutions tailored to your industry's unique needs. Explore our services to see how we can help you achieve your goals."
      />
      <ServicesOverview />
      <IndustriesOverview />
    </main>
  )
}
