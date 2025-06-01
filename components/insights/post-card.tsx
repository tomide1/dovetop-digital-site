import { InsightPost } from '@/data/insights'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  post: InsightPost
  /** Card variant - 'default' shows full details, 'compact' shows minimal details */
  variant?: 'default' | 'compact'
  /** Override to hide excerpt even in default variant */
  showExcerpt?: boolean
  /** Override to hide author info even in default variant */
  showAuthor?: boolean
  /** Override to hide date even in default variant */
  showDate?: boolean
}

/**
 * Flexible post card component that can be used for main post listings and related posts
 */
const PostCard = ({
  post,
  variant = 'default',
  showExcerpt,
  showAuthor,
  showDate,
}: PostCardProps) => {
  const { title, slug, excerpt, coverImage, author, category, readTime, date } =
    post

  // Determine what to show based on variant and explicit props
  const isCompact = variant === 'compact'
  const displayExcerpt = showExcerpt ?? (!isCompact && excerpt)
  const displayAuthor = showAuthor ?? !isCompact
  const displayDate = showDate ?? !isCompact

  // Format date for display if needed
  const formattedDate = displayDate
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  const placeholderImage = '/images/insights/placeholder.svg'
  const imageUrl = coverImage || placeholderImage

  // Adjust styling based on variant
  const cardPadding = isCompact ? 'p-4' : 'p-5'
  const titleSize = isCompact ? 'text-lg' : 'text-xl'
  const metadataSpacing = isCompact ? 'mb-2' : 'mb-3'

  return (
    <Link
      href={`/insights/${slug}`}
      className='block h-full'
      aria-label={`Read ${isCompact ? 'related post: ' : ''}${title}`}
    >
      <article className='group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
        <div className='block overflow-hidden'>
          <div className='aspect-w-16 aspect-h-9 relative h-48 w-full overflow-hidden bg-gray-100'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes={
                isCompact
                  ? '(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px'
                  : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              }
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
        </div>

        <div className={`flex flex-1 flex-col ${cardPadding}`}>
          <div
            className={`flex items-center text-sm text-gray-500 ${metadataSpacing}`}
          >
            <span className='inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
              {category}
            </span>
            <span className='mx-2'>•</span>
            <span>{readTime} min read</span>
          </div>

          <h3
            className={`${isCompact ? 'mb-0' : 'mb-2'} ${titleSize} font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600`}
          >
            {title}
          </h3>

          {displayExcerpt && (
            <p
              data-testid='post-excerpt'
              className='mb-4 flex-grow text-base text-gray-600'
            >
              {excerpt}
            </p>
          )}

          {(displayAuthor || displayDate) && (
            <div className='mt-auto flex items-center border-t border-gray-100 pt-4'>
              <div className='flex-1'>
                {displayAuthor && (
                  <p className='font-medium text-gray-900'>{author.name}</p>
                )}
                {displayDate && (
                  <p className='text-sm text-gray-500'>{formattedDate}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}

export default PostCard
