'use client'
import { useState } from 'react'
import { IndustryOpportunities } from '@/types/what-we-do'

interface IndustryOpportunitiesAccordionProps {
  opportunities: IndustryOpportunities
}

export default function IndustryOpportunitiesAccordion({ opportunities }: IndustryOpportunitiesAccordionProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  return (
    <section className='py-20 bg-gradient-to-b from-gray-800 to-gray-900'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <h2 className='text-3xl font-bold text-white mb-4 text-center'>
          {opportunities.sectionTitle}
        </h2>
        <div className='h-1 w-24 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-12' />
        <div className='space-y-4'>
          {opportunities.items.map((item, index) => (
            <div key={index} className='border border-gray-700 rounded-lg overflow-hidden'>
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className='w-full px-6 py-5 text-left bg-gray-800 hover:bg-gray-750 transition-colors flex justify-between items-center'
              >
                <h3 className='text-xl font-bold text-white'>{item.title}</h3>
                <svg
                  className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${
                    openAccordion === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className='px-6 py-5 bg-gray-850 border-t border-gray-700'>
                  <p className='text-gray-300 mb-4 leading-relaxed'>{item.description}</p>
                  <ul className='space-y-3 mb-4'>
                    {item.details.map((detail, idx) => (
                      <li key={idx} className='text-gray-300 leading-relaxed pl-4 border-l-2 border-blue-400'>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {item.example && (
                    <div className='bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded'>
                      <p className='text-sm font-semibold text-blue-300 mb-1'>Example:</p>
                      <p className='text-gray-300 leading-relaxed'>{item.example}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
