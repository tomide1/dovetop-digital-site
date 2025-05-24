import { insights } from '@/data/insights'
import PostCard from './post-card'

interface RelatedPostsProps {
  currentPostId: string
  category: string
}

/**
 * Shows related posts in the same category as the current post
 */
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
          <PostCard key={post.id} post={post} variant='compact' />
        ))}
      </div>
    </section>
  )
}
