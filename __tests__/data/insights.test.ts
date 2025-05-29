import { insights, getInsightWithAuthor, InsightPost } from '@/data/insights'
import { getAuthorByName } from '@/data/team'

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

    // Updated: Should have authorName instead of author object
    expect(firstInsight).toHaveProperty('authorName')
    expect(typeof firstInsight.authorName).toBe('string')

    expect(firstInsight).toHaveProperty('category')
    expect(typeof firstInsight.category).toBe('string')
    expect(firstInsight).toHaveProperty('readTime')
    expect(typeof firstInsight.readTime).toBe('number')
    expect(firstInsight).toHaveProperty('featured')
    expect(typeof firstInsight.featured).toBe('boolean')
  })

  test('all author names reference valid team members', () => {
    insights.forEach((insight) => {
      const author = getAuthorByName(insight.authorName)
      expect(author).toBeDefined()
      expect(author?.isAuthor).toBe(true)
    })
  })

  test('getInsightWithAuthor enriches insight with author data', () => {
    const firstInsight = insights[0]
    const enrichedInsight = getInsightWithAuthor(firstInsight)

    expect(enrichedInsight).toHaveProperty('author')
    expect(enrichedInsight.author).toBeDefined()
    expect(enrichedInsight.author?.name).toBe(firstInsight.authorName)
    expect(enrichedInsight.author?.isAuthor).toBe(true)

    // Should preserve all original insight properties
    expect(enrichedInsight.id).toBe(firstInsight.id)
    expect(enrichedInsight.title).toBe(firstInsight.title)
    expect(enrichedInsight.authorName).toBe(firstInsight.authorName)
  })

  test('categories correspond to predefined service areas or valid values', () => {
    const validCategories = [
      'Cloud Solutions',
      'User-Centered Design',
      'Data Analytics & ML',
      'Security & Governance',
    ]
    const categories = Array.from(
      new Set(insights.map((insight) => insight.category))
    )

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
