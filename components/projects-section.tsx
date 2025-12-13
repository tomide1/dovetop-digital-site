'use client'

import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCardFeatured from '@/components/projects/project-card-featured'

export default function ProjectsSection() {

  return (
    <section className='relative bg-gray-50 py-16 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2
              className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'
            >
              Our{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                Projects
              </span>
            </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore our portfolio of successful digital transformation projects
            that drive meaningful business outcomes.
          </p>
        </div>

        {/* Projects Scroll Container */}
        <div className='relative mb-12'>
          <div className='flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide' id='projects-scroll'>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className='flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start'
                data-aos='fade-up'
                data-aos-delay={Math.min(index, 3) * 100}
                data-aos-duration='600'
              >
                <ProjectCardFeatured project={project} />
              </div>
            ))}
          </div>
          {/* Scroll Arrow Indicator */}
          {projects.length > 4 && (
            <div className='absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block'>
              <div className='bg-gradient-to-l from-gray-50 via-gray-50 to-transparent w-24 h-full absolute right-0 top-0' />
              <div className='relative z-10 bg-blue-600 text-white rounded-full p-3 shadow-lg animate-pulse'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* View All Link */}
        <div className='text-center' data-aos='fade-up' data-aos-delay='400'>
          <Link
            href='/projects'
            className='inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200'
          >
            View All Projects
            <svg
              className='w-5 h-5 ml-2'
              fill='currentColor'
              viewBox='0 0 20 20'
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
  )
}
