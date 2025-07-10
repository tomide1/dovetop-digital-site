import React from 'react'
import Image from 'next/image'
import { TimelineEvent } from '@/data/about/timeline'

interface CompanyTimelineProps {
  timeline: TimelineEvent[]
}

export default function CompanyTimeline({ timeline }: CompanyTimelineProps) {
  return (
    <section
      className='bg-gray-50 py-16 md:py-24'
      role='region'
      aria-labelledby='company-timeline-title'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <h2
            id='company-timeline-title'
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'
          >
            Our Journey
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            From our humble beginnings to where we are today, discover the
            milestones that have shaped our company.
          </p>
        </div>

        <div className='max-w-4xl mx-auto' data-testid='timeline-container'>
          {timeline.map((event, index) => (
            <div
              key={`${event.year}-${index}`}
              className='relative flex items-start mb-8 md:mb-12'
              data-testid={`timeline-event-${index}`}
            >
              {/* Timeline connector line (except for last item) */}
              {index < timeline.length - 1 && (
                <div
                  className='absolute left-6 top-12 w-0.5 bg-blue-200'
                  style={{ height: 'calc(100% + 2rem)' }}
                  data-testid={`timeline-connector-${index}`}
                  aria-hidden='true'
                />
              )}

              {/* Year badge */}
              <div
                className='flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10'
                data-testid={`year-badge-${index}`}
              >
                {event.year.slice(-2)}
              </div>

              {/* Event content */}
              <div
                className='ml-6 bg-white rounded-lg shadow-lg p-6 flex-1'
                data-testid={`event-content-${index}`}
              >
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {event.title}
                  </h3>
                  <span className='text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full'>
                    {event.year}
                  </span>
                </div>

                <p className='text-gray-600 leading-relaxed'>
                  {event.description}
                </p>

                {event.image && (
                  <div className='mt-4'>
                    <Image
                      src={event.image}
                      alt={`${event.title} - ${event.year}`}
                      width={400}
                      height={192}
                      className='w-full h-48 object-cover rounded-lg'
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
