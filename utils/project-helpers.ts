import type {
  TechnologyId,
  ServiceId,
  IndustryId,
  Project,
} from '@/types/what-we-do'
import { getTechnologyDisplayName } from '@/utils/technology-helpers'

/**
 * Get unique service IDs from projects
 */
export function getUniqueServices(projects: Project[]): ServiceId[] {
  return [...new Set(projects.flatMap((cs) => cs.serviceIds))]
}

/**
 * Get unique industry IDs from projects
 */
export function getUniqueIndustries(projects: Project[]): IndustryId[] {
  return [...new Set(projects.flatMap((cs) => cs.industryIds))]
}

/**
 * Get formatted service names for display
 */
export function getServiceDisplayName(serviceId: ServiceId | string): string {
  const serviceNames: Record<string, string> = {
    'cloud-solutions': 'Cloud Solutions',
    'user-centered-design': 'User-Centered Design',
    'data-analytics': 'Data Analytics',
    'security-governance': 'Security & Governance',
  }
  return (
    serviceNames[serviceId] ||
    serviceId.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
  )
}

/**
 * Get formatted industry names for display
 */
export function getIndustryDisplayName(
  industryId: IndustryId | string
): string {
  const industryNames: Record<string, string> = {
    healthcare: 'Healthcare',
    finance: 'Finance',
    legal: 'Legal',
    agriculture: 'Agriculture',
    education: 'Education',
    'e-commerce': 'E-commerce',
    government: 'Government',
  }
  return (
    industryNames[industryId] ||
    industryId.charAt(0).toUpperCase() + industryId.slice(1)
  )
}

/**
 * Calculate comprehensive stats from projects
 */
export function getProjectStats(projects: Project[]) {
  const uniqueServices = getUniqueServices(projects)
  const uniqueIndustries = getUniqueIndustries(projects)
  const totalResults = projects.reduce(
    (acc, cs) => acc + cs.results.length,
    0
  )

  // Calculate average project duration in months
  const durations = projects
    .map((cs) => parseInt(cs.duration.match(/(\d+)/)?.[1] || '0'))
    .filter((d) => d > 0)
  const avgDuration =
    durations.length > 0
      ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length)
      : 0

  return {
    total: projects.length,
    industries: uniqueIndustries.length,
    services: uniqueServices.length,
    totalResults,
    avgDuration,
    uniqueServices,
    uniqueIndustries,
  }
}

/**
 * Filter projects based on criteria
 */
export function filterProjects(
  projects: Project[],
  filters: {
    service?: ServiceId
    industry?: IndustryId
    search?: string
  }
): Project[] {
  return projects.filter((project) => {
    // Service filter
    if (filters.service && !project.serviceIds.includes(filters.service)) {
      return false
    }

    // Industry filter
    if (filters.industry && !project.industryIds.includes(filters.industry)) {
      return false
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      const searchableText = [
        project.title,
        project.shortDescription,
        project.client,
        ...project.results,
        ...project.technologies.map((t) =>
          getTechnologyDisplayName(t as TechnologyId)
        ),
      ]
        .join(' ')
        .toLowerCase()

      if (!searchableText.includes(searchTerm)) {
        return false
      }
    }

    return true
  })
}

/**
 * Sort projects by various criteria
 */
export function sortProjects(
  projects: Project[],
  sortBy: 'title' | 'client' | 'duration' | 'recent' = 'title'
): Project[] {
  const sorted = [...projects]

  switch (sortBy) {
    case 'title':
      return sorted.sort((a, b) => a.title.localeCompare(b.title))

    case 'client':
      return sorted.sort((a, b) => a.client.localeCompare(b.client))

    case 'duration':
      return sorted.sort((a, b) => {
        const aDuration = parseInt(a.duration.match(/(\d+)/)?.[1] || '0')
        const bDuration = parseInt(b.duration.match(/(\d+)/)?.[1] || '0')
        return aDuration - bDuration
      })

    case 'recent':
      // Since we don't have creation dates, sort by ID (assuming newer IDs are more recent)
      return sorted.sort((a, b) => b.id.localeCompare(a.id))

    default:
      return sorted.sort((a, b) => a.title.localeCompare(b.title))
  }
}

/**
 * Get case study by ID with error handling
 */
export function getProjectById(
  projects: Project[],
  id: string
): Project | null {
  return projects.find((cs) => cs.id === id) || null
}

/**
 * Paginate projects array
 */
export function paginateProjects(
  projects: Project[],
  page: number = 1,
  itemsPerPage: number = 12
) {
  const totalItems = projects.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const items = projects.slice(startIndex, endIndex)

  return {
    items,
    totalItems,
    totalPages,
    currentPage: page,
    itemsPerPage,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}

/**
 * Get the next and previous projects for navigation
 */
export function getProjectNavigation(
  projects: Project[],
  currentId: string
): {
  previous: Project | null
  next: Project | null
} {
  const currentIndex = projects.findIndex((cs) => cs.id === currentId)

  if (currentIndex === -1) {
    return { previous: null, next: null }
  }

  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return { previous, next }
}

/**
 * Get projects by a specific service
 */
export function getProjectsByService(
  projects: Project[],
  serviceId: ServiceId
): Project[] {
  return projects.filter((cs) => cs.serviceIds.includes(serviceId))
}

/**
 * Get projects by a specific industry
 */
export function getProjectsByIndustry(
  projects: Project[],
  industryId: IndustryId
): Project[] {
  return projects.filter((cs) => cs.industryIds.includes(industryId))
}

/**
 * Generate breadcrumb items for case study navigation
 */
export function getProjectBreadcrumbs(project: Project) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    {
      label: project.title,
      href: `/projects/${project.id}`,
      current: true,
    },
  ]
}
