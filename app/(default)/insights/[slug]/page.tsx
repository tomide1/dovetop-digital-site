import { insights } from '@/data/insights'
import { notFound } from 'next/navigation'
import PostHeader from '@/components/insights/post-header'
import PostContent from '@/components/insights/post-content'
import AuthorBio from '@/components/insights/author-bio'
import RelatedPosts from '@/components/insights/related-posts'
import BackButton from '@/components/insights/back-button'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }))
}

// Since this is a dynamic route, we need to generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = insights.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested insight post could not be found.',
    }
  }

  return {
    title: `${post.title} | Dovetop Digital Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || '/images/insights/placeholder.svg'],
    },
  }
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = insights.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
    // Return a placeholder to satisfy TypeScript - notFound() redirects, so this won't render
    return null
  }

  return (
    <main className='container mx-auto px-4 py-12'>
      <BackButton />
      <PostHeader post={post} />
      <PostContent post={post} />
      <AuthorBio author={post.author} />
      <RelatedPosts currentPostId={post.id} category={post.category} />
    </main>
  )
}
