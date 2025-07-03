import type { CaseStudy } from '@/types/what-we-do'

/**
 * Get unique service IDs from case studies
 */
export function getUniqueServices(caseStudies: CaseStudy[]): string[] {
  return [...new Set(caseStudies.flatMap((cs) => cs.serviceIds))]
}

/**
 * Get unique industry IDs from case studies
 */
export function getUniqueIndustries(caseStudies: CaseStudy[]): string[] {
  return [...new Set(caseStudies.flatMap((cs) => cs.industryIds))]
}

/**
 * Get formatted service names for display
 */
export function getServiceDisplayName(serviceId: string): string {
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
export function getIndustryDisplayName(industryId: string): string {
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
 * Calculate comprehensive stats from case studies
 */
export function getCaseStudyStats(caseStudies: CaseStudy[]) {
  const uniqueServices = getUniqueServices(caseStudies)
  const uniqueIndustries = getUniqueIndustries(caseStudies)
  const totalResults = caseStudies.reduce(
    (acc, cs) => acc + cs.results.length,
    0
  )

  // Calculate average project duration in months
  const durations = caseStudies
    .map((cs) => parseInt(cs.duration.match(/(\d+)/)?.[1] || '0'))
    .filter((d) => d > 0)
  const avgDuration =
    durations.length > 0
      ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length)
      : 0

  return {
    total: caseStudies.length,
    industries: uniqueIndustries.length,
    services: uniqueServices.length,
    totalResults,
    avgDuration,
    uniqueServices,
    uniqueIndustries,
  }
}

/**
 * Filter case studies based on criteria
 */
export function filterCaseStudies(
  caseStudies: CaseStudy[],
  filters: {
    service?: string
    industry?: string
    search?: string
  }
): CaseStudy[] {
  return caseStudies.filter((caseStudy) => {
    // Service filter
    if (filters.service && !caseStudy.serviceIds.includes(filters.service)) {
      return false
    }

    // Industry filter
    if (filters.industry && !caseStudy.industryIds.includes(filters.industry)) {
      return false
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      const searchableText = [
        caseStudy.title,
        caseStudy.shortDescription,
        caseStudy.client,
        ...caseStudy.results,
        ...caseStudy.technologies,
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
 * Sort case studies by various criteria
 */
export function sortCaseStudies(
  caseStudies: CaseStudy[],
  sortBy: 'title' | 'client' | 'duration' | 'recent' = 'title'
): CaseStudy[] {
  const sorted = [...caseStudies]

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
export function getCaseStudyById(
  caseStudies: CaseStudy[],
  id: string
): CaseStudy | null {
  return caseStudies.find((cs) => cs.id === id) || null
}

/**
 * Paginate case studies array
 */
export function paginateCaseStudies(
  caseStudies: CaseStudy[],
  page: number = 1,
  itemsPerPage: number = 12
) {
  const totalItems = caseStudies.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const items = caseStudies.slice(startIndex, endIndex)

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
 * Get the next and previous case studies for navigation
 */
export function getCaseStudyNavigation(
  caseStudies: CaseStudy[],
  currentId: string
): {
  previous: CaseStudy | null
  next: CaseStudy | null
} {
  const currentIndex = caseStudies.findIndex((cs) => cs.id === currentId)

  if (currentIndex === -1) {
    return { previous: null, next: null }
  }

  const previous = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const next =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

  return { previous, next }
}

/**
 * Get case studies by a specific service
 */
export function getCaseStudiesByService(
  caseStudies: CaseStudy[],
  serviceId: string
): CaseStudy[] {
  return caseStudies.filter((cs) => cs.serviceIds.includes(serviceId))
}

/**
 * Get case studies by a specific industry
 */
export function getCaseStudiesByIndustry(
  caseStudies: CaseStudy[],
  industryId: string
): CaseStudy[] {
  return caseStudies.filter((cs) => cs.industryIds.includes(industryId))
}

/**
 * Generate breadcrumb items for case study navigation
 */
export function getCaseStudyBreadcrumbs(caseStudy: CaseStudy) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    {
      label: caseStudy.title,
      href: `/case-studies/${caseStudy.id}`,
      current: true,
    },
  ]
}
