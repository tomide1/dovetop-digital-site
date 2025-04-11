'use client'

import Link from 'next/link'

function FeaturesBlocks() {
  return (
    <section className='relative' id='features'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none bg-white'
        aria-hidden='true'
      ></div>
      <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pb-12 md:pb-20 pt-36 md:pt-40'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2
              className='text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'
            >
              Our{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
                Expertise
              </span>
            </h2>
            <p className='text-xl text-gray-600'>
              At Dovetop Digital, our tailored solutions are designed to boost
              your efficiency, security, and competitive edge in the digital
              landscape because we transform your tech challenges into
              opportunities for growth and innovation.
            </p>
          </div>

          {/* Items */}
          <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 items-start md:max-w-2xl lg:max-w-none'>
            {/* 1st item */}
            <Link
              href='/services#cloud-solutions'
              className='group relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-300'>
                <svg
                  className='w-5 h-5 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </div>
              <svg
                className='w-16 h-16 p-1 -mt-1 mb-2'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    style={{ fill: '#F05653' }}
                    className='text-blue-600'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeWidth='2' transform='translate(19.429 20.571)'>
                    <circle
                      className='stroke-current text-white'
                      strokeLinecap='square'
                      cx='12.571'
                      cy='12.571'
                      r='1.143'
                    />
                    <path
                      className='stroke-current text-white'
                      d='M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696'
                    />
                    <path
                      style={{ color: '#1CA9A7' }}
                      className='stroke-current'
                      d='M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835'
                    />
                  </g>
                </g>
              </svg>
              <h4 className='text-xl font-bold leading-snug tracking-tight mb-1 group-hover:text-blue-600'>
                Cloud Solutions
              </h4>
              <p className='text-gray-600 text-center'>
                We build modern, robust, and scalable solutions in the cloud for
                all your business needs. Whether greenfield or brownfield, we
                have the expertise to deliver results
              </p>
            </Link>

            {/* 2nd item */}
            <Link
              href='/services#user-centered-design'
              className='group relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-300'>
                <svg
                  className='w-5 h-5 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </div>
              <svg
                className='w-16 h-16 p-1 -mt-1 mb-2'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    style={{ fill: '#F05653' }}
                    className='text-blue-600'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeLinecap='square' strokeWidth='2'>
                    <path
                      style={{ color: '#1CA9A7' }}
                      className='stroke-current'
                      d='M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207'
                    />
                    <path
                      className='stroke-current text-white'
                      d='M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285'
                    />
                  </g>
                </g>
              </svg>

              <h4 className='text-xl font-bold leading-snug tracking-tight mb-1 group-hover:text-blue-600'>
                User-Centered Design
              </h4>
              <p className='text-gray-600 text-center'>
                The needs of your Users always comes first, we can help you
                chart the course towards running a ship that prioritises your
                user's needs and experience
              </p>
            </Link>

            {/* 3rd item */}
            <Link
              href='/services#data-analytics'
              className='group relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-300'>
                <svg
                  className='w-5 h-5 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </div>
              <svg
                className='w-16 h-16 p-1 -mt-1 mb-2'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    style={{ fill: '#F05653' }}
                    className='text-blue-600'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeWidth='2'>
                    <path
                      style={{ color: '#1CA9A7' }}
                      className='stroke-current'
                      d='M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285'
                    />
                    <path
                      className='stroke-current text-white'
                      d='M20.571 37.714h5.715L36.57 26.286h8'
                    />
                    <path
                      style={{ color: '#1CA9A7' }}
                      className='stroke-current'
                      strokeLinecap='square'
                      d='M41.143 34.286l3.428 3.428-3.428 3.429'
                    />
                    <path
                      className='stroke-current text-white'
                      strokeLinecap='square'
                      d='M41.143 29.714l3.428-3.428-3.428-3.429'
                    />
                  </g>
                </g>
              </svg>
              <h4 className='text-xl font-bold leading-snug tracking-tight mb-1 group-hover:text-blue-600'>
                Data Analytics, Engineering & ML
              </h4>
              <p className='text-gray-600 text-center'>
                Making Data driven decisions can easily take your SME to achieve
                your scaling goals. No matter your data landscape, we can help
                you achieve this and your other Data needs e.g cleansing, ETL
                processes, ML models
              </p>
              <div className='mt-4 text-blue-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Learn more
                <svg
                  className='w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  ></path>
                </svg>
              </div>
            </Link>

            {/* 4th item */}
            <Link
              href='/services#security-governance'
              className='group relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-300'>
                <svg
                  className='w-5 h-5 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </div>
              <svg
                className='w-16 h-16 p-1 -mt-1 mb-2'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    style={{ fill: '#F05653' }}
                    className='text-blue-600'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeLinecap='square' strokeWidth='2'>
                    <path
                      className='stroke-current text-white'
                      d='M20.571 20.571h13.714v17.143H20.571z'
                    />
                    <path
                      style={{ color: '#1CA9A7' }}
                      className='stroke-current'
                      d='M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58'
                    />
                  </g>
                </g>
              </svg>

              <h4 className='text-xl font-bold leading-snug tracking-tight mb-1 group-hover:text-blue-600'>
                Security & Governance
              </h4>
              <p className='text-gray-600 text-center'>
                With years of experience in regulated industries such as
                Banking, Health & Public Safety e.t.c., we understand your
                security and governance requirements and can help you stay in
                line with the standards
              </p>
              <div className='mt-4 text-blue-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Learn more
                <svg
                  className='w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  ></path>
                </svg>
              </div>
            </Link>

            {/* 5th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect style={{fill:"#F05653"}} className="text-blue-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>  
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Design Phase</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}

            {/* 6th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect style={{fill:"#F05653", }} className="text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Develop & Launch</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBlocks
