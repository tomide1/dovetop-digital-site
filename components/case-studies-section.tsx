'use client'

import { insights } from '@/data/insights'
import Link from 'next/dist/client/link'
import Image from 'next/image'

export default function CaseStudiesSection() {
  return (
    <section className='relative bg-white py-16 md:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Section header */}
        <div className='mx-auto max-w-3xl text-center pb-12 md:pb-16'>
          <h2
            className='text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4'
            data-aos='fade-up'
          >
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
              Insights
            </span>
          </h2>
          <p className='text-xl text-gray-600' data-aos='fade-up' data-aos-delay={100}>
            Discover the latest research and real-world transformations that are shaping the future of business and technology.
          </p>
        </div>

        {/* Studies grid */}
        <div className='overflow-x-auto md:overflow-visible scroll-smooth -mx-4 px-4 md:mx-0 md:px-0'>
          <div className='flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 pb-4 md:pb-0'>
            <div className='flex-shrink-0 w-4 md:hidden'></div>
            {insights.slice(0, 4).map((study, index) => (
              <Link
              href={`/insights/${study.slug}`}
                key={study.id}
                className='group cursor-pointer flex-shrink-0 w-80 md:w-auto'
                data-aos='slide-right'
                data-aos-delay={index * 150}
                data-aos-duration='800'
              >
                <div className='bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                {/* Image */}
                <div className='relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden'>
                  <Image 
                    src={study.coverImage} 
                    alt={study.title}
                    width={400}
                    height={300}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-400/10'></div>
                  <div className='absolute top-4 left-4'>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded ${
                      study.category === 'Case Study' 
                        ? 'text-blue-700 bg-blue-100' 
                        : 'text-purple-700 bg-purple-100'
                    }`}>
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <div className='mb-2'>
                    <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>
                      {study.category}
                    </span>
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2'>
                    {study.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3'>
                    {study.excerpt}
                  </p>
                  <div className='flex items-center'>
                    <span className='text-blue-600 text-sm font-medium group-hover:text-blue-700'>
                      Expand →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}