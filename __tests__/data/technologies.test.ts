import { technologies, technologyCategories } from '@/data/technologies'
import type { Technology, TechnologyCategory } from '@/types/what-we-do'

describe('Technology Data Structure', () => {
  describe('Technologies Array', () => {
    test('technologies array exists, is not empty, and has expected structure', () => {
      expect(Array.isArray(technologies)).toBe(true)
      expect(technologies.length).toBeGreaterThan(0)

      // Test first technology has all required fields and correct types
      const firstTechnology: Technology = technologies[0]
      expect(firstTechnology).toHaveProperty('id')
      expect(typeof firstTechnology.id).toBe('string')
      expect(firstTechnology).toHaveProperty('name')
      expect(typeof firstTechnology.name).toBe('string')
      expect(firstTechnology).toHaveProperty('categoryId')
      expect(typeof firstTechnology.categoryId).toBe('string')
      expect(firstTechnology).toHaveProperty('icon')
      expect(typeof firstTechnology.icon).toBe('string')
    })

    test('all technology IDs are unique', () => {
      const ids = technologies.map((tech) => tech.id)
      const uniqueIds = new Set(ids)
      expect(ids.length).toBe(uniqueIds.size)
    })

    test('all technology names are unique', () => {
      const names = technologies.map((tech) => tech.name)
      const uniqueNames = new Set(names)
      expect(names.length).toBe(uniqueNames.size)
    })

    test('all technology IDs follow naming convention (kebab-case)', () => {
      const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/
      technologies.forEach((tech) => {
        expect(tech.id).toMatch(kebabCaseRegex)
      })
    })

    test('all technology names are non-empty strings', () => {
      technologies.forEach((tech) => {
        expect(tech.name).toBeTruthy()
        expect(tech.name.trim()).toBe(tech.name)
        expect(tech.name.length).toBeGreaterThan(0)
      })
    })

    test('all technology icons use valid iconify format', () => {
      const iconifyRegex = /^[a-z0-9-]+:[a-z0-9-]+$/
      technologies.forEach((tech) => {
        expect(tech.icon).toMatch(iconifyRegex)
      })
    })

    test('all technologies have valid categoryId references', () => {
      const validCategoryIds = new Set(
        technologyCategories.map((cat) => cat.id)
      )
      technologies.forEach((tech) => {
        expect(validCategoryIds).toContain(tech.categoryId)
      })
    })
  })

  describe('Technology Categories Array', () => {
    test('technologyCategories array exists, is not empty, and has expected structure', () => {
      expect(Array.isArray(technologyCategories)).toBe(true)
      expect(technologyCategories.length).toBeGreaterThan(0)

      // Test first category has all required fields and correct types
      const firstCategory: TechnologyCategory = technologyCategories[0]
      expect(firstCategory).toHaveProperty('id')
      expect(typeof firstCategory.id).toBe('string')
      expect(firstCategory).toHaveProperty('name')
      expect(typeof firstCategory.name).toBe('string')
      expect(firstCategory).toHaveProperty('icon')
      expect(typeof firstCategory.icon).toBe('string')
    })

    test('all category IDs are unique', () => {
      const ids = technologyCategories.map((cat) => cat.id)
      const uniqueIds = new Set(ids)
      expect(ids.length).toBe(uniqueIds.size)
    })

    test('all category names are unique', () => {
      const names = technologyCategories.map((cat) => cat.name)
      const uniqueNames = new Set(names)
      expect(names.length).toBe(uniqueNames.size)
    })

    test('all category IDs follow naming convention (kebab-case)', () => {
      const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/
      technologyCategories.forEach((cat) => {
        expect(cat.id).toMatch(kebabCaseRegex)
      })
    })

    test('all category names are non-empty strings', () => {
      technologyCategories.forEach((cat) => {
        expect(cat.name).toBeTruthy()
        expect(cat.name.trim()).toBe(cat.name)
        expect(cat.name.length).toBeGreaterThan(0)
      })
    })

    test('all categories have icons defined', () => {
      technologyCategories.forEach((cat) => {
        expect(cat.icon).toBeTruthy()
        expect(typeof cat.icon).toBe('string')
      })
    })

    test('all category icons use valid iconify format', () => {
      const iconifyRegex = /^[a-z0-9-]+:[a-z0-9-]+$/
      const categoriesWithIcons = technologyCategories.filter((cat) => cat.icon)
      expect(categoriesWithIcons.length).toBe(technologyCategories.length)

      categoriesWithIcons.forEach((cat) => {
        expect(cat.icon).toMatch(iconifyRegex)
      })
    })
  })

  describe('Data Completeness', () => {
    test('all categories have at least one technology', () => {
      const usedCategoryIds = new Set(
        technologies.map((tech) => tech.categoryId)
      )
      technologyCategories.forEach((cat) => {
        expect(usedCategoryIds).toContain(cat.id)
      })
    })

    test('minimum number of technologies per category', () => {
      const categoryCounts = technologies.reduce(
        (acc, tech) => {
          acc[tech.categoryId] = (acc[tech.categoryId] || 0) + 1
          return acc
        },
        {} as Record<string, number>
      )

      // Each category should have at least 1 technology (could be adjusted based on business needs)
      Object.values(categoryCounts).forEach((count) => {
        expect(count).toBeGreaterThanOrEqual(1)
      })
    })

    test('essential technology categories are present', () => {
      const essentialCategories = [
        'frontend',
        'backend',
        'cloud',
        'database',
        'devops',
      ]
      const categoryIds = technologyCategories.map((cat) => cat.id)

      essentialCategories.forEach((essential) => {
        expect(categoryIds).toContain(essential)
      })
    })

    test('no orphaned technologies (all categoryIds exist)', () => {
      const validCategoryIds = new Set(
        technologyCategories.map((cat) => cat.id)
      )
      const usedCategoryIds = new Set(
        technologies.map((tech) => tech.categoryId)
      )

      usedCategoryIds.forEach((categoryId) => {
        expect(validCategoryIds).toContain(categoryId)
      })
    })
  })

  describe('Icon Validation', () => {
    test('technology icons use consistent prefixes', () => {
      const validPrefixes = ['devicon', 'logos', 'simple-icons', 'tabler']
      technologies.forEach((tech) => {
        const prefix = tech.icon.split(':')[0]
        expect(validPrefixes).toContain(prefix)
      })
    })

    test('category icons use consistent prefixes', () => {
      const validPrefixes = ['devicon', 'logos', 'simple-icons', 'tabler']
      technologyCategories.forEach((cat) => {
        const prefix = cat.icon.split(':')[0]
        expect(validPrefixes).toContain(prefix)
      })
    })

    test('fallback icon format is valid', () => {
      const fallbackIcon = 'simple-icons:code'
      const iconifyRegex = /^[a-z0-9-]+:[a-z0-9-]+$/
      expect(fallbackIcon).toMatch(iconifyRegex)
    })
  })

  describe('Business Logic Validation', () => {
    test('popular technologies are included', () => {
      const popularTechNames = [
        'React',
        'Node.js',
        'Python',
        'AWS',
        'Docker',
        'Kubernetes',
        'PostgreSQL',
      ]
      const techNames = technologies.map((tech) => tech.name)

      popularTechNames.forEach((popular) => {
        expect(techNames).toContain(popular)
      })
    })

    test('technology distribution across categories is reasonable', () => {
      const categoryCounts = technologies.reduce(
        (acc, tech) => {
          acc[tech.categoryId] = (acc[tech.categoryId] || 0) + 1
          return acc
        },
        {} as Record<string, number>
      )

      // No single category should dominate (more than 50% of all technologies)
      const totalTechnologies = technologies.length
      Object.values(categoryCounts).forEach((count) => {
        expect(count / totalTechnologies).toBeLessThan(0.5)
      })
    })

    test('technology names are properly formatted', () => {
      technologies.forEach((tech) => {
        // Should not start or end with whitespace
        expect(tech.name).toBe(tech.name.trim())
        // Should not have multiple consecutive spaces
        expect(tech.name).not.toMatch(/\s{2,}/)
        // Should have proper capitalization (first letter should be uppercase for most)
        if (tech.name.length > 0) {
          const firstChar = tech.name[0]
          expect(/[A-Z0-9]/.test(firstChar)).toBe(true)
        }
      })
    })
  })

  describe('Performance Validation', () => {
    test('technology data size is reasonable', () => {
      // Should have a reasonable number of technologies (not too few, not too many)
      expect(technologies.length).toBeGreaterThan(10)
      expect(technologies.length).toBeLessThan(500)
    })

    test('category data size is reasonable', () => {
      // Should have a reasonable number of categories
      expect(technologyCategories.length).toBeGreaterThan(3)
      expect(technologyCategories.length).toBeLessThan(20)
    })

    test('data structure is efficient for lookups', () => {
      // Test that we can efficiently find technologies by ID
      const sampleId = technologies[0].id
      const found = technologies.find((tech) => tech.id === sampleId)
      expect(found).toBeTruthy()
      expect(found?.id).toBe(sampleId)
    })
  })
})
