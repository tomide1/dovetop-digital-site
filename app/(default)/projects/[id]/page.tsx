import { ProjectDetailPage } from '@/components/projects/index'
import { projects } from '@/data/projects'
import { getProjectById } from '@/utils/project-helpers'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(projects, params.id)

  if (!project) {
    return {
      title: 'Project Not Found | Dovetop Digital',
      description: 'The requested project could not be found.',
    }
  }

  const metaDescription = `${project.shortDescription} | Client: ${project.client} | Duration: ${project.duration}`
  return {
    title: `${project.title} | Project | Dovetop Digital`,
    description: metaDescription,
    openGraph: {
      title: `${project.title} | Project`,
      description: metaDescription,
      type: 'article',
      images: project.imageUrl
        ? [
            {
              url: project.imageUrl,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Project`,
      description: metaDescription,
      images: project.imageUrl ? [project.imageUrl] : undefined,
    },
    alternates: {
      canonical: `/projects/${project.id}`,
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(projects, params.id)

  if (!project) {
    notFound()
  }

  // Get related projects (same industry or service)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        (p.serviceIds.some((service) =>
          project.serviceIds.includes(service)
        ) ||
          p.industryIds.some((industry) =>
            project.industryIds.includes(industry)
          ))
    )
    .slice(0, 3)
    .filter(
      (cs) =>
        cs.id !== project.id &&
        (cs.serviceIds.some((service) =>
          project.serviceIds.includes(service)
        ) ||
          cs.industryIds.some((industry) =>
            project.industryIds.includes(industry)
          ))
    )
    .slice(0, 3) // Limit to 3 related projects

  return (
    <Suspense fallback={<div>Loading case study...</div>}>
      <ProjectDetailPage
        project={project}
        relatedProjects={relatedProjects}
      />
    </Suspense>
  )
}
