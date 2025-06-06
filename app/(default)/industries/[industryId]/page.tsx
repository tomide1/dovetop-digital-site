import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { industries } from '@/data/industries'
import { getIndustryDetails, getIndustryIcon } from '@/utils/industry-helpers'
import { Metadata } from 'next'

interface IndustryPageProps {
  params: {
    industryId: string
  }
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const industry = industries.find((i) => i.id === params.industryId)

  if (!industry) {
    return {
      title: 'Industry Not Found | Dovetop Digital',
    }
  }

  return {
    title: `${industry.name} Solutions | Dovetop Digital`,
    description: industry.description,
    keywords: `${industry.name.toLowerCase()}, digital solutions, technology solutions, ${
      industry.id
    }`,
  }
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    industryId: industry.id,
  }))
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industryDetails = getIndustryDetails(params.industryId)

  if (!industryDetails) {
    notFound()
  }

  const { industry, applications, caseStudies } = industryDetails
  const icon = getIndustryIcon(industry.id)

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
                <li className='text-gray-900 font-medium'>{industry.name}</li>
              </ol>
            </nav>

            {/* Industry Icon */}
            <div className='w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center'>
              {industry.icon ? (
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className='w-12 h-12'
                />
              ) : (
                <span className='text-5xl'>{icon}</span>
              )}
            </div>

            <h1 className='text-5xl md:text-6xl font-bold text-blue-600 mb-8'>
              {industry.name}
            </h1>

            <p className='text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Services for this industry */}
      {applications.length > 0 && (
        <section className='py-20 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Our Solutions for the {industry.name} Sector
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Discover how our services are tailored to address the unique
                challenges and opportunities in {industry.name.toLowerCase()}.
              </p>
            </div>
            <div className='grid lg:grid-cols-1 gap-12'>
              {applications.map((app) => (
                <div
                  key={app.service?.id}
                  className='bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-md'
                >
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    <Link
                      href={`/services/${app.service?.id}`}
                      className='hover:text-blue-600'
                    >
                      {app.service?.title}
                    </Link>
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    {app.applicationText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                {industry.name} Case Studies
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Real-world examples of our impact in the{' '}
                {industry.name.toLowerCase()} sector.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.id}
                  href={`/case-studies/${caseStudy.id}`}
                  className='block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300'
                >
                  <h3 className='text-xl font-bold text-gray-900 mb-3 hover:text-blue-600'>
                    {caseStudy.title}
                  </h3>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {caseStudy.shortDescription}
                  </p>
                  <ul className='space-y-2'>
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className='flex items-start text-sm'>
                        <svg
                          className='w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
            <div className='text-center mt-12'>
              <Link
                href={`/case-studies?industry=${industry.id}`}
                className='text-lg font-medium text-blue-600 hover:text-blue-800'
              >
                View All {industry.name} Case Studies &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
