import { InsightPost } from '@/data/insights'
import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  post: InsightPost
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <article className='prose prose-lg mx-auto max-w-4xl prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg'>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}
