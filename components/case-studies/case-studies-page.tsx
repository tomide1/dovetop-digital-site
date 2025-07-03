'use client'

import React, { useMemo, useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { CaseStudy } from '@/types/what-we-do'
import CaseStudiesHero from './case-studies-hero'
import CaseStudiesFilters from './case-studies-filters'
import CaseStudiesGrid from './case-studies-grid'
import {
  filterCaseStudies,
  sortCaseStudies,
  paginateCaseStudies,
  getUniqueServices,
  getUniqueIndustries,
} from '@/utils/case-study-helpers'

interface CaseStudiesPageProps {
  caseStudies: CaseStudy[]
  stats: {
    total: number
    industries: number
    services: number
    totalResults: number
    avgDuration: number
  }
}

const ITEMS_PER_PAGE = 12

export default function CaseStudiesPage({
  caseStudies,
  stats,
}: CaseStudiesPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  // Get filter values from URL parameters
  const filters = useMemo(
    () => ({
      service: searchParams.get('service') || '',
      industry: searchParams.get('industry') || '',
      search: searchParams.get('search') || '',
    }),
    [searchParams]
  )

  const currentPage = useMemo(() => {
    const page = parseInt(searchParams.get('page') || '1')
    return Math.max(1, page)
  }, [searchParams])

  // Get unique values for filter options
  const availableServices = useMemo(
    () => getUniqueServices(caseStudies),
    [caseStudies]
  )
  const availableIndustries = useMemo(
    () => getUniqueIndustries(caseStudies),
    [caseStudies]
  )

  // Filter and sort case studies
  const filteredCaseStudies = useMemo(() => {
    const filtered = filterCaseStudies(caseStudies, filters)
    return sortCaseStudies(filtered, 'title')
  }, [caseStudies, filters])

  // Paginate results
  const paginatedResults = useMemo(() => {
    return paginateCaseStudies(filteredCaseStudies, currentPage, ITEMS_PER_PAGE)
  }, [filteredCaseStudies, currentPage])

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
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  )

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
    router.push('/case-studies', { scroll: false })
    setTimeout(() => setIsLoading(false), 150)
  }, [router])

  // Enhanced filter object for the filters component
  const enhancedFilters = useMemo(
    () => ({
      ...filters,
      search: searchValue, // Use local search value for immediate UI updates
    }),
    [filters, searchValue]
  )

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <CaseStudiesHero stats={stats} />

      {/* Filters Section */}
      <div data-filters-section>
        <CaseStudiesFilters
          services={availableServices}
          industries={availableIndustries}
          filters={enhancedFilters}
          resultCount={filteredCaseStudies.length}
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
      <CaseStudiesGrid
        caseStudies={paginatedResults.items}
        currentPage={paginatedResults.currentPage}
        totalPages={paginatedResults.totalPages}
        onPageChange={handlePageChange}
        isLoading={isLoading}
      />

      {/* SEO-friendly content for empty results */}
      {!isLoading && filteredCaseStudies.length === 0 && (
        <div className='sr-only'>
          <h2>No case studies match your current filters</h2>
          <p>
            We have {caseStudies.length} total case studies across{' '}
            {availableServices.length} services and {availableIndustries.length}{' '}
            industries. Try adjusting your search criteria to find relevant
            projects.
          </p>
        </div>
      )}
    </div>
  )
}
