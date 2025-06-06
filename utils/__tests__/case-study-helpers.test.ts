import {
  getUniqueServices,
  getUniqueIndustries,
  getServiceDisplayName,
  getIndustryDisplayName,
  getCaseStudyStats,
  filterCaseStudies,
  sortCaseStudies,
  getCaseStudyById,
  paginateCaseStudies,
  getCaseStudyNavigation,
  getCaseStudiesByService,
  getCaseStudiesByIndustry,
  getCaseStudyBreadcrumbs,
} from '../case-study-helpers'
import type { CaseStudy } from '@/data/case-studies'

// Mock case study data
const mockCaseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Cloud Migration Project',
    serviceIds: ['cloud-solutions'],
    shortDescription: 'Migrated legacy systems to cloud',
    detailedDescription: 'Detailed migration story',
    results: ['Reduced costs by 30%', 'Improved performance by 50%'],
    imageUrl: 'https://example.com/image1.jpg',
    client: 'TechCorp',
    industryIds: ['healthcare'],
    duration: '6 months',
    technologies: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: 'cs-2',
    title: 'UX Redesign Initiative',
    serviceIds: ['user-centered-design'],
    shortDescription: 'Redesigned user interface',
    detailedDescription: 'Detailed redesign story',
    results: ['Increased user satisfaction by 40%'],
    imageUrl: 'https://example.com/image2.jpg',
    client: 'DesignCo',
    industryIds: ['finance', 'legal'],
    duration: '4 months',
    technologies: ['Figma', 'React', 'TypeScript'],
  },
  {
    id: 'cs-3',
    title: 'Data Analytics Platform',
    serviceIds: ['data-analytics', 'cloud-solutions'],
    shortDescription: 'Built analytics dashboard',
    detailedDescription: 'Detailed analytics story',
    results: [
      'Improved decision making by 60%',
      'Reduced reporting time by 80%',
      'Increased revenue by 25%',
    ],
    imageUrl: 'https://example.com/image3.jpg',
    client: 'DataTech',
    industryIds: ['finance'],
    duration: '8 months',
    technologies: ['Python', 'SQL', 'Tableau'],
  },
]

