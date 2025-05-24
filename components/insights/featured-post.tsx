import { InsightPost } from '@/data/insights'
import Image from 'next/image'
import Link from 'next/link'

interface FeaturedPostProps {
  post: InsightPost
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const { title, slug, excerpt, coverImage, author, category, readTime, date } =
    post

  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/insights/${slug}`}
      className='block'
      aria-label={`Read featured post: ${title}`}
    >
      <article className='group relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-800 shadow-xl lg:grid lg:grid-cols-2'>
        {/* Featured badge */}
        <div className='absolute left-6 top-6 z-10 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-900'>
          Featured
        </div>

        {/* Content section */}
        <div className='relative flex flex-col justify-center p-6 text-white lg:p-10'>
          <div className='mb-2'>
            <span className='inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm'>
              {category}
            </span>
          </div>

          <h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-amber-300 md:text-4xl'>
            {title}
          </h2>

          {excerpt && (
            <p
              data-testid='featured-excerpt'
              className='mb-6 text-lg font-light leading-relaxed text-gray-100 md:pr-8'
            >
              {excerpt}
            </p>
          )}

          <div className='mt-auto flex items-center border-t border-white/20 pt-4'>
            <div className='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
              {author.image && (
                <Image
                  src={author.image}
                  alt={author.name}
                  width={40}
                  height={40}
                  className='h-full w-full object-cover'
                />
              )}
            </div>
            <div>
              <p className='font-medium text-white'>{author.name}</p>
              <div className='flex items-center text-sm text-gray-300'>
                <span>{formattedDate}</span>
                <span className='mx-2'>•</span>
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className='relative h-64 overflow-hidden lg:h-auto'>
          <div className='h-full'>
            <Image
              src={coverImage || '/images/insights/placeholder.svg'}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent lg:bg-gradient-to-l'></div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default FeaturedPost
