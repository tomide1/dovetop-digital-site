import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import {
  // getServiceIndustries,
  // getServiceCaseStudies,
  getServiceInfoIndustries,
} from '@/utils/industry-helpers'
import { Metadata } from 'next'
// import CaseStudyCard from '@/components/case-studies/case-study-card'

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

  const serviceIndustries = getServiceInfoIndustries(service.id)
  // const featuredCaseStudies = getServiceCaseStudies(service.id, 3)

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gray-900 pt-32 pb-20'>
        <div className='absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none' aria-hidden='true' />
        <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
          <div className='text-center mb-12'>
            {/* Breadcrumb */}
            <nav className='mb-8' aria-label='Breadcrumb'>
              <ol className='flex items-center justify-center space-x-2 text-sm text-gray-400'>
                <li>
                  <Link href='/' className='hover:text-blue-400'>
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href='/what-we-do' className='hover:text-blue-400'>
                    What We Do
                  </Link>
                </li>
                <li>/</li>
                <li className='text-white font-medium'>{service.title}</li>
              </ol>
            </nav>

            {/* Service Icon */}
            <div className='w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm'>
              {service.icon ? (
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className='w-12 h-12 brightness-0 invert'
                />
              ) : (
                <div className='w-12 h-12 bg-white rounded-full'></div>
              )}
            </div>

            <h1 className='text-5xl md:text-6xl font-bold text-white mb-8'>
              {service.title}
            </h1>

            <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
              {service.detailedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Benefits */}
            <div data-aos='fade-up'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Key Benefits
              </h2>
              <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-8' />
              <ul className='space-y-4'>
                {service.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start' data-aos='fade-up' data-aos-delay={index * 50}>
                    <div className='w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0'>
                      <svg
                        className='w-4 h-4 text-teal-600'
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
            <div data-aos='fade-up' data-aos-delay='100'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Our Process
              </h2>
              <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-8' />
              <div className='space-y-6'>
                {service.process?.steps.map((step, index) => (
                  <div key={index} className='flex items-start' data-aos='fade-up' data-aos-delay={100 + index * 50}>
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

      {/* Today Section */}
      {service.todaySection && (
        <section className='py-20 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {service.todaySection.title}
            </h2>
            <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-8' />
            <p className='text-lg text-gray-700 leading-relaxed mb-8'>
              {service.todaySection.description}
            </p>
            <div className='mb-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Today&apos;s focus:
              </h3>
              <ul className='space-y-3'>
                {service.todaySection.focus.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0' />
                    <span className='text-gray-700 leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className='text-lg font-semibold text-gray-900 mt-6'>
              {service.todaySection.conclusion}
            </p>
          </div>
        </section>
      )}

      {/* As a Service Section */}
      {service.asAService && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {service.asAService.title}
            </h2>
            <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-8' />
            {service.asAService.description && (
              <p className='text-lg text-gray-700 leading-relaxed mb-8'>
                {service.asAService.description}
              </p>
            )}
            {service.asAService.enables && (
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  This model enables organizations to:
                </h3>
                <ul className='grid md:grid-cols-2 gap-4'>
                  {service.asAService.enables.map((item, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0'>
                        <svg
                          className='w-4 h-4 text-teal-600'
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
                      <span className='text-gray-700 leading-relaxed'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {service.asAService.features && (
              <ul className='space-y-3'>
                {service.asAService.features.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0' />
                    <span className='text-gray-700 leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Services/Capabilities Section */}
      {(service.services || service.capabilities) && (
        <section className='py-20 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4' data-aos='fade-up'>
              {service.services ? `Our ${service.title} Services` : `${service.title} Capabilities`}
            </h2>
            <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-12' data-aos='fade-up' data-aos-delay='100' />
            
            {service.services && (
              <div className='space-y-8'>
                {service.services.map((item, index) => (
                  <div key={index} className='bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all' data-aos='fade-up' data-aos-delay={index * 100}>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                      {item.title}
                    </h3>
                    <p className='text-gray-700 leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {service.capabilities && (
              <div className='grid md:grid-cols-2 gap-8'>
                {service.capabilities.map((capability, index) => (
                  <div key={index} className='bg-gray-50 rounded-xl p-6' data-aos='fade-up' data-aos-delay={index * 100}>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>
                      {capability.title}
                    </h3>
                    <ul className='space-y-2'>
                      {capability.items.map((item, idx) => (
                        <li key={idx} className='flex items-start'>
                          <div className='w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0' />
                          <span className='text-gray-700 leading-relaxed text-sm'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Stats Section */}
      {service.stats && service.stats.length > 0 && (
        <section className='py-20 bg-gray-900'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-white mb-12 text-center' data-aos='fade-up'>
              {service.title.toUpperCase()} BY THE NUMBERS
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {service.stats.map((stat, index) => (
                <div key={index} data-aos='fade-up' data-aos-delay={index * 100}>
                  <div className='h-1 w-16 bg-teal-400 mb-6' />
                  <div className='text-5xl font-bold text-blue-400 mb-4'>
                    {stat.value}
                  </div>
                  <p className='text-gray-300 leading-relaxed text-sm'>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Matters Now / Shaping Now Section */}
      {(service.whyMattersNow || service.shapingNow) && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {service.whyMattersNow ? `Why ${service.title} Matters Now` : `What's Shaping ${service.title} Now`}
            </h2>
            <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-8' />
            <div className='grid md:grid-cols-2 gap-6'>
              {(service.whyMattersNow || service.shapingNow)?.map((item, index) => (
                <div key={index} className='flex items-start'>
                  <div className='w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0' />
                  <span className='text-gray-700 leading-relaxed'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {service.useCases && service.useCases.length > 0 && (
        <section className='py-20 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4' data-aos='fade-up'>
              High-Impact Use Cases
            </h2>
            <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-12' data-aos='fade-up' data-aos-delay='100' />
            <div className='grid md:grid-cols-2 gap-6'>
              {service.useCases.map((useCase, index) => (
                <div key={index} className='bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all' data-aos='fade-up' data-aos-delay={index * 100}>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {useCase.title}
                  </h3>
                  <p className='text-blue-600 font-semibold'>{useCase.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Metrics Section */}
      {service.successMetrics && service.successMetrics.length > 0 && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              How Success Is Measured
            </h2>
            <div className='h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mb-8' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {service.successMetrics.map((metric, index) => (
                <div key={index} className='flex items-start'>
                  <div className='w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0'>
                    <svg
                      className='w-4 h-4 text-teal-600'
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
                  <span className='text-gray-700 leading-relaxed'>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              What You&apos;ll Receive
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-6' />
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our comprehensive deliverables ensure you have everything needed
              for success.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {service.deliverables?.map((deliverable, index) => (
              <div key={index} className='bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all'>
                <h3 className='text-lg font-semibold text-white'>
                  {deliverable}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {service.whyChooseUs && service.whyChooseUs.length > 0 && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 text-center' data-aos='fade-up'>
              Why Choose Dovetop Digital
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-12' data-aos='fade-up' data-aos-delay='100' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {service.whyChooseUs.map((reason, index) => (
                <div key={index} className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all' data-aos='fade-up' data-aos-delay={index * 100}>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0'>
                      <svg
                        className='w-4 h-4 text-blue-600'
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
                    <span className='text-gray-700 leading-relaxed text-sm'>{reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries */}
      {serviceIndustries.length > 0 && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4' data-aos='fade-up'>
                Industries We Serve
              </h2>
              <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-6' data-aos='fade-up' data-aos-delay='100' />
              <p className='text-xl text-gray-600 max-w-3xl mx-auto' data-aos='fade-up' data-aos-delay='200'>
                See how {service.title} applies across different industries.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {serviceIndustries.map((item, index) => (
                <Link
                  key={index}
                  href={`/industries/${item.industry?.id}`}
                  className='block bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <h3 className='text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors'>
                    {item.industry?.name}
                  </h3>
                  <p className='text-gray-700 leading-relaxed text-sm'>
                    {item.application}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {/* {featuredCaseStudies.length > 0 && (
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
      )} */}

      {/* CTA Section */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Get Started with {service.title}?
          </h2>
          <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
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
