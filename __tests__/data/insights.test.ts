import { insights, InsightPost, Author } from '@/data/insights'

describe('Insights Data Structure', () => {
  test('insights array exists, is not empty, and has expected structure', () => {
    expect(Array.isArray(insights)).toBe(true)
    expect(insights.length).toBeGreaterThan(0)

    // Test first insight has all required fields and correct types
    const firstInsight: InsightPost = insights[0]
    expect(firstInsight).toHaveProperty('id')
    expect(typeof firstInsight.id).toBe('string')
    expect(firstInsight).toHaveProperty('slug')
    expect(typeof firstInsight.slug).toBe('string')
    expect(firstInsight).toHaveProperty('title')
    expect(typeof firstInsight.title).toBe('string')
    expect(firstInsight).toHaveProperty('excerpt')
    expect(typeof firstInsight.excerpt).toBe('string')
    expect(firstInsight).toHaveProperty('content')
    expect(typeof firstInsight.content).toBe('string')
    expect(firstInsight).toHaveProperty('coverImage')
    expect(typeof firstInsight.coverImage).toBe('string')
    expect(firstInsight).toHaveProperty('date')
    expect(typeof firstInsight.date).toBe('string')
    expect(firstInsight).toHaveProperty('author')
    expect(typeof firstInsight.author).toBe('object')
    expect(firstInsight.author).toHaveProperty('name')
    expect(typeof firstInsight.author.name).toBe('string')
    expect(firstInsight.author).toHaveProperty('title')
    expect(typeof firstInsight.author.title).toBe('string')
    expect(firstInsight).toHaveProperty('category')
    expect(typeof firstInsight.category).toBe('string')
    expect(firstInsight).toHaveProperty('readTime')
    expect(typeof firstInsight.readTime).toBe('number')
    expect(firstInsight).toHaveProperty('featured')
    expect(typeof firstInsight.featured).toBe('boolean')
  })

  test('categories correspond to predefined service areas or valid values', () => {
    const validCategories = [
      'Cloud Solutions',
      'User-Centered Design',
      'Data Analytics & ML',
      'Security & Governance',
    ]
    const categories = [...new Set(insights.map((insight) => insight.category))]

    categories.forEach((category) => {
      expect(validCategories).toContain(category)
    })
    expect(categories.length).toBeGreaterThan(0)
  })

  test('at least one featured article exists', () => {
    const featuredInsights = insights.filter((insight) => insight.featured)
    expect(featuredInsights.length).toBeGreaterThan(0)
  })

  test('all slugs are unique', () => {
    const slugs = insights.map((insight) => insight.slug)
    const uniqueSlugs = new Set(slugs)
    expect(slugs.length).toBe(uniqueSlugs.size)
  })
})
