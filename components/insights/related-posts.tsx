import { InsightPost, insights } from '@/data/insights'
import Image from 'next/image'
import Link from 'next/link'

interface RelatedPostsProps {
  currentPostId: string
  category: string
}

export default function RelatedPosts({
  currentPostId,
  category,
}: RelatedPostsProps) {
  // Get related posts (same category, excluding current post)
  const relatedPosts = insights
    .filter((post) => post.category === category && post.id !== currentPostId)
    .slice(0, 3) // Limit to 3 related posts

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className='mt-16 border-t border-gray-200 pt-12'>
      <h2 className='mb-8 text-2xl font-bold text-gray-900'>
        Related Insights
      </h2>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {relatedPosts.map((post) => (
          <RelatedPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

interface RelatedPostCardProps {
  post: InsightPost
}

function RelatedPostCard({ post }: RelatedPostCardProps) {
  const { title, slug, coverImage, category, readTime } = post

  return (
    <Link
      href={`/insights/${slug}`}
      className='block h-full'
      aria-label={`Read related post: ${title}`}
    >
      <article className='group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
        <div className='block overflow-hidden'>
          <div className='aspect-w-16 aspect-h-9 relative h-48 w-full overflow-hidden bg-gray-100'>
            <Image
              src={coverImage || '/images/insights/placeholder.jpg'}
              alt={title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px'
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
        </div>

        <div className='flex flex-1 flex-col p-4'>
          <div className='mb-2 flex items-center text-sm text-gray-500'>
            <span className='inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800'>
              {category}
            </span>
            <span className='mx-2'>•</span>
            <span>{readTime} min read</span>
          </div>

          <h3 className='text-lg font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600'>
            {title}
          </h3>
        </div>
      </article>
    </Link>
  )
}
