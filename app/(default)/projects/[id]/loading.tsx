export default function ProductDetailLoading() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Breadcrumb skeleton */}
      <div className='bg-gray-50 border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center py-4'>
            <div className='flex items-center space-x-2'>
              <div className='h-4 bg-gray-200 rounded w-12 animate-pulse'></div>
              <div className='h-4 bg-gray-200 rounded w-1 animate-pulse'></div>
              <div className='h-4 bg-gray-200 rounded w-20 animate-pulse'></div>
              <div className='h-4 bg-gray-200 rounded w-1 animate-pulse'></div>
              <div className='h-4 bg-gray-200 rounded w-32 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-700 py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='h-12 md:h-16 bg-blue-400 rounded-lg mb-6 animate-pulse'></div>
              <div className='h-6 bg-blue-400 rounded mb-8 animate-pulse'></div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <div className='h-4 bg-blue-400 rounded mb-2 w-16 animate-pulse'></div>
                  <div className='h-6 bg-blue-400 rounded w-24 animate-pulse'></div>
                </div>
                <div>
                  <div className='h-4 bg-blue-400 rounded mb-2 w-16 animate-pulse'></div>
                  <div className='h-6 bg-blue-400 rounded w-20 animate-pulse'></div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='aspect-video rounded-xl bg-blue-400 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className='py-16 md:py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Tags skeleton */}
          <div className='mb-12'>
            <div className='flex flex-wrap gap-6'>
              <div>
                <div className='h-4 bg-gray-200 rounded mb-3 w-16 animate-pulse'></div>
                <div className='flex flex-wrap gap-2'>
                  <div className='h-6 bg-gray-200 rounded-full w-24 animate-pulse'></div>
                  <div className='h-6 bg-gray-200 rounded-full w-20 animate-pulse'></div>
                </div>
              </div>
              <div>
                <div className='h-4 bg-gray-200 rounded mb-3 w-20 animate-pulse'></div>
                <div className='flex flex-wrap gap-2'>
                  <div className='h-6 bg-gray-200 rounded-full w-20 animate-pulse'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content blocks skeleton */}
          <div className='space-y-12'>
            <div>
              <div className='h-8 bg-gray-200 rounded mb-6 w-48 animate-pulse'></div>
              <div className='space-y-3'>
                <div className='h-4 bg-gray-200 rounded animate-pulse'></div>
                <div className='h-4 bg-gray-200 rounded animate-pulse'></div>
                <div className='h-4 bg-gray-200 rounded w-3/4 animate-pulse'></div>
              </div>
            </div>

            <div>
              <div className='h-8 bg-gray-200 rounded mb-6 w-40 animate-pulse'></div>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className='h-12 bg-gray-200 rounded animate-pulse'
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <div className='h-8 bg-gray-200 rounded mb-6 w-36 animate-pulse'></div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='h-20 bg-gray-200 rounded-xl animate-pulse'></div>
                <div className='h-20 bg-gray-200 rounded-xl animate-pulse'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA skeleton */}
      <div className='bg-gray-900 py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='h-8 bg-gray-700 rounded mb-6 w-96 mx-auto animate-pulse'></div>
          <div className='h-6 bg-gray-700 rounded mb-8 w-2/3 mx-auto animate-pulse'></div>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <div className='h-12 bg-gray-700 rounded-lg w-40 animate-pulse'></div>
            <div className='h-12 bg-gray-700 rounded-lg w-48 animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
