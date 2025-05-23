import { InsightPost } from '@/data/insights'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  post: InsightPost
}

const PostCard = ({ post }: PostCardProps) => {
  const { title, slug, excerpt, coverImage, author, category, readTime, date } =
    post

  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const placeholderImage = '/images/insights/placeholder.jpg'
  const imageUrl = coverImage || placeholderImage

  return (
    <Link
      href={`/insights/${slug}`}
      className='block h-full'
      aria-label={`Read ${title}`}
    >
      <article className='group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
        <div className='block overflow-hidden'>
          <div className='aspect-w-16 aspect-h-9 relative h-48 w-full overflow-hidden bg-gray-100'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
        </div>

        <div className='flex flex-1 flex-col p-5'>
          <div className='mb-3 flex items-center text-sm text-gray-500'>
            <span className='inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
              {category}
            </span>
            <span className='mx-2'>•</span>
            <span>{readTime} min read</span>
          </div>

          <h3 className='mb-2 text-xl font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600'>
            {title}
          </h3>

          {excerpt && (
            <p
              data-testid='post-excerpt'
              className='mb-4 flex-grow text-base text-gray-600'
            >
              {excerpt}
            </p>
          )}

          <div className='mt-auto flex items-center border-t border-gray-100 pt-4'>
            <div className='flex-1'>
              <p className='font-medium text-gray-900'>{author.name}</p>
              <p className='text-sm text-gray-500'>{formattedDate}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