describe('Case Study Helpers', () => {
  describe('getUniqueServices', () => {
    it('returns unique service IDs from case studies', () => {
      const result = getUniqueServices(mockCaseStudies)
      expect(result).toEqual([
        'cloud-solutions',
        'user-centered-design',
        'data-analytics',
      ])
    })

    it('handles empty array', () => {
      const result = getUniqueServices([])
      expect(result).toEqual([])
    })

    it('handles case studies with multiple services', () => {
      const result = getUniqueServices([mockCaseStudies[2]]) // Has both data-analytics and cloud-solutions
      expect(result).toEqual(['data-analytics', 'cloud-solutions'])
    })
  })

  describe('getUniqueIndustries', () => {
    it('returns unique industry IDs from case studies', () => {
      const result = getUniqueIndustries(mockCaseStudies)
      expect(result).toEqual(['healthcare', 'finance', 'legal'])
    })

    it('handles empty array', () => {
      const result = getUniqueIndustries([])
      expect(result).toEqual([])
    })

    it('handles case studies with multiple industries', () => {
      const result = getUniqueIndustries([mockCaseStudies[1]]) // Has both finance and legal
      expect(result).toEqual(['finance', 'legal'])
    })
  })

  describe('getServiceDisplayName', () => {
    it('returns formatted service names', () => {
      expect(getServiceDisplayName('cloud-solutions')).toBe('Cloud Solutions')
      expect(getServiceDisplayName('user-centered-design')).toBe(
        'User-Centered Design'
      )
      expect(getServiceDisplayName('data-analytics')).toBe('Data Analytics')
      expect(getServiceDisplayName('security-governance')).toBe(
        'Security & Governance'
      )
    })

    it('handles unknown service IDs', () => {
      expect(getServiceDisplayName('unknown-service')).toBe('Unknown Service')
    })

    it('formats hyphenated words correctly', () => {
      expect(getServiceDisplayName('custom-service-name')).toBe(
        'Custom Service Name'
      )
    })
  })

  describe('getIndustryDisplayName', () => {
    it('returns formatted industry names', () => {
      expect(getIndustryDisplayName('healthcare')).toBe('Healthcare')
      expect(getIndustryDisplayName('finance')).toBe('Finance')
      expect(getIndustryDisplayName('e-commerce')).toBe('E-commerce')
    })

    it('handles unknown industry IDs', () => {
      expect(getIndustryDisplayName('unknown')).toBe('Unknown')
    })

    it('capitalizes first letter correctly', () => {
      expect(getIndustryDisplayName('manufacturing')).toBe('Manufacturing')
    })
  })

  describe('getCaseStudyStats', () => {
    it('calculates comprehensive stats correctly', () => {
      const stats = getCaseStudyStats(mockCaseStudies)

      expect(stats.total).toBe(3)
      expect(stats.services).toBe(3) // cloud-solutions, user-centered-design, data-analytics
      expect(stats.industries).toBe(3) // healthcare, finance, legal
      expect(stats.totalResults).toBe(6) // Total of all results across case studies
      expect(stats.avgDuration).toBe(6) // (6 + 4 + 8) / 3 = 6
    })

    it('handles empty array', () => {
      const stats = getCaseStudyStats([])

      expect(stats.total).toBe(0)
      expect(stats.services).toBe(0)
      expect(stats.industries).toBe(0)
      expect(stats.totalResults).toBe(0)
      expect(stats.avgDuration).toBe(0)
    })

    it('includes unique services and industries arrays', () => {
      const stats = getCaseStudyStats(mockCaseStudies)

      expect(stats.uniqueServices).toEqual([
        'cloud-solutions',
        'user-centered-design',
        'data-analytics',
      ])
      expect(stats.uniqueIndustries).toEqual(['healthcare', 'finance', 'legal'])
    })
  })

  describe('filterCaseStudies', () => {
    it('filters by service correctly', () => {
      const result = filterCaseStudies(mockCaseStudies, {
        service: 'cloud-solutions',
      })
      expect(result).toHaveLength(2) // cs-1 and cs-3 have cloud-solutions
      expect(result.map((cs) => cs.id)).toEqual(['cs-1', 'cs-3'])
    })

    it('filters by industry correctly', () => {
      const result = filterCaseStudies(mockCaseStudies, { industry: 'finance' })
      expect(result).toHaveLength(2) // cs-2 and cs-3 have finance
      expect(result.map((cs) => cs.id)).toEqual(['cs-2', 'cs-3'])
    })

    it('filters by search term correctly', () => {
      const result = filterCaseStudies(mockCaseStudies, { search: 'cloud' })
      expect(result).toHaveLength(1) // Only cs-1 has "Cloud" in title
      expect(result[0].id).toBe('cs-1')
    })

    it('searches across multiple fields', () => {
      const result = filterCaseStudies(mockCaseStudies, { search: 'TechCorp' })
      expect(result).toHaveLength(1) // Matches client name
      expect(result[0].id).toBe('cs-1')
    })

    it('searches technologies', () => {
      const result = filterCaseStudies(mockCaseStudies, { search: 'React' })
      expect(result).toHaveLength(1) // cs-2 uses React
      expect(result[0].id).toBe('cs-2')
    })

    it('combines multiple filters correctly', () => {
      const result = filterCaseStudies(mockCaseStudies, {
        service: 'cloud-solutions',
        industry: 'finance',
      })
      expect(result).toHaveLength(1) // Only cs-3 matches both
      expect(result[0].id).toBe('cs-3')
    })

    it('returns empty array when no matches', () => {
      const result = filterCaseStudies(mockCaseStudies, {
        search: 'nonexistent',
      })
      expect(result).toHaveLength(0)
    })

    it('is case insensitive for search', () => {
      const result = filterCaseStudies(mockCaseStudies, { search: 'CLOUD' })
      expect(result).toHaveLength(1)
      expect(result[0].id).toBe('cs-1')
    })
  })

  describe('sortCaseStudies', () => {
    it('sorts by title alphabetically', () => {
      const result = sortCaseStudies(mockCaseStudies, 'title')
      expect(result.map((cs) => cs.title)).toEqual([
        'Cloud Migration Project',
        'Data Analytics Platform',
        'UX Redesign Initiative',
      ])
    })

    it('sorts by client name', () => {
      const result = sortCaseStudies(mockCaseStudies, 'client')
      expect(result.map((cs) => cs.client)).toEqual([
        'DataTech',
        'DesignCo',
        'TechCorp',
      ])
    })

    it('sorts by duration', () => {
      const result = sortCaseStudies(mockCaseStudies, 'duration')
      expect(result.map((cs) => cs.duration)).toEqual([
        '4 months',
        '6 months',
        '8 months',
      ])
    })

    it('sorts by recent (reverse ID order)', () => {
      const result = sortCaseStudies(mockCaseStudies, 'recent')
      expect(result.map((cs) => cs.id)).toEqual(['cs-3', 'cs-2', 'cs-1'])
    })

    it('defaults to title sorting for unknown sort type', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = sortCaseStudies(mockCaseStudies, 'unknown' as any)
      expect(result.map((cs) => cs.title)).toEqual([
        'Cloud Migration Project',
        'Data Analytics Platform',
        'UX Redesign Initiative',
      ])
    })

    it('does not mutate original array', () => {
      const original = [...mockCaseStudies]
      sortCaseStudies(mockCaseStudies, 'title')
      expect(mockCaseStudies).toEqual(original)
    })
  })

  describe('getCaseStudyById', () => {
    it('finds case study by ID', () => {
      const result = getCaseStudyById(mockCaseStudies, 'cs-2')
      expect(result?.id).toBe('cs-2')
      expect(result?.title).toBe('UX Redesign Initiative')
    })

    it('returns null for non-existent ID', () => {
      const result = getCaseStudyById(mockCaseStudies, 'non-existent')
      expect(result).toBeNull()
    })

    it('handles empty array', () => {
      const result = getCaseStudyById([], 'cs-1')
      expect(result).toBeNull()
    })
  })

  describe('paginateCaseStudies', () => {
    it('paginates correctly for first page', () => {
      const result = paginateCaseStudies(mockCaseStudies, 1, 2)

      expect(result.items).toHaveLength(2)
      expect(result.items.map((cs) => cs.id)).toEqual(['cs-1', 'cs-2'])
      expect(result.currentPage).toBe(1)
      expect(result.totalPages).toBe(2)
      expect(result.totalItems).toBe(3)
      expect(result.hasNextPage).toBe(true)
      expect(result.hasPrevPage).toBe(false)
    })

    it('paginates correctly for last page', () => {
      const result = paginateCaseStudies(mockCaseStudies, 2, 2)

      expect(result.items).toHaveLength(1)
      expect(result.items.map((cs) => cs.id)).toEqual(['cs-3'])
      expect(result.currentPage).toBe(2)
      expect(result.totalPages).toBe(2)
      expect(result.hasNextPage).toBe(false)
      expect(result.hasPrevPage).toBe(true)
    })

    it('handles page beyond available pages', () => {
      const result = paginateCaseStudies(mockCaseStudies, 5, 2)

      expect(result.items).toHaveLength(0)
      expect(result.currentPage).toBe(5)
      expect(result.totalPages).toBe(2)
    })

    it('uses default values correctly', () => {
      const result = paginateCaseStudies(mockCaseStudies)

      expect(result.currentPage).toBe(1)
      expect(result.itemsPerPage).toBe(12)
      expect(result.items).toHaveLength(3) // All items fit on one page
    })

    it('calculates total pages correctly', () => {
      const result = paginateCaseStudies(mockCaseStudies, 1, 1)
      expect(result.totalPages).toBe(3)
    })
  })

  describe('getCaseStudyNavigation', () => {
    it('returns correct previous and next case studies', () => {
      const navigation = getCaseStudyNavigation(mockCaseStudies, 'cs-2')

      expect(navigation.previous).toEqual(mockCaseStudies[0])
      expect(navigation.next).toEqual(mockCaseStudies[2])
    })

    it('returns null for previous when at first case study', () => {
      const navigation = getCaseStudyNavigation(mockCaseStudies, 'cs-1')

      expect(navigation.previous).toBeNull()
      expect(navigation.next).toEqual(mockCaseStudies[1])
    })

    it('returns null for next when at last case study', () => {
      const navigation = getCaseStudyNavigation(mockCaseStudies, 'cs-3')

      expect(navigation.previous).toEqual(mockCaseStudies[1])
      expect(navigation.next).toBeNull()
    })

    it('returns null for both when case study not found', () => {
      const navigation = getCaseStudyNavigation(mockCaseStudies, 'non-existent')

      expect(navigation.previous).toBeNull()
      expect(navigation.next).toBeNull()
    })
  })

  describe('getCaseStudiesByService', () => {
    it('returns case studies with specific service', () => {
      const result = getCaseStudiesByService(mockCaseStudies, 'cloud-solutions')

      expect(result).toHaveLength(2)
      expect(result[0].id).toBe('cs-1')
      expect(result[1].id).toBe('cs-3')
    })

    it('returns empty array when no case studies match service', () => {
      const result = getCaseStudiesByService(
        mockCaseStudies,
        'non-existent-service'
      )

      expect(result).toHaveLength(0)
    })
  })

  describe('getCaseStudiesByIndustry', () => {
    it('returns case studies with specific industry', () => {
      const result = getCaseStudiesByIndustry(mockCaseStudies, 'healthcare')

      expect(result).toHaveLength(1)
      expect(result[0].id).toBe('cs-1')
    })

    it('returns empty array when no case studies match industry', () => {
      const result = getCaseStudiesByIndustry(
        mockCaseStudies,
        'non-existent-industry'
      )

      expect(result).toHaveLength(0)
    })
  })

  describe('getCaseStudyBreadcrumbs', () => {
    it('generates correct breadcrumb structure', () => {
      const breadcrumbs = getCaseStudyBreadcrumbs(mockCaseStudies[0])

      expect(breadcrumbs).toHaveLength(3)
      expect(breadcrumbs[0]).toEqual({ label: 'Home', href: '/' })
      expect(breadcrumbs[1]).toEqual({
        label: 'Case Studies',
        href: '/case-studies',
      })
      expect(breadcrumbs[2]).toEqual({
        label: 'Cloud Migration Project',
        href: '/case-studies/cs-1',
        current: true,
      })
    })
  })
})
