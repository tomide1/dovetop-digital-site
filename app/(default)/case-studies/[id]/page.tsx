import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { caseStudies } from '@/data/case-studies'
import { getCaseStudyById } from '@/utils/case-study-helpers'
import CaseStudyDetailPage from '@/components/case-studies/case-study-detail-page'

interface CaseStudyPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    id: caseStudy.id,
  }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyById(caseStudies, params.id)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Dovetop Digital',
      description: 'The requested case study could not be found.',
    }
  }

  const metaDescription = `${caseStudy.shortDescription} | Client: ${caseStudy.client} | Duration: ${caseStudy.duration}`

  return {
    title: `${caseStudy.title} | Case Study | Dovetop Digital`,
    description: metaDescription,
    openGraph: {
      title: `${caseStudy.title} | Case Study`,
      description: metaDescription,
      type: 'article',
      images: caseStudy.imageUrl
        ? [
            {
              url: caseStudy.imageUrl,
              width: 1200,
              height: 630,
              alt: caseStudy.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | Case Study`,
      description: metaDescription,
      images: caseStudy.imageUrl ? [caseStudy.imageUrl] : undefined,
    },
    alternates: {
      canonical: `/case-studies/${caseStudy.id}`,
    },
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyById(caseStudies, params.id)

  if (!caseStudy) {
    notFound()
  }

  // Get related case studies (same industry or service)
  const relatedCaseStudies = caseStudies
    .filter(
      (cs) =>
        cs.id !== caseStudy.id &&
        (cs.serviceIds.some((service) =>
          caseStudy.serviceIds.includes(service)
        ) ||
          cs.industryIds.some((industry) =>
            caseStudy.industryIds.includes(industry)
          ))
    )
    .slice(0, 3) // Limit to 3 related case studies

  return (
    <Suspense fallback={<div>Loading case study...</div>}>
      <CaseStudyDetailPage
        caseStudy={caseStudy}
        relatedCaseStudies={relatedCaseStudies}
      />
    </Suspense>
  )
}
