'use client'

import { useEffect, useState } from 'react'
import { insights } from '@/data/insights'
import InsightsHero from '@/components/insights/insights-hero'
import FeaturedPost from '@/components/insights/featured-post'
import CategoryFilter from '@/components/insights/category-filter'
import PostGrid from '@/components/insights/post-grid'

// Get all unique categories from insights
const getCategories = () => {
  const uniqueCategories = Array.from(
    new Set(insights.map((insight) => insight.category))
  )
  return ['All', ...uniqueCategories]
}

// Get featured post (first one marked as featured)
const getFeaturedPost = () => {
  return insights.find((insight) => insight.featured) || insights[0]
}

// Metadata should be defined in a separate layout.tsx file or using generateMetadata
// as it's not allowed in client components.

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredPosts, setFilteredPosts] = useState(insights)
  const featuredPost = getFeaturedPost()
  const allCategories = getCategories()

  // Filter posts based on selected category (excluding the featured post)
  useEffect(() => {
    const filtered =
      selectedCategory === 'All'
        ? insights.filter((post) => post.id !== featuredPost.id)
        : insights.filter(
            (post) =>
              post.category === selectedCategory && post.id !== featuredPost.id
          )

    setFilteredPosts(filtered)
  }, [selectedCategory, featuredPost.id])

  // Handle category filter change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <main>
      <InsightsHero />

      <div className='container mx-auto px-4 py-12'>
        <FeaturedPost post={featuredPost} />

        <div className='mt-12'>
          <CategoryFilter
            categories={allCategories}
            selectedCategory={selectedCategory}
            onFilterChange={handleFilterChange}
          />

          <PostGrid posts={filteredPosts} />
        </div>
      </div>
    </main>
  )
}
