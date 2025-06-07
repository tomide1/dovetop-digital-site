import { Metadata } from 'next'
import { Suspense } from 'react'
import { caseStudies } from '@/data/case-studies'
import CaseStudiesPage from '@/components/case-studies/case-studies-page'
import { getCaseStudyStats } from '@/utils/case-study-helpers'

export const metadata: Metadata = {
  title: 'Case Studies | Success Stories | Dovetop Digital',
  description:
    'Explore our portfolio of successful digital transformation projects across healthcare, finance, legal, and other industries. Real results for real clients.',
  openGraph: {
    title: 'Case Studies | Dovetop Digital',
    description:
      'Explore our portfolio of successful digital transformation projects across healthcare, finance, legal, and other industries.',
    type: 'website',
  },
}

export default function CaseStudiesRoute() {
  const stats = getCaseStudyStats(caseStudies)

  return (
    <Suspense fallback={<div>Loading case studies...</div>}>
      <CaseStudiesPage caseStudies={caseStudies} stats={stats} />
    </Suspense>
  )
}
