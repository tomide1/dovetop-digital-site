import React from 'react'
import { PageHero } from '@/components/shared'
import MissionVision from '@/components/about/mission-vision'
import CoreValuesGrid from '@/components/about/core-values-grid'
import ImpactStats from '@/components/about/impact-stats'
import CompanyTimeline from '@/components/about/company-timeline'
import LeadershipGrid from '@/components/about/leadership-grid'
import PartnerLogosStrip from '@/components/about/partner-logos-strip'
import LargeTestimonial from '@/components/large-testimonial'

// Data imports
import { missionVision } from '@/data/about/mission-vision'
import { coreValues } from '@/data/about/core-values'
import { quickStats } from '@/data/about/quick-stats'
import { companyTimeline } from '@/data/about/timeline'
import { leadershipTeam } from '@/data/about/team'
import { partners } from '@/data/about/partners'

export const metadata = {
  title: 'Who We Are | Dovetop Digital',
  description:
    "Learn about Dovetop Digital's mission, values, and the experienced team behind our digital transformation solutions. Discover our journey and commitment to excellence.",
  keywords:
    'about us, company mission, leadership team, digital transformation experts, company values, our story',
}

export default function WhoWeArePage() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <PageHero
        title='Who We Are'
        subtitle='We are a team of passionate digital transformation experts committed to helping businesses thrive in the digital age through innovative solutions and exceptional service.'
        bgGradient='from-purple-50 to-white'
      />

      {/* Mission & Vision */}
      <MissionVision
        mission={missionVision.mission}
        vision={missionVision.vision}
      />

      {/* Core Values */}
      <CoreValuesGrid values={coreValues} />

      {/* Impact Stats */}
      <ImpactStats stats={quickStats} />

      {/* Company Timeline */}
      <CompanyTimeline timeline={companyTimeline} />

      {/* Leadership Team */}
      <LeadershipGrid team={leadershipTeam} />

      {/* Large Testimonial */}
      <LargeTestimonial />

      {/* Partners & Certifications */}
      <PartnerLogosStrip partners={partners} />
    </main>
  )
}
