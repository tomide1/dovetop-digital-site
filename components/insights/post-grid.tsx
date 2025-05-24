import { InsightPost } from '@/data/insights'
import PostCard from './post-card'

interface PostGridProps {
  posts: InsightPost[]
}

const PostGrid = ({ posts }: PostGridProps) => {
  if (posts.length === 0) {
    return (
      <div className='mt-10 rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm'>
        <h3 className='mb-2 text-xl font-medium text-gray-900'>
          No insights found
        </h3>
        <p className='text-gray-600'>
          There are no posts matching your current filter. Try selecting a
          different category.
        </p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostGrid
