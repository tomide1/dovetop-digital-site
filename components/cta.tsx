import Image from 'next/image'
import Stripes from '@/public/images/stripes-dark.svg'
import CustomForm from '@/components/craco/custom-form'

export default function Cta() {
  return (
    <section className='relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Glow */}
          <div
            className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2'
            aria-hidden='true'
          >
            <div className='h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl' />
          </div>
          {/* Stripes illustration */}
          <div
            className='pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform'
            aria-hidden='true'
          >
            <Image
              className='max-w-none'
              src={Stripes}
              width={768}
              height={432}
              alt='Stripes'
            />
          </div>

          <h2 className='mb-8 text-center text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl'>
            Book a free consultation:
          </h2>

          {/* Two column layout with list and form */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
            {/* Left column with benefits list */}
            <div className='p-6'>
              <article>
                <h3 className='mb-4 flex items-center space-x-2 font-medium text-gray-200'>
                  <svg
                    className='fill-blue-500'
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                  >
                    <path d='M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z' />
                  </svg>
                  <span>Deep-dive into your current tech landscape</span>
                </h3>
                <h3 className='mb-4 flex items-center space-x-2 font-medium text-gray-200'>
                  <svg
                    className='fill-blue-500'
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                  >
                    <path d='M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z' />
                  </svg>
                  <span>Understand your teething problems</span>
                </h3>
                <h3 className='mb-4 flex items-center space-x-2 font-medium text-gray-200'>
                  <svg
                    className='fill-blue-500'
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                  >
                    <path d='M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z' />
                  </svg>
                  <span>Identify the areas that need improvement</span>
                </h3>
                <h3 className='mb-4 flex items-center space-x-2 font-medium text-gray-200'>
                  <svg
                    className='fill-blue-500'
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                  >
                    <path d='M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z' />
                  </svg>
                  <span>Recommend the best solution to scale 100%</span>
                </h3>
                <h3 className='mb-4 flex items-center space-x-2 font-medium text-gray-200'>
                  <svg
                    className='fill-blue-500'
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                  >
                    <path d='M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z' />
                  </svg>
                  <span>Develop a plan to implement it</span>
                </h3>
                <h3 className='mb-4 flex items-center space-x-2 font-medium text-gray-200'>
                  <svg
                    className='fill-blue-500'
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                  >
                    <path d='M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z' />
                  </svg>
                  <span>Highlight how to stay ahead of the curve</span>
                </h3>
              </article>
            </div>

            {/* Right column with form */}
            <div className='bg-gray-800/30 rounded-lg p-6 md:p-8'>
              <CustomForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
