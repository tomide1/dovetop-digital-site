import Image from 'next/image'
import { Author } from '@/data/insights'

interface AuthorBioProps {
  author: Author
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className='border-t border-gray-200 mt-16 pt-8'>
      <div className='flex items-center'>
        <div className='mr-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200'>
          {author.image && (
            <Image
              src={author.image}
              alt={author.name}
              width={64}
              height={64}
              className='h-full w-full object-cover'
            />
          )}
        </div>
        <div>
          <h3 className='text-lg font-semibold text-gray-900'>
            About the author
          </h3>
          <p className='font-medium text-gray-900'>{author.name}</p>
          <p className='text-gray-600'>{author.title}</p>
        </div>
      </div>
      <div className='mt-4 text-gray-700'>
        <p>
          {author.name} is a contributor to Dovetop Digital. They bring
          expertise in their field and share valuable insights with our
          community.
        </p>
      </div>
    </div>
  )
}
