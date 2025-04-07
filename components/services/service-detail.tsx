import React from 'react'
import Image from 'next/image'
import { Service } from '@/data/services'
import { caseStudies, CaseStudy } from '@/data/case-studies'

interface ServiceDetailProps {
  service: Service
}

// Utility function to get featured case studies for a service
const getFeaturedCaseStudies = (serviceId: string): CaseStudy[] => {
  // Filter case studies by service ID and limit to 2
  return caseStudies
    .filter((study) => study.serviceId === serviceId)
    .slice(0, 2)
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const {
    id,
    title,
    detailedDescription,
    icon,
    benefits,
    process,
    deliverables,
  } = service

  // Get featured case studies for this service
  const featuredCaseStudies = getFeaturedCaseStudies(id)

  return (
    <div
      id={id}
      className='py-12 md:py-20 border-t border-gray-200 scroll-mt-24'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='grid md:grid-cols-12 gap-8 md:gap-12 items-start'>
          {/* Service info */}
          <div className='md:col-span-7 lg:col-span-8'>
            <div className='flex items-center mb-4'>
              <div className='w-14 h-14 rounded-full bg-blue-600 bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0'>
                {icon ? (
                  <Image src={icon} alt={title} width={32} height={32} />
                ) : (
                  <svg
                    className='w-6 h-6 fill-current text-blue-600'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z' />
                  </svg>
                )}
              </div>
              <h3 className='h3 mb-0'>{title}</h3>
            </div>

            <div className='text-lg text-gray-600 mb-8'>
              <p className='mb-8'>{detailedDescription}</p>
            </div>

            {/* Process section */}
            {process && process.steps && process.steps.length > 0 && (
              <div className='mb-8'>
                <h4 className='h4 mb-4'>Our Process</h4>
                <ol className='space-y-6'>
                  {process.steps.map((step, index) => (
                    <li key={index} className='flex'>
                      <div className='mr-4 flex-shrink-0'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold'>
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h5 className='font-bold mb-1'>{step.title}</h5>
                        <p className='text-gray-600'>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Service sidebar */}
          <div className='md:col-span-5 lg:col-span-4'>
            {/* Benefits */}
            <div className='bg-gray-50 rounded-lg p-6 mb-6'>
              <h4 className='h4 mb-4'>Benefits</h4>
              <ul className='space-y-3'>
                {benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start'>
                    <svg
                      className='w-4 h-4 text-green-600 mt-1 mr-3'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            {deliverables && deliverables.length > 0 && (
              <div className='bg-gray-50 rounded-lg p-6'>
                <h4 className='h4 mb-4'>Deliverables</h4>
                <ul className='space-y-3'>
                  {deliverables.map((deliverable, index) => (
                    <li key={index} className='flex items-start'>
                      <svg
                        className='w-4 h-4 text-blue-600 mt-1 mr-3'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Featured Case Studies - Moved out of sidebar into its own full-width section */}
        {featuredCaseStudies.length > 0 && (
          <div className='mt-16'>
            <div className='flex items-center justify-between mb-8'>
              <h4 className='h4 mb-0'>Featured Work</h4>
              <a
                href={`/case-studies?category=${id}`}
                className='text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center'
              >
                View all case studies
                <svg
                  className='w-4 h-4 ml-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {featuredCaseStudies.map((caseStudy, index) => (
                <a
                  key={index}
                  href={`/case-studies/${caseStudy.id}`}
                  className='group block overflow-hidden bg-white rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:-translate-y-1'
                >
                  <div className='relative overflow-hidden aspect-video'>
                    <Image
                      src={caseStudy.imageUrl}
                      alt={caseStudy.title}
                      fill
                      sizes='(max-width: 768px) 100vw, 50vw'
                      className='object-cover transition duration-500 ease-in-out group-hover:scale-105'
                    />
                    <span className='absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-sm'>
                      {caseStudy.client}
                    </span>
                  </div>

                  <div className='p-6'>
                    <h5 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-150'>
                      {caseStudy.title}
                    </h5>
                    <p className='text-gray-600 mb-4'>
                      {caseStudy.description}
                    </p>

                    {caseStudy.results && caseStudy.results.length > 0 && (
                      <div className='mb-4'>
                        <div className='flex flex-wrap gap-2'>
                          {caseStudy.results.slice(0, 2).map((result, idx) => (
                            <span
                              key={idx}
                              className='inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-sm font-medium'
                            >
                              {result}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className='flex items-center text-blue-600 text-sm font-medium'>
                      Read case study
                      <svg
                        className='w-4 h-4 ml-1 transition duration-150 ease-in-out group-hover:translate-x-1'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* If no case studies, show the standard button */}
        {featuredCaseStudies.length === 0 && (
          <div className='mt-16 text-center'>
            <a
              href={`/case-studies?category=${id}`}
              className='btn text-white bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center'
            >
              <svg
                className='w-4 h-4 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                />
              </svg>
              View Case Studies
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
