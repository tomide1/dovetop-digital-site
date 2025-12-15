import React from 'react'
import type { Project } from '@/types/what-we-do'
import ProjectCard from './projects-card'

interface ProjectsGridProps {
  projects: Project[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  isLoading?: boolean
}

export default function ProjectsGrid({
  projects,
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}: ProjectsGridProps) {
  // Empty state
  if (!isLoading && projects.length === 0) {
    return (
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='text-6xl text-gray-300 mb-4'>🔍</div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              No projects found
            </h3>
            <p className='text-gray-600 mb-6 max-w-md mx-auto'>
              Try adjusting your search or filter criteria to find the projects
              you&apos;re looking for.
            </p>
            <button
              onClick={() => window.location.reload()}
              className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-gray-50 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Loading state */}
        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 animate-pulse'
                aria-label='Loading project'
              >
                <div className='h-6 bg-gray-200 rounded mb-4'></div>
                <div className='h-4 bg-gray-200 rounded mb-2'></div>
                <div className='h-4 bg-gray-200 rounded mb-4 w-3/4'></div>
                <div className='flex gap-2 mb-4'>
                  <div className='h-6 bg-gray-200 rounded w-20'></div>
                  <div className='h-6 bg-gray-200 rounded w-24'></div>
                </div>
                <div className='h-4 bg-gray-200 rounded w-32'></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Projects Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant='default'
                  showImage={true}
                  showClient={false}
                  showDuration={false}
                  showIndustry={true}
                  maxResults={2}
                  data-testid={`grid-project-${project.id}`}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className='mt-12 flex items-center justify-center'>
                <nav
                  className='flex items-center space-x-2'
                  aria-label='Projects pagination'
                >
                  {/* Previous button */}
                  <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 text-sm font-medium rounded-lg ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    }`}
                    aria-label='Go to previous page'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNum = index + 1
                    const isCurrentPage = pageNum === currentPage

                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)

                    if (!showPage) {
                      // Show ellipsis for gaps
                      if (
                        pageNum === currentPage - 2 ||
                        pageNum === currentPage + 2
                      ) {
                        return (
                          <span
                            key={pageNum}
                            className='px-3 py-2 text-gray-500'
                          >
                            ...
                          </span>
                        )
                      }
                      return null
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg ${
                          isCurrentPage
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        }`}
                        aria-label={`Go to page ${pageNum}`}
                        aria-current={isCurrentPage ? 'page' : undefined}
                      >
                        {pageNum}
                      </button>
                    )
                  })}

                  {/* Next button */}
                  <button
                    onClick={() =>
                      onPageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 text-sm font-medium rounded-lg ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    }`}
                    aria-label='Go to next page'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            )}

            {/* Page info */}
            {totalPages > 1 && (
              <div className='mt-6 text-center text-sm text-gray-600'>
                Page {currentPage} of {totalPages}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
