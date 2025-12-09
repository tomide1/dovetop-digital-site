'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/types/what-we-do'

export interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'compact' | 'featured'
  showImage?: boolean
  showClient?: boolean
  showIndustry?: boolean
  showTechnologies?: boolean
  showDuration?: boolean
  maxResults?: number
  className?: string
  onClick?: (e: React.MouseEvent) => void
  'data-testid'?: string
}

export default function ProjectCard({
  project,
  variant = 'default',
  showImage = false,
  showClient = false,
  showIndustry = false,
  showTechnologies = false,
  showDuration = false,
  maxResults = 2,
  className = '',
  onClick,
  'data-testid': testId,
}: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
  }

  // Get service information
  const serviceInfo = project.serviceIds[0] // Primary service
  const serviceColorMap = {
    'cloud-solutions': 'bg-blue-100 text-blue-800',
    'user-centered-design': 'bg-green-100 text-green-800',
    'data-analytics': 'bg-purple-100 text-purple-800',
    'security-governance': 'bg-red-100 text-red-800',
  }

  // Variant-specific classes
  const variantClasses = {
    default: 'p-6',
    compact: 'p-4',
    featured: 'p-6 md:p-8',
  }

  const titleClasses = {
    default: 'text-xl',
    compact: 'text-lg',
    featured: 'text-2xl',
  }

  const baseClasses = `group block bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300 ${variantClasses[variant]} ${className}`

  return (
    <Link
      href={`/projects/${project.id}`}
      className={baseClasses}
      onClick={handleClick}
      data-testid={testId || `project-card-${project.id}`}
    >
      {/* Hero Image */}
      {showImage && project.imageUrl && (
        <div className='relative w-full h-48 mb-4 rounded-lg overflow-hidden'>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
      )}

      {/* Header with Service Badge */}
      <div className='flex items-start justify-between mb-3'>
        <div className='flex-1'>
          <h3
            className={`font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight ${titleClasses[variant]}`}
          >
            {project.title}
          </h3>

          {/* Client and Industry Info */}
          <div className='flex flex-wrap gap-2 mb-2'>
            {showClient && (
              <span className='text-sm font-medium text-gray-700'>
                {project.client}
              </span>
            )}
            {showIndustry && project.industryIds.length > 0 && (
              <span className='inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium'>
                {project.industryIds[0].charAt(0).toUpperCase() +
                  project.industryIds[0].slice(1)}
              </span>
            )}
            {showDuration && (
              <span className='text-sm text-gray-500'>
                {project.duration}
              </span>
            )}
          </div>
        </div>

        {/* Service Badge */}
        <span
          className={`inline-block text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 ml-2 ${serviceColorMap[serviceInfo as keyof typeof serviceColorMap] || 'bg-gray-100 text-gray-800'}`}
        >
          {serviceInfo
            ?.replace('-', ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
      </div>

      {/* Description */}
      <p className='text-gray-600 mb-4 leading-relaxed'>
        {project.shortDescription}
      </p>

      {/* Results */}
      {project.results.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.results
            .slice(0, maxResults)
            .map((result: string, idx: number) => (
              <span
                key={idx}
                className='inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium'
              >
                {result}
              </span>
            ))}
          {project.results.length > maxResults && (
            <span className='inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium'>
              +{project.results.length - maxResults} more
            </span>
          )}
        </div>
      )}

      {/* Technologies */}
      {showTechnologies && project.technologies.length > 0 && (
        <div className='mb-4'>
          <div className='flex flex-wrap gap-1'>
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className='inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium'
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className='inline-block bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded font-medium'>
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className='flex items-center text-blue-600 font-medium group-hover:text-blue-700'>
        Read Project
        <svg
          className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1'
          fill='currentColor'
          viewBox='0 0 20 20'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </Link>
  )
}
