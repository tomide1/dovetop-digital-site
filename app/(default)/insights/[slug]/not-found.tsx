import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Post Not Found
        </h1>
        <p className='text-lg text-gray-600 mb-8'>
          We couldn&apos;t find the insight post you&apos;re looking for. It may
          have been moved or deleted.
        </p>
        <Link
          href='/insights'
          className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Back to Insights
        </Link>
      </div>
    </div>
  )
}
