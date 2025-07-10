import React from 'react'
import Image from 'next/image'
import { Partner } from '@/data/about/partners'

interface PartnerLogosStripProps {
  partners: Partner[]
}

export default function PartnerLogosStrip({
  partners,
}: PartnerLogosStripProps) {
  return (
    <section
      className='bg-gray-50 py-16 md:py-24'
      role='region'
      aria-labelledby='partners-title'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <h2
            id='partners-title'
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'
          >
            Our Partners & Certifications
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We&apos;re proud to partner with industry leaders and maintain
            certifications that ensure the highest standards of service.
          </p>
        </div>

        <div
          className='flex flex-wrap justify-center items-center gap-8 md:gap-12'
          data-testid='partners-container'
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className='grayscale hover:grayscale-0 transition-all duration-300'
              data-testid={`partner-logo-${index}`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={64}
                className='h-12 md:h-16 w-auto object-contain'
                priority={index < 3} // Prioritize first 3 logos
              />
            </div>
          ))}
        </div>

        {partners.length === 0 && (
          <div className='text-center text-gray-500'>
            <p>Partner logos coming soon...</p>
          </div>
        )}
      </div>
    </section>
  )
}
