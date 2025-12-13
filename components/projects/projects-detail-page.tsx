import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types/what-we-do'
import TechnologyBadge from '@/components/technology/technology-badge'
import { getIndustryDisplayName, getServiceDisplayName } from '@/utils/project-helpers'
import ProjectCard from './projects-card'
import PageIllustration from '@/components/page-illustration'

interface ProjectDetailPageProps {
  project: Project
  relatedProjects: Project[]
}

export default function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  return (
    <div className='min-h-screen bg-white'>
      {/* Breadcrumb Navigation */}
      <nav
        className='bg-gray-50 border-b border-gray-200'
        aria-label='Breadcrumb'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center py-4'>
            <ol className='flex items-center space-x-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-500 hover:text-gray-700 transition-colors'
                >
                  Home
                </Link>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-4 h-4 text-gray-400 mx-2'
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
                <Link
                  href='/projects'
                  className='text-gray-500 hover:text-gray-700 transition-colors'
                >
                  Projects
                </Link>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-4 h-4 text-gray-400 mx-2'
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
                <span className='text-gray-900 font-medium truncate max-w-xs'>
                  {project.title}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative bg-gray-900 text-white py-16 md:py-24'>
        <PageIllustration />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                {project.title}
              </h1>
              <p className='text-xl text-blue-100 mb-8 leading-relaxed'>
                {project.shortDescription}
              </p>

              {/* Meta Information */}
              {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-sm font-medium text-blue-200 mb-2'>
                    Client
                  </h3>
                  <p className='text-lg font-semibold'>{project.client}</p>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-blue-200 mb-2'>
                    Duration
                  </h3>
                  <p className='text-lg font-semibold'>{project.duration}</p>
                </div>
              </div> */}
            </div>

            {/* Hero Image */}
            {project.imageUrl && (
              <div className='relative'>
                <div className='aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20'>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className='object-cover opacity-90'
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-16 md:py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            {/* Services and Industries Tags */}
            <div className='mb-12 not-prose'>
              <div className='flex flex-wrap gap-6'>
                <div>
                  <h3 className='text-sm font-medium text-gray-600 mb-3'>
                    Services
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.serviceIds.map((serviceId) => (
                      <span
                        key={serviceId}
                        className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'
                      >
                        {getServiceDisplayName(serviceId)}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='text-sm font-medium text-gray-600 mb-3'>
                    Industries
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.industryIds.map((industryId) => (
                      <span
                        key={industryId}
                        className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'
                      >
                        {getIndustryDisplayName(industryId)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Project Overview
              </h2>
              <div className='text-gray-700 leading-relaxed whitespace-pre-line'>
                {project.detailedDescription}
              </div>
            </div>

            {/* Technologies Used */}
            {project.technologies.length > 0 && (
              <div className='mb-12 not-prose'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Technologies Used
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                  {project.technologies.map((techId) => (
                    <TechnologyBadge key={techId} id={techId} />
                  ))}
                </div>
              </div>
            )}

            {/* Results & Impact */}
            {project.results.length > 0 && (
              <div className='mb-12 not-prose'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Results & Impact
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className='flex items-start p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200'
                    >
                      <div className='flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4'>
                        <svg
                          className='w-5 h-5 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </div>
                      <p className='text-gray-800 font-medium leading-relaxed'>
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-gray-900 py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Ready to Start Your Own Success Story?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Let&apos;s discuss how we can help transform your business with our
            proven approach and cutting-edge solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200'
            >
              Start Your Project
              <svg
                className='w-5 h-5 ml-2'
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
            </Link>
            <Link
              href='/projects'
              className='inline-flex items-center px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200'
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className='bg-gray-50 py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Related Projects
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Explore more success stories from similar projects and
                industries
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {relatedProjects.map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                  variant='default'
                  showImage={true}
                  showClient={false}
                  showDuration={false}
                  showIndustry={true}
                  maxResults={2}
                  data-testid={`related-project-${relatedProject.id}`}
                />
              ))}
            </div>

            <div className='text-center mt-12'>
              <Link
                href='/projects'
                className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
              >
                View All Projects
                <svg
                  className='w-5 h-5 ml-2'
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
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}