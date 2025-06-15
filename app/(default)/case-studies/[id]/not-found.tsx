import Link from 'next/link'

export default function CaseStudyNotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center'>
        <div className='text-8xl font-bold text-gray-300 mb-4'>404</div>
        <h1 className='text-2xl font-bold text-gray-900 mb-4'>
          Case Study Not Found
        </h1>
        <p className='text-gray-600 mb-8'>
          The case study you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <div className='space-y-4'>
          <Link
            href='/case-studies'
            className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            Back to Case Studies
          </Link>
          <div>
            <Link
              href='/'
              className='text-blue-600 hover:text-blue-800 font-medium'
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
