export default function ProjectsLoading() {
  return (
    <div className='min-h-screen'>
      {/* Hero skeleton */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-700 py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='h-12 md:h-16 bg-blue-400 rounded-lg mb-6 animate-pulse'></div>
            <div className='h-6 bg-blue-400 rounded mb-8 max-w-3xl mx-auto animate-pulse'></div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-12'>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className='text-center'>
                  <div className='h-10 bg-blue-400 rounded mb-2 animate-pulse'></div>
                  <div className='h-4 bg-blue-400 rounded animate-pulse'></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters skeleton */}
      <div className='bg-white border-b border-gray-200 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-6'>
            <div className='h-12 bg-gray-200 rounded-lg animate-pulse'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6'>
              <div className='h-10 bg-gray-200 rounded animate-pulse'></div>
              <div className='h-10 bg-gray-200 rounded animate-pulse'></div>
              <div className='h-10 bg-gray-200 rounded animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid skeleton */}
      <div className='bg-gray-50 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 animate-pulse'
              >
                <div className='h-6 bg-gray-200 rounded mb-4'></div>
                <div className='h-4 bg-gray-200 rounded mb-2'></div>
                <div className='h-4 bg-gray-200 rounded mb-4 w-3/4'></div>
                <div className='flex gap-2 mb-4'>
                  <div className='h-6 bg-gray-200 rounded w-20'></div>
                  <div className='h-6 bg-gray-200 rounded w-24'></div>
                </div>
                <div className='h-4 bg-gray-200 rounded w-32'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
