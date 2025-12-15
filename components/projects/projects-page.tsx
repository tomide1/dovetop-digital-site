'use client'

import React, { useMemo, useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Project, ServiceId, IndustryId } from '@/types/what-we-do'
import { SERVICE_IDS, INDUSTRY_IDS } from '@/types/what-we-do'
import ProjectsHero from './projects-hero'
import ProjectsFilters from './projects-filters'
import ProjectsGrid from './projects-grid'
import {
  filterProjects,
  sortProjects,
  paginateProjects,
  getUniqueServices,
  getUniqueIndustries,
} from '@/utils/project-helpers'

// Type guards to validate URL parameters
const isValidServiceId = (id: string): id is ServiceId => {
  return SERVICE_IDS.includes(id as ServiceId)
}

const isValidIndustryId = (id: string): id is IndustryId => {
  return INDUSTRY_IDS.includes(id as IndustryId)
}

interface ProjectsPageProps {
  projects: Project[]
  stats: {
    total: number
    industries: number
    services: number
    totalResults: number
    avgDuration: number
  }
}

const ITEMS_PER_PAGE = 12

export default function ProjectsPage({
  projects,
  stats,
}: ProjectsPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  // Get filter values from URL parameters (UI filters as strings)
  const filters = useMemo(
    () => ({
      service: searchParams.get('service') || '',
      industry: searchParams.get('industry') || '',
      search: searchParams.get('search') || '',
    }),
    [searchParams]
  )

  // Create typed filters for the filterCaseStudies function
  const typedFilters = useMemo(() => {
    const serviceParam = filters.service
    const industryParam = filters.industry

    return {
      service:
        serviceParam && isValidServiceId(serviceParam)
          ? serviceParam
          : undefined,
      industry:
        industryParam && isValidIndustryId(industryParam)
          ? industryParam
          : undefined,
      search: filters.search || undefined,
    }
  }, [filters.service, filters.industry, filters.search])

  const currentPage = useMemo(() => {
    const page = parseInt(searchParams.get('page') || '1')
    return Math.max(1, page)
  }, [searchParams])

  // Get unique values for filter options
  const availableServices = useMemo(
    () => getUniqueServices(projects),
    [projects]
  )
  const availableIndustries = useMemo(
    () => getUniqueIndustries(projects),
    [projects]
  )

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    const filtered = filterProjects(projects, typedFilters)
    return sortProjects(filtered, 'title')
  }, [projects, typedFilters])

  // Paginate results
  const paginatedResults = useMemo(() => {
    return paginateProjects(filteredProjects, currentPage, ITEMS_PER_PAGE)
  }, [filteredProjects, currentPage])

  // Update URL with new parameters
  const updateURL = useCallback(
    (newParams: Record<string, string | number>) => {
      const params = new URLSearchParams(searchParams.toString())

      Object.entries(newParams).forEach(([key, value]) => {
        if (value && value !== '') {
          params.set(key, value.toString())
        } else {
          params.delete(key)
        }
      })

      // Reset to page 1 when filters change (except for page changes)
      if (
        !('page' in newParams) &&
        (newParams.service !== undefined ||
          newParams.industry !== undefined ||
          newParams.search !== undefined)
      ) {
        params.delete('page')
      }

      const newURL = `?${params.toString()}`
      router.push(newURL, { scroll: false })
    },
    [router, searchParams]
  )

  // Handle filter changes
  const handleFilterChange = useCallback(
    (newFilters: Partial<typeof filters>) => {
      setIsLoading(true)
      updateURL(newFilters)

      // Simulate loading state for better UX
      setTimeout(() => setIsLoading(false), 150)
    },
    [updateURL]
  )

  // Handle search with debouncing
  const [searchValue, setSearchValue] = useState(filters.search)
  const [searchTimeout, setSearchTimeout] = useState<
    ReturnType<typeof setTimeout> | null
  >(null)

  const handleSearchChange = useCallback(
    (search: string) => {
      setSearchValue(search)

      if (searchTimeout) {
        clearTimeout(searchTimeout)
      }

      const timeout = setTimeout(() => {
        handleFilterChange({ search })
      }, 300) // 300ms debounce

      setSearchTimeout(timeout)
    },
    [handleFilterChange, searchTimeout]
  )

  // Sync search value with URL on mount
  useEffect(() => {
    setSearchValue(filters.search)
  }, [filters.search])

  // Handle pagination
  const handlePageChange = useCallback(
    (page: number) => {
      setIsLoading(true)
      updateURL({ page })

      // Scroll to top of results
      const filtersElement = document.querySelector('[data-filters-section]')
      if (filtersElement) {
        filtersElement.scrollIntoView({ behavior: 'smooth' })
      }

      setTimeout(() => setIsLoading(false), 150)
    },
    [updateURL]
  )

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setIsLoading(true)
    setSearchValue('')
    router.push('/projects', { scroll: false })
    setTimeout(() => setIsLoading(false), 150)
  }, [router])

  // Enhanced filter object for the filters component
  const enhancedFilters = useMemo(
    () => ({
      service: filters.service,
      industry: filters.industry,
      search: searchValue || '', // Use local search value for immediate UI updates
    }),
    [filters.service, filters.industry, searchValue]
  )

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <ProjectsHero stats={stats} />

      {/* Filters Section */}
      <div data-filters-section>
        <ProjectsFilters
          services={availableServices}
          industries={availableIndustries}
          filters={enhancedFilters}
          resultCount={filteredProjects.length}
          onFilterChange={(newFilters) => {
            if ('search' in newFilters) {
              handleSearchChange(newFilters.search || '')
            } else {
              handleFilterChange(newFilters)
            }
          }}
          onClearFilters={handleClearFilters}
        />
      </div>

      {/* Results Grid */}
      <ProjectsGrid
        projects={paginatedResults.items}
        currentPage={paginatedResults.currentPage}
        totalPages={paginatedResults.totalPages}
        onPageChange={handlePageChange}
        isLoading={isLoading}
      />

      {/* SEO-friendly content for empty results */}
      {!isLoading && filteredProjects.length === 0 && (
        <div className='sr-only'>
          <h2>No projects match your current filters</h2>
          <p>
            We have {projects.length} total projects across{' '}
            {availableServices.length} services and {availableIndustries.length}{' '}
            industries. Try adjusting your search criteria to find relevant
            projects.
          </p>
        </div>
      )}
    </div>
  )
}
