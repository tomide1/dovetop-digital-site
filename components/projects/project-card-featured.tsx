'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/types/what-we-do'

export interface ProjectCardFeaturedProps {
  project: Project
}

export default function ProjectCardFeatured({ project }: ProjectCardFeaturedProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col'
    >
      {/* Image Section */}
      <div className='relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600'>
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className='object-cover opacity-90 group-hover:scale-110 transition-transform duration-500'
          />
        )}
        {/* Overlay gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
        
        {/* Industry badge */}
        {project.industryIds.length > 0 && (
          <div className='absolute top-4 right-4'>
            <span className='inline-block bg-white/90 backdrop-blur-sm text-gray-900 text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg'>
              {project.industryIds[0].charAt(0).toUpperCase() + project.industryIds[0].slice(1)}
            </span>
          </div>
        )}
        
        {/* Duration badge */}
        {/* <div className='absolute bottom-4 left-4'>
          <span className='inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-900 text-xs px-3 py-1.5 rounded-full font-medium shadow-lg'>
            <svg className='w-3.5 h-3.5 mr-1.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            {project.duration}
          </span>
        </div> */}
      </div>

      {/* Content Section */}
      <div className='p-6 flex-1 flex flex-col'>
        {/* Title */}
        <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2'>
          {project.title}
        </h3>

        {/* Description */}
        <p className='text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed'>
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className='inline-block bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-medium'
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className='inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium'>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer with Client */}
        {/* <div className='pt-4 border-t border-gray-100 mt-auto'>
          <span className='text-sm font-medium text-gray-500'>
            {project.client}
          </span>
        </div> */}
      </div>
    </Link>
  )
}
