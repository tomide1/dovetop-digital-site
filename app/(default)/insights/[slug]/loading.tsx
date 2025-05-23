export default function Loading() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='animate-pulse'>
        {/* Back button skeleton */}
        <div className='w-24 h-10 bg-gray-200 rounded mb-8'></div>

        {/* Hero image skeleton */}
        <div className='w-full h-72 bg-gray-200 rounded-lg mb-8'></div>

        {/* Title skeleton */}
        <div className='w-3/4 h-12 bg-gray-200 rounded mb-4'></div>

        {/* Meta info skeleton */}
        <div className='flex gap-4 mb-8'>
          <div className='w-32 h-6 bg-gray-200 rounded'></div>
          <div className='w-24 h-6 bg-gray-200 rounded'></div>
        </div>

        {/* Content skeleton */}
        <div className='space-y-4 mb-12'>
          <div className='w-full h-6 bg-gray-200 rounded'></div>
          <div className='w-full h-6 bg-gray-200 rounded'></div>
          <div className='w-5/6 h-6 bg-gray-200 rounded'></div>
          <div className='w-full h-6 bg-gray-200 rounded'></div>
          <div className='w-4/5 h-6 bg-gray-200 rounded'></div>
        </div>

        {/* Author bio skeleton */}
        <div className='border-t border-gray-200 pt-8 mt-12'>
          <div className='flex items-center'>
            <div className='w-16 h-16 bg-gray-200 rounded-full mr-4'></div>
            <div>
              <div className='w-40 h-6 bg-gray-200 rounded mb-2'></div>
              <div className='w-64 h-4 bg-gray-200 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
