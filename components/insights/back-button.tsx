import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function BackButton() {
  return (
    <div className='mb-8'>
      <Link
        href='/insights'
        className='inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600'
      >
        <ArrowLeftIcon className='mr-2 h-4 w-4' />
        Back to Insights
      </Link>
    </div>
  )
}
