import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import {
  getServiceIndustries,
  getServiceCaseStudies,
} from '@/utils/industry-helpers'
import { Metadata } from 'next'
import CaseStudyCard from '@/components/case-studies/case-study-card'

interface ServicePageProps {
  params: {
    serviceId: string
  }
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.serviceId)

  if (!service) {
    return {
      title: 'Service Not Found | Dovetop Digital',
    }
  }

  return {
    title: `${service.title} | Dovetop Digital`,
    description: service.shortDescription,
    keywords: `${service.title.toLowerCase()}, digital solutions, ${service.id}`,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.serviceId)

  if (!service) {
    notFound()
  }

  const serviceIndustries = getServiceIndustries(service.id)
  const featuredCaseStudies = getServiceCaseStudies(service.id, 3)

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-blue-50 to-white pt-32 pb-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12'>
            {/* Breadcrumb */}
            <nav className='mb-8' aria-label='Breadcrumb'>
              <ol className='flex items-center justify-center space-x-2 text-sm text-gray-500'>
                <li>
                  <Link href='/' className='hover:text-blue-600'>
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href='/what-we-do' className='hover:text-blue-600'>
                    What We Do
                  </Link>
                </li>
                <li>/</li>
                <li className='text-gray-900 font-medium'>{service.title}</li>
              </ol>
            </nav>

            {/* Service Icon */}
            <div className='w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center'>
              {service.icon ? (
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className='w-12 h-12'
                />
              ) : (
                <div className='w-12 h-12 bg-blue-600 rounded-full'></div>
              )}
            </div>

            <h1 className='text-5xl md:text-6xl font-bold text-blue-600 mb-8'>
              {service.title}
            </h1>

            <p className='text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              {service.detailedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Benefits */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Key Benefits
              </h2>
              <ul className='space-y-4'>
                {service.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0'>
                      <svg
                        className='w-4 h-4 text-green-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <span className='text-gray-700 leading-relaxed'>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Our Process
              </h2>
              <div className='space-y-6'>
                {service.process?.steps.map((step, index) => (
                  <div key={index} className='flex items-start'>
                    <div className='w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-sm font-bold'>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                        {step.title}
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              What You&apos;ll Receive
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our comprehensive deliverables ensure you have everything needed
              for success.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {service.deliverables?.map((deliverable, index) => (
              <div key={index} className='bg-white rounded-xl p-6 shadow-md'>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  {deliverable}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      {serviceIndustries.length > 0 && (
        <section className='py-20 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Industries We Serve
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                See how {service.title} applies across different industries.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {serviceIndustries.map((item, index) => (
                <Link
                  key={index}
                  href={`/industries/${item.industry?.id}`}
                  className='block bg-gray-50 rounded-xl p-6 hover:bg-blue-50 hover:shadow-md transition-all duration-300'
                >
                  <h3 className='text-xl font-bold text-gray-900 mb-3 hover:text-blue-600'>
                    {item.industry?.name}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {item.application}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Featured Case Studies
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Real results from our {service.title} implementations.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  variant='compact'
                  maxResults={2}
                />
              ))}
            </div>

            <div className='text-center mt-12'>
              <Link
                href={`/case-studies?service=${service.id}`}
                className='text-lg font-medium text-blue-600 hover:text-blue-800'
              >
                View All {service.title} Case Studies &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className='py-20 bg-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Get Started with {service.title}?
          </h2>
          <p className='text-xl text-blue-100 mb-8 leading-relaxed'>
            Let&apos;s discuss how our {service.title} can transform your
            business and drive growth.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center btn text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-300'
          >
            Start Your Project
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
      </section>
    </main>
  )
}
