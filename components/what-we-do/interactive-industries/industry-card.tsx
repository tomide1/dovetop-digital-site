'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { getIndustryIcon } from '@/utils/industry-helpers'
import { CaseStudyCard } from '@/components/case-studies'
import type {
  Industry,
  IndustryDetailsData,
  ServiceApplicationWithService,
  CaseStudy,
} from '@/types/what-we-do'

interface IndustryCardProps {
  industry: Industry
  isSelected: boolean
  animationDelay: number
  isVisible: boolean
  isExpanded?: boolean
  selectedDetails?: IndustryDetailsData | null
}

// Helper function to determine if icon is a valid image URL
const isValidImageUrl = (icon: string): boolean => {
  return (
    icon.startsWith('/') ||
    icon.startsWith('http://') ||
    icon.startsWith('https://')
  )
}

export default function IndustryCard({
  industry,
  isSelected,
  animationDelay,
  isVisible,
  isExpanded = false,
  selectedDetails,
}: IndustryCardProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSelect = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (isSelected) {
      params.delete('industry')
    } else {
      params.set('industry', industry.id)
    }
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const icon = getIndustryIcon(industry.id)

  // Base classes for the card container
  const baseClasses = `relative cursor-pointer rounded-2xl border-2 transition-all duration-500 transform`

  // Dynamic classes based on state
  const stateClasses = isExpanded
    ? `border-blue-600 bg-blue-50 shadow-2xl z-20`
    : isSelected
      ? 'border-blue-500 bg-blue-50 shadow-xl z-10'
      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg hover:-translate-y-1'

  const visibilityClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8'

  // Conditional hover/transform for non-expanded cards
  const hoverTransformClasses = !isExpanded ? 'group' : ''

  return (
    <div
      className={`${baseClasses} ${stateClasses} ${visibilityClasses} ${hoverTransformClasses}`}
      onClick={handleSelect}
      style={{
        transitionDelay: !isExpanded ? `${animationDelay}ms` : '0ms',
      }}
      data-testid={`industry-card-${industry.id}`}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleSelect()
        }
      }}
      aria-pressed={isSelected}
      aria-describedby={`industry-desc-${industry.id}`}
    >
      {isExpanded && selectedDetails ? (
        // Expanded content with detailed information
        <div className='p-8 md:p-12' data-testid='expanded-industry-content'>
          {/* Header with Close Button */}
          <div
            className='flex items-start justify-between mb-8'
            data-testid='expanded-industry-header'
          >
            <div className='flex items-center'>
              <div className='text-6xl mr-6'>{industry.icon || icon}</div>
              <div>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                  {industry.name} Industry
                </h3>
                <p className='text-xl text-gray-600 leading-relaxed max-w-3xl'>
                  {industry.description}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleSelect()
              }}
              className='p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 flex-shrink-0'
              aria-label={`Close ${industry.name} industry details`}
              data-testid='expanded-card-close-button'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Tailored Solutions */}
          <div className='mb-12'>
            <h4 className='text-2xl font-bold text-gray-900 mb-8'>
              Tailored Solutions
            </h4>

            <div className='grid md:grid-cols-2 gap-6'>
              {selectedDetails.applications.map(
                (application: ServiceApplicationWithService) => (
                  <div
                    key={application.serviceId}
                    className='border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300'
                    data-testid={`application-${application.serviceId}`}
                  >
                    <div className='flex items-center mb-4'>
                      {application.service?.icon &&
                      isValidImageUrl(application.service.icon) ? (
                        <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0'>
                          <Image
                            src={application.service.icon}
                            alt={application.service.title}
                            width={24}
                            height={24}
                            className='w-6 h-6'
                          />
                        </div>
                      ) : application.service?.icon ? (
                        <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0'>
                          <span className='text-2xl'>
                            {application.service.icon}
                          </span>
                        </div>
                      ) : null}
                      <h5 className='text-xl font-bold text-gray-900'>
                        {application.service?.title}
                      </h5>
                    </div>
                    <p className='text-gray-600 leading-relaxed'>
                      {application.applicationText}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Featured Case Studies */}
          {selectedDetails.caseStudies.length > 0 && (
            <div>
              <h4 className='text-2xl font-bold text-gray-900 mb-8'>
                Featured Case Studies
              </h4>

              <div className='grid md:grid-cols-2 gap-6'>
                {selectedDetails.caseStudies.map((caseStudy: CaseStudy) => (
                  <CaseStudyCard
                    key={caseStudy.id}
                    caseStudy={caseStudy}
                    variant='compact'
                    maxResults={2}
                    onClick={(e) => e.stopPropagation()}
                    data-testid={`case-study-${caseStudy.id}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // Normal card content
        <div className={`${isExpanded ? 'p-8 md:p-12 max-w-2xl' : 'p-6'}`}>
          {/* Industry Icon */}
          <div className='text-center mb-4'>
            <div
              className={`mb-3 transform transition-transform duration-300 ${
                isExpanded
                  ? 'text-7xl md:text-8xl'
                  : 'text-4xl group-hover:scale-110'
              }`}
            >
              {industry.icon || icon}
            </div>
            <h3
              className={`font-bold mb-3 transition-colors duration-300 ${
                isExpanded
                  ? 'text-4xl md:text-5xl text-blue-700'
                  : isSelected
                    ? 'text-xl text-blue-700'
                    : 'text-xl text-gray-900'
              }`}
            >
              {industry.name}
            </h3>
          </div>

          {/* Description */}
          <p
            id={`industry-desc-${industry.id}`}
            className={`leading-relaxed text-center mb-4 ${
              isExpanded
                ? 'text-lg md:text-xl text-gray-700'
                : 'text-sm text-gray-600'
            }`}
          >
            {industry.description}
          </p>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
              isExpanded
                ? 'bg-blue-500 bg-opacity-10'
                : isSelected
                  ? 'bg-blue-500 bg-opacity-5'
                  : 'bg-transparent hover:bg-blue-500 hover:bg-opacity-5'
            }`}
          ></div>
        </div>
      )}
    </div>
  )
}
