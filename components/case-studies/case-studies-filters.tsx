'use client'

import React from 'react'
import {
  getServiceDisplayName,
  getIndustryDisplayName,
} from '@/utils/case-study-helpers'

interface CaseStudiesFiltersProps {
  services: string[]
  industries: string[]
  filters: {
    service: string
    industry: string
    search: string
  }
  resultCount: number
  onFilterChange: (filters: Partial<CaseStudiesFiltersProps['filters']>) => void
  onClearFilters: () => void
}

export default function CaseStudiesFilters({
  services,
  industries,
  filters,
  resultCount,
  onFilterChange,
  onClearFilters,
}: CaseStudiesFiltersProps) {
  const hasActiveFilters = filters.service || filters.industry || filters.search

  return (
    <div className='bg-white border-b border-gray-200 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          {/* Search Bar */}
          <div className='relative'>
            <label htmlFor='case-study-search' className='sr-only'>
              Search case studies
            </label>
            <div className='relative'>
              <input
                id='case-study-search'
                type='text'
                placeholder='Search case studies by title, client, or technology...'
                value={filters.search}
                onChange={(e) => onFilterChange({ search: e.target.value })}
                className='w-full px-4 py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                aria-describedby='search-description'
              />
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>
            <p id='search-description' className='sr-only'>
              Search through case study titles, descriptions, client names, and
              technologies
            </p>
          </div>

          {/* Filter Dropdowns */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6'>
            {/* Service Filter */}
            <div>
              <label
                htmlFor='service-filter'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Service Type
              </label>
              <select
                id='service-filter'
                value={filters.service}
                onChange={(e) => onFilterChange({ service: e.target.value })}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                aria-describedby='service-filter-description'
              >
                <option value=''>All Services</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {getServiceDisplayName(service)}
                  </option>
                ))}
              </select>
              <p id='service-filter-description' className='sr-only'>
                Filter case studies by service type
              </p>
            </div>

            {/* Industry Filter */}
            <div>
              <label
                htmlFor='industry-filter'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Industry
              </label>
              <select
                id='industry-filter'
                value={filters.industry}
                onChange={(e) => onFilterChange({ industry: e.target.value })}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                aria-describedby='industry-filter-description'
              >
                <option value=''>All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {getIndustryDisplayName(industry)}
                  </option>
                ))}
              </select>
              <p id='industry-filter-description' className='sr-only'>
                Filter case studies by industry
              </p>
            </div>

            {/* Results and Clear Filters */}
            <div className='flex items-end justify-between space-x-4'>
              <div className='flex-1'>
                <div className='text-sm font-medium text-gray-700 mb-2'>
                  Results
                </div>
                <div className='px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900'>
                  {resultCount} case {resultCount === 1 ? 'study' : 'studies'}
                </div>
              </div>

              {hasActiveFilters && (
                <div className='flex-shrink-0'>
                  <button
                    onClick={onClearFilters}
                    className='px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200'
                    aria-label='Clear all filters'
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className='flex flex-wrap gap-2'>
              <span className='text-sm text-gray-600'>Active filters:</span>

              {filters.service && (
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                  Service: {getServiceDisplayName(filters.service)}
                  <button
                    onClick={() => onFilterChange({ service: '' })}
                    className='ml-2 text-blue-600 hover:text-blue-800'
                    aria-label={`Remove ${getServiceDisplayName(filters.service)} service filter`}
                  >
                    ×
                  </button>
                </span>
              )}

              {filters.industry && (
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                  Industry: {getIndustryDisplayName(filters.industry)}
                  <button
                    onClick={() => onFilterChange({ industry: '' })}
                    className='ml-2 text-green-600 hover:text-green-800'
                    aria-label={`Remove ${getIndustryDisplayName(filters.industry)} industry filter`}
                  >
                    ×
                  </button>
                </span>
              )}

              {filters.search && (
                <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800'>
                  Search: &ldquo;{filters.search}&rdquo;
                  <button
                    onClick={() => onFilterChange({ search: '' })}
                    className='ml-2 text-purple-600 hover:text-purple-800'
                    aria-label='Clear search filter'
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
