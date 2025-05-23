import Image from 'next/image'
import { InsightPost } from '@/data/insights'

interface PostHeaderProps {
  post: InsightPost
}

export default function PostHeader({ post }: PostHeaderProps) {
  const { title, date, author, category, readTime, coverImage } = post

  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className='mb-10'>
      <div className='mb-6'>
        <div className='relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-gray-100'>
          <Image
            src={coverImage || '/images/insights/placeholder.jpg'}
            alt={title}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 1200px'
            className='object-cover'
          />
        </div>
      </div>

      <div className='mb-3 flex items-center gap-2 text-sm text-gray-600'>
        <span className='inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
          {category}
        </span>
        <span>•</span>
        <span>{readTime} min read</span>
        <span>•</span>
        <time dateTime={date}>{formattedDate}</time>
      </div>

      <h1 className='mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl'>
        {title}
      </h1>

      <div className='flex items-center'>
        <div className='mr-3 h-12 w-12 overflow-hidden rounded-full bg-gray-200'>
          {author.image && (
            <Image
              src={author.image}
              alt={author.name}
              width={48}
              height={48}
              className='h-full w-full object-cover'
            />
          )}
        </div>
        <div>
          <p className='font-medium text-gray-900'>{author.name}</p>
          <p className='text-sm text-gray-600'>{author.title}</p>
        </div>
      </div>
    </header>
  )
}
