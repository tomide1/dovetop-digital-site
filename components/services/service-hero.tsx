import React from 'react'

interface ServiceHeroProps {
  title?: string
  subtitle?: string
}

export default function ServiceHero({
  title = 'Our Expertise',
  subtitle = 'At Dovetop Digital, our tailored solutions are designed to boost your efficiency, security, and competitive edge in the digital landscape because we transform your tech challenges into opportunities for growth and innovation.',
}: ServiceHeroProps) {
  return (
    <section className='relative bg-gradient-to-b from-gray-100 to-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1
              className='text-4xl md:text-5xl font-extrabold tracking-tight text-blue-600 mb-6'
              data-aos='fade-up'
            >
              {title}
            </h1>
            <p
              className='text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-10'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              {subtitle}
            </p>

            {/* Abstract graphic */}
            <div
              className='relative flex justify-center mb-12'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='flex flex-shrink-0 justify-center'>
                <div className='relative flex-1 flex items-center justify-center'>
                  <svg
                    className='absolute inset-0'
                    width='800'
                    height='400'
                    viewBox='0 0 800 400'
                    style={{ zIndex: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id='bg-gradient-01'
                        x1='50%'
                        y1='0%'
                        x2='50%'
                        y2='100%'
                      >
                        <stop offset='0%' stopColor='#5D5DFF'></stop>
                        <stop
                          offset='100%'
                          stopColor='#6B6AFF'
                          stopOpacity='0'
                        ></stop>
                      </linearGradient>
                    </defs>
                    <rect
                      width='800'
                      height='400'
                      fill='url(#bg-gradient-01)'
                      fillOpacity='.05'
                    ></rect>
                    <circle
                      cx='400'
                      cy='200'
                      r='150'
                      fill='url(#bg-gradient-01)'
                      fillOpacity='.025'
                    ></circle>
                    <circle
                      cx='400'
                      cy='200'
                      r='100'
                      fill='url(#bg-gradient-01)'
                      fillOpacity='.05'
                    ></circle>
                    <circle
                      cx='400'
                      cy='200'
                      r='50'
                      fill='url(#bg-gradient-01)'
                      fillOpacity='.1'
                    ></circle>
                  </svg>

                  <div className='relative rounded-full bg-gradient-to-tr from-blue-600 to-blue-800 shadow-lg w-24 h-24 flex items-center justify-center'>
                    <svg
                      className='w-12 h-12 fill-current text-white'
                      viewBox='0 0 48 48'
                    >
                      <path d='M34 24H24v10h10V24zM32 2H16L2 16v16h12V16h16V2z' />
                      <circle cx='38' cy='38' r='8' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
