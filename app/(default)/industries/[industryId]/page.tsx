import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { industries } from '@/data/industries'
import { getIndustryDetails, getIndustryIcon } from '@/utils/industry-helpers'
import { Metadata } from 'next'
import { INDUSTRY_IDS, IndustryId } from '@/types/what-we-do'
// import { ProjectCard } from '@/components/projects/index'
import ProjectCardFeatured from '@/components/projects/project-card-featured'
import IndustryOpportunitiesAccordion from '@/components/industry-opportunities-accordion'

// Helper function to determine if icon is a valid image URL
const isValidImageUrl = (icon: string): boolean => {
  return (
    icon.startsWith('/') ||
    icon.startsWith('http://') ||
    icon.startsWith('https://')
  )
}

// Type guard to check if string is a valid IndustryId
const isValidIndustryId = (id: string): id is IndustryId => {
  return INDUSTRY_IDS.includes(id as IndustryId)
}

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
  // Validate that params.industryId is a valid IndustryId
  if (!isValidIndustryId(params.industryId)) {
    notFound()
  }

  const industryDetails = getIndustryDetails(params.industryId)

  if (!industryDetails) {
    notFound()
  }

  // const { industry, applications, projects } = industryDetails
  const { industry, projects } = industryDetails
  const icon = getIndustryIcon(industry.id)

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
                <li className='text-white font-medium'>{industry.name}</li>
              </ol>
            </nav>

            {/* Industry Icon */}
            <div className='w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm'>
              {industry.icon && isValidImageUrl(industry.icon) ? (
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className='w-12 h-12'
                />
              ) : (
                <span className='text-5xl'>{industry.icon || icon}</span>
              )}
            </div>

            <h1 className='text-5xl md:text-6xl font-bold text-white mb-8'>
              {industry.name}
            </h1>

            <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      {industry.summary && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6'>
            {/* <h2 className='text-3xl font-bold text-gray-900 mb-6' data-aos='fade-up'>
              Summary
            </h2> */}
            <p className='text-lg text-gray-700 leading-relaxed' data-aos='fade-up' data-aos-delay='100'>
              {industry.summary}
            </p>
          </div>
        </section>
      )}

      {/* Industry Stats Section */}
      {industry.stats && industry.stats.length > 0 && (
        <section className='py-20 bg-gray-900'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-white mb-12 text-center' data-aos='fade-up'>
              {industry.name.toUpperCase()} NOW
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {industry.stats.map((stat, index) => (
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

      {/* Revenue Projection Section */}
      {industry.revenue && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 text-center' data-aos='fade-up'>
              {industry.revenue.sectionTitle}
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-12' data-aos='fade-up' data-aos-delay='100' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {industry.revenue.cards.map((card, index) => (
                <div
                  key={index}
                  className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    {card.title}
                  </h3>
                  <p className='text-gray-700 leading-relaxed text-sm'>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Opportunities Section */}
      {industry.opportunities && (
        <IndustryOpportunitiesAccordion opportunities={industry.opportunities} />
      )}

      {/* Main Content - Services for this industry */}
      {/* {applications.length > 0 && (
        <section className='py-20 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4' data-aos='fade-up'>
                Our Solutions for the {industry.name} Sector
              </h2>
              <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-6' data-aos='fade-up' data-aos-delay='100' />
              <p className='text-xl text-gray-600 max-w-3xl mx-auto' data-aos='fade-up' data-aos-delay='200'>
                Discover how our services are tailored to address the unique
                challenges and opportunities in {industry.name.toLowerCase()}.
              </p>
            </div>
            <div className='grid lg:grid-cols-1 gap-8'>
              {applications.map((app, index) => (
                <div
                  key={app.service?.id}
                  className='bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all duration-300'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    <Link
                      href={`/services/${app.service?.id}`}
                      className='hover:text-blue-600 transition-colors'
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
      )} */}

      {/* Projects */}
      {projects.length > 0 && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4' data-aos='fade-up'>
                Our Solutions
              </h2>
              <div className='h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-6' data-aos='fade-up' data-aos-delay='100' />
              <p className='text-xl text-gray-600 max-w-3xl mx-auto' data-aos='fade-up' data-aos-delay='200'>
                Real-world examples of our impact in the{' '}
                {industry.name.toLowerCase()} sector.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {projects.map((project, index) => (
                <div key={project.id} data-aos='fade-up' data-aos-delay={index * 100}>
                  <ProjectCardFeatured project={project} />
                </div>
              ))}
            </div>
            <div className='text-center mt-12' data-aos='fade-up'>
              <Link
                href={`/projects?industry=${industry.id}`}
                className='inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors'
              >
                View All {industry.name} Projects
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
