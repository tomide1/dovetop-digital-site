import React from 'react'
import HeroSection from '@/components/what-we-do/hero-section'
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
      <HeroSection />
      <ServicesOverview />
      <IndustriesOverview />
    </main>
  )
}
