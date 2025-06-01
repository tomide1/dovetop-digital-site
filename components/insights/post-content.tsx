import { InsightPost } from '@/data/insights'
import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  post: InsightPost
}

export default function PostContent({ post }: PostContentProps) {
  // Remove the first H1 heading if it matches the post title to avoid duplication
  const processedContent = post.content
    .split('\n')
    .filter((line, index) => {
      // Skip the first few lines if they contain an H1 that matches the post title
      if (index < 3) {
        // Check first few lines in case there are empty lines
        const trimmedLine = line.trim()
        if (trimmedLine.startsWith('# ')) {
          const markdownTitle = trimmedLine.substring(2).trim()
          return markdownTitle !== post.title
        }
      }
      return true
    })
    .join('\n')

  return (
    <article className='prose prose-lg mx-auto max-w-4xl prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100'>
      <ReactMarkdown>{processedContent}</ReactMarkdown>
    </article>
  )
}
