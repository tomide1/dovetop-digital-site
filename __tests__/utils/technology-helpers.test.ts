import {
  getTechnology,
  getTechnologyCategory,
  getTechnologyDisplayName,
  getTechnologyIcon,
  findTechnologyByName,
  getTechnologyIconByName,
  getTechnologiesByCategory,
  searchTechnologies,
  getUsedCategories,
  technologyExists,
} from '@/utils/technology-helpers'
import { technologies, technologyCategories } from '@/data/technologies'
import type { TechnologyId, TechnologyCategoryId } from '@/types/what-we-do'

describe('Technology Helpers', () => {
  describe('getTechnology', () => {
    test('returns technology by valid ID', () => {
      const sampleTech = technologies[0]
      const result = getTechnology(sampleTech.id)
      expect(result).toBeTruthy()
      expect(result?.id).toBe(sampleTech.id)
      expect(result?.name).toBe(sampleTech.name)
    })

    test('returns technology by valid name', () => {
      const sampleTech = technologies[0]
      const result = getTechnology(sampleTech.name)
      expect(result).toBeTruthy()
      expect(result?.id).toBe(sampleTech.id)
      expect(result?.name).toBe(sampleTech.name)
    })

    test('returns undefined for invalid ID', () => {
      const result = getTechnology('non-existent-tech' as TechnologyId)
      expect(result).toBeUndefined()
    })

    test('handles case-insensitive name matching', () => {
      const reactTech = technologies.find((t) => t.name === 'React')
      if (reactTech) {
        const result = getTechnology('react')
        expect(result?.id).toBe(reactTech.id)
      }
    })

    test('handles edge cases (empty string, null, undefined)', () => {
      expect(getTechnology('')).toBeUndefined()
      expect(getTechnology(null as unknown as TechnologyId)).toBeUndefined()
      expect(
        getTechnology(undefined as unknown as TechnologyId)
      ).toBeUndefined()
    })

    test('handles numeric strings', () => {
      expect(getTechnology('123')).toBeUndefined()
    })

    test('handles special characters', () => {
      expect(getTechnology('@#$%')).toBeUndefined()
    })
  })

  describe('getTechnologyCategory', () => {
    test('returns category by valid ID', () => {
      const sampleCategory = technologyCategories[0]
      const result = getTechnologyCategory(sampleCategory.id)
      expect(result).toBeTruthy()
      expect(result?.id).toBe(sampleCategory.id)
      expect(result?.name).toBe(sampleCategory.name)
    })

    test('returns undefined for invalid ID', () => {
      const result = getTechnologyCategory(
        'non-existent-category' as TechnologyCategoryId
      )
      expect(result).toBeUndefined()
    })

    test('handles all existing categories', () => {
      technologyCategories.forEach((category) => {
        const result = getTechnologyCategory(category.id)
        expect(result).toBeTruthy()
        expect(result?.id).toBe(category.id)
      })
    })
  })

  describe('getTechnologyDisplayName', () => {
    test('returns correct display name for valid ID', () => {
      const sampleTech = technologies[0]
      const result = getTechnologyDisplayName(sampleTech.id)
      expect(result).toBe(sampleTech.name)
    })

    test('returns fallback for invalid ID', () => {
      const invalidId = 'non-existent-tech'
      const result = getTechnologyDisplayName(invalidId)
      expect(result).toBe(invalidId)
    })

    test('handles name mappings correctly', () => {
      // Test some known mappings
      const awsResult = getTechnologyDisplayName('AWS')
      expect(awsResult).toBeTruthy()

      const nodeResult = getTechnologyDisplayName('Node.js')
      expect(nodeResult).toBeTruthy()
    })

    test('handles special characters and spaces', () => {
      const result = getTechnologyDisplayName('Test Tech Name')
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    test('handles empty string', () => {
      const result = getTechnologyDisplayName('')
      expect(result).toBe('')
    })
  })

  describe('getTechnologyIcon', () => {
    test('returns correct icon for valid ID', () => {
      const sampleTech = technologies[0]
      const result = getTechnologyIcon(sampleTech.id)
      expect(result).toBe(sampleTech.icon)
    })

    test('returns fallback icon for invalid ID', () => {
      const result = getTechnologyIcon('non-existent-tech')
      expect(result).toBe('simple-icons:code')
    })

    test('handles all icon formats', () => {
      technologies.forEach((tech) => {
        const result = getTechnologyIcon(tech.id)
        expect(result).toMatch(/^[a-z0-9-]+:[a-z0-9-]+$/)
      })
    })

    test('returns fallback for empty string', () => {
      const result = getTechnologyIcon('')
      expect(result).toBe('simple-icons:code')
    })
  })

  describe('findTechnologyByName', () => {
    test('finds technology by exact name match', () => {
      const sampleTech = technologies[0]
      const result = findTechnologyByName(sampleTech.name)
      expect(result).toBeTruthy()
      expect(result?.id).toBe(sampleTech.id)
    })

    test('finds technology by case-insensitive match', () => {
      const reactTech = technologies.find((t) => t.name === 'React')
      if (reactTech) {
        const result = findTechnologyByName('react')
        expect(result?.id).toBe(reactTech.id)

        const upperResult = findTechnologyByName('REACT')
        expect(upperResult?.id).toBe(reactTech.id)
      }
    })

    test('uses name mappings for edge cases', () => {
      const result = findTechnologyByName('AWS')
      expect(result).toBeTruthy()

      const nodeResult = findTechnologyByName('Node.js')
      expect(nodeResult).toBeTruthy()
    })

    test('returns undefined for non-existent names', () => {
      const result = findTechnologyByName('NonExistentTechnology')
      expect(result).toBeUndefined()
    })

    test('handles empty string', () => {
      const result = findTechnologyByName('')
      expect(result).toBeUndefined()
    })

    test('handles special characters', () => {
      const result = findTechnologyByName('@#$%')
      expect(result).toBeUndefined()
    })
  })

  describe('getTechnologyIconByName', () => {
    test('returns correct icon for known technology name', () => {
      const reactTech = technologies.find((t) => t.name === 'React')
      if (reactTech) {
        const result = getTechnologyIconByName('React')
        expect(result).toBe(reactTech.icon)
      }
    })

    test('returns fallback icon for unknown technology', () => {
      const result = getTechnologyIconByName('UnknownTech')
      expect(result).toBe('simple-icons:code')
    })

    test('handles case-insensitive matching', () => {
      const reactTech = technologies.find((t) => t.name === 'React')
      if (reactTech) {
        const result = getTechnologyIconByName('react')
        expect(result).toBe(reactTech.icon)
      }
    })
  })

  describe('searchTechnologies', () => {
    test('searches by partial name match', () => {
      const results = searchTechnologies('React')
      expect(results.length).toBeGreaterThan(0)
      expect(results.some((tech) => tech.name.includes('React'))).toBe(true)
    })

    test('searches by partial ID match', () => {
      const results = searchTechnologies('aws')
      expect(results.length).toBeGreaterThan(0)
      expect(results.some((tech) => tech.id.includes('aws'))).toBe(true)
    })

    test('handles case-insensitive searches', () => {
      const lowerResults = searchTechnologies('react')
      const upperResults = searchTechnologies('REACT')
      expect(lowerResults.length).toBe(upperResults.length)
    })

    test('returns empty array for no matches', () => {
      const results = searchTechnologies('XYZ123NonExistent')
      expect(results).toEqual([])
    })

    test('handles special characters in query', () => {
      const results = searchTechnologies('$%^&')
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toBe(0)
    })

    test('handles empty query', () => {
      const results = searchTechnologies('')
      expect(Array.isArray(results)).toBe(true)
    })
  })

  describe('getTechnologiesByCategory', () => {
    test('returns all technologies for valid category', () => {
      const frontendCategory = technologyCategories.find(
        (cat) => cat.id === 'frontend'
      )
      if (frontendCategory) {
        const results = getTechnologiesByCategory('frontend')
        expect(results.length).toBeGreaterThan(0)
        results.forEach((tech) => {
          expect(tech.categoryId).toBe('frontend')
        })
      }
    })

    test('returns empty array for invalid category', () => {
      const results = getTechnologiesByCategory(
        'non-existent' as TechnologyCategoryId
      )
      expect(results).toEqual([])
    })

    test('maintains correct order', () => {
      const results = getTechnologiesByCategory('frontend')
      const originalOrder = technologies.filter(
        (tech) => tech.categoryId === 'frontend'
      )
      expect(results).toEqual(originalOrder)
    })

    test('works for all categories', () => {
      technologyCategories.forEach((category) => {
        const results = getTechnologiesByCategory(category.id)
        expect(Array.isArray(results)).toBe(true)
        results.forEach((tech) => {
          expect(tech.categoryId).toBe(category.id)
        })
      })
    })
  })

  describe('getUsedCategories', () => {
    test('returns only categories that have technologies', () => {
      const results = getUsedCategories()
      expect(results.length).toBeGreaterThan(0)

      const usedCategoryIds = new Set(
        technologies.map((tech) => tech.categoryId)
      )
      results.forEach((category) => {
        expect(usedCategoryIds.has(category.id)).toBe(true)
      })
    })

    test('maintains category order', () => {
      const results = getUsedCategories()
      const usedCategoryIds = new Set(
        technologies.map((tech) => tech.categoryId)
      )
      const expectedOrder = technologyCategories.filter((cat) =>
        usedCategoryIds.has(cat.id)
      )
      expect(results).toEqual(expectedOrder)
    })

    test('excludes empty categories', () => {
      const results = getUsedCategories()
      results.forEach((category) => {
        const techsInCategory = technologies.filter(
          (tech) => tech.categoryId === category.id
        )
        expect(techsInCategory.length).toBeGreaterThan(0)
      })
    })
  })

  describe('technologyExists', () => {
    test('returns true for valid technology ID', () => {
      const sampleTech = technologies[0]
      const result = technologyExists(sampleTech.id)
      expect(result).toBe(true)
    })

    test('returns true for valid technology name', () => {
      const sampleTech = technologies[0]
      const result = technologyExists(sampleTech.name)
      expect(result).toBe(true)
    })

    test('returns false for invalid technology', () => {
      const result = technologyExists('non-existent-tech')
      expect(result).toBe(false)
    })

    test('handles edge cases', () => {
      expect(technologyExists('')).toBe(false)
      expect(technologyExists(null as unknown as TechnologyId)).toBe(false)
      expect(technologyExists(undefined as unknown as TechnologyId)).toBe(false)
    })
  })

  describe('Edge Cases and Error Handling', () => {
    test('handles malformed technology data', () => {
      // Test with null/undefined values
      expect(getTechnology(null as unknown as TechnologyId)).toBeUndefined()
      expect(getTechnologyDisplayName(null as unknown as TechnologyId)).toBe(
        'null'
      )
      expect(getTechnologyIcon(null as unknown as TechnologyId)).toBe(
        'simple-icons:code'
      )
    })

    test('handles extremely long queries', () => {
      const longQuery = 'a'.repeat(1000)
      const results = searchTechnologies(longQuery)
      expect(Array.isArray(results)).toBe(true)
    })

    test('handles unicode characters', () => {
      const unicodeQuery = '🚀💻🔥'
      const results = searchTechnologies(unicodeQuery)
      expect(Array.isArray(results)).toBe(true)
    })
  })

  describe('Performance Tests', () => {
    test('getTechnology performs well', () => {
      const start = performance.now()
      for (let i = 0; i < 1000; i++) {
        getTechnology('react')
      }
      const end = performance.now()
      expect(end - start).toBeLessThan(100) // Should complete in less than 100ms
    })

    test('searchTechnologies performs well', () => {
      const start = performance.now()
      for (let i = 0; i < 100; i++) {
        searchTechnologies('react')
      }
      const end = performance.now()
      expect(end - start).toBeLessThan(100) // Should complete in less than 100ms
    })

    test('getTechnologiesByCategory performs well', () => {
      const start = performance.now()
      for (let i = 0; i < 1000; i++) {
        getTechnologiesByCategory('frontend')
      }
      const end = performance.now()
      expect(end - start).toBeLessThan(100) // Should complete in less than 100ms
    })
  })

  describe('Type Safety', () => {
    test('maintains type safety with TechnologyId', () => {
      const validId: TechnologyId = 'react'
      const result = getTechnology(validId)
      expect(result?.id).toBe(validId)
    })

    test('maintains type safety with TechnologyCategoryId', () => {
      const validCategoryId: TechnologyCategoryId = 'frontend'
      const result = getTechnologyCategory(validCategoryId)
      expect(result?.id).toBe(validCategoryId)
    })

    test('handles string union types correctly', () => {
      const stringId: string = 'react'
      const result = getTechnology(stringId)
      expect(typeof result?.id).toBe('string')
    })
  })
})
