import { Metadata } from 'next'
import { Suspense } from 'react'
import { projects } from '@/data/projects'
import ProjectsPage from '@/components/projects/projects-page'
import { getProjectStats } from '@/utils/project-helpers'

export const metadata: Metadata = {
  title: 'Projects | Success Stories | Dovetop Digital',
  description:
    'Explore our portfolio of successful digital transformation projects across healthcare, finance, legal, and other industries. Real results for real clients.',
  openGraph: {
    title: 'Projects | Dovetop Digital',
    description:
      'Explore our portfolio of successful digital transformation projects across healthcare, finance, legal, and other industries.',
    type: 'website',
  },
}

export default function ProjectsRoute() {
  const stats = getProjectStats(projects)

  return (
    <Suspense fallback={<div>Loading Projects...</div>}>
      <ProjectsPage projects={projects} stats={stats} />
    </Suspense>
  )
}
