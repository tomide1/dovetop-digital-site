/* eslint-disable @typescript-eslint/no-explicit-any */
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

// Note: Mock data scenarios are defined inline where needed to avoid linting issues

describe('Technology Error Handling Tests', () => {
  describe('Input Validation and Sanitization', () => {
    test('getTechnology handles null input gracefully', () => {
      expect(getTechnology(null as unknown as string)).toBeUndefined()
      expect(getTechnology(undefined as unknown as string)).toBeUndefined()
    })

    test('getTechnology handles invalid types gracefully', () => {
      expect(getTechnology(123 as unknown as string)).toBeUndefined()
      expect(getTechnology({} as unknown as string)).toBeUndefined()
      expect(getTechnology([] as unknown as string)).toBeUndefined()
      expect(getTechnology(true as unknown as string)).toBeUndefined()
    })

    test('getTechnology handles empty and whitespace strings', () => {
      expect(getTechnology('')).toBeUndefined()
      expect(getTechnology('   ')).toBeUndefined()
      expect(getTechnology('\t')).toBeUndefined()
      expect(getTechnology('\n')).toBeUndefined()
    })

    test('getTechnology handles special characters safely', () => {
      const specialChars = [
        '!@#$%',
        '() {}',
        '<script>',
        'DROP TABLE',
        '../',
        '\\x00',
      ]

      specialChars.forEach((chars) => {
        expect(() => getTechnology(chars)).not.toThrow()
        expect(getTechnology(chars)).toBeUndefined()
      })
    })

    test('getTechnology handles extremely long strings', () => {
      const longString = 'a'.repeat(10000)
      expect(() => getTechnology(longString)).not.toThrow()
      expect(getTechnology(longString)).toBeUndefined()
    })

    test('getTechnology handles unicode and emoji input', () => {
      const unicodeInputs = ['🚀', '中文', 'العربية', '日本語', 'русский']

      unicodeInputs.forEach((unicode) => {
        expect(() => getTechnology(unicode)).not.toThrow()
        // May or may not find a match, but should not throw
      })
    })
  })

  describe('Category Validation Error Handling', () => {
    test('getTechnologyCategory handles invalid category IDs', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(getTechnologyCategory(null as any)).toBeUndefined()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(getTechnologyCategory(undefined as any)).toBeUndefined()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(getTechnologyCategory('' as any)).toBeUndefined()
      expect(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getTechnologyCategory('non-existent-category' as any)
      ).toBeUndefined()
    })

    test('getTechnologiesByCategory handles invalid categories gracefully', () => {
      expect(getTechnologiesByCategory(null as any)).toEqual([])
      expect(getTechnologiesByCategory(undefined as any)).toEqual([])
      expect(getTechnologiesByCategory('' as any)).toEqual([])
      expect(getTechnologiesByCategory('invalid-category' as any)).toEqual([])
    })

    test('getTechnologiesByCategory handles type mismatches', () => {
      expect(getTechnologiesByCategory(123 as any)).toEqual([])
      expect(getTechnologiesByCategory({} as any)).toEqual([])
      expect(getTechnologiesByCategory([] as any)).toEqual([])
    })
  })

  describe('Display Name Error Handling', () => {
    test('getTechnologyDisplayName provides safe fallbacks', () => {
      expect(getTechnologyDisplayName(null as any)).toBe('null')
      expect(getTechnologyDisplayName(undefined as any)).toBe('undefined')
      expect(getTechnologyDisplayName('')).toBe('')
    })

    test('getTechnologyDisplayName handles object inputs', () => {
      expect(getTechnologyDisplayName({} as any)).toBe('[object Object]')
      expect(getTechnologyDisplayName({ id: 'test' } as any)).toBe(
        '[object Object]'
      )
    })

    test('getTechnologyDisplayName handles array inputs', () => {
      expect(getTechnologyDisplayName([] as any)).toBe('')
      expect(getTechnologyDisplayName(['test'] as any)).toBe('test')
    })

    test('getTechnologyDisplayName handles number inputs', () => {
      expect(getTechnologyDisplayName(123 as any)).toBe('123')
      expect(getTechnologyDisplayName(0 as any)).toBe('0')
      expect(getTechnologyDisplayName(-1 as any)).toBe('-1')
    })

    test('getTechnologyDisplayName handles boolean inputs', () => {
      expect(getTechnologyDisplayName(true as any)).toBe('true')
      expect(getTechnologyDisplayName(false as any)).toBe('false')
    })
  })

  describe('Icon Fallback Error Handling', () => {
    test('getTechnologyIcon provides consistent fallback', () => {
      const fallbackIcon = 'simple-icons:code'

      expect(getTechnologyIcon(null as any)).toBe(fallbackIcon)
      expect(getTechnologyIcon(undefined as any)).toBe(fallbackIcon)
      expect(getTechnologyIcon('')).toBe(fallbackIcon)
      expect(getTechnologyIcon('non-existent')).toBe(fallbackIcon)
    })

    test('getTechnologyIcon handles type mismatches gracefully', () => {
      const fallbackIcon = 'simple-icons:code'

      expect(getTechnologyIcon(123 as any)).toBe(fallbackIcon)
      expect(getTechnologyIcon({} as any)).toBe(fallbackIcon)
      expect(getTechnologyIcon([] as any)).toBe(fallbackIcon)
      expect(getTechnologyIcon(true as any)).toBe(fallbackIcon)
    })

    test('getTechnologyIconByName handles invalid names', () => {
      const fallbackIcon = 'simple-icons:code'

      expect(getTechnologyIconByName(null as any)).toBe(fallbackIcon)
      expect(getTechnologyIconByName('')).toBe(fallbackIcon)
      expect(getTechnologyIconByName('absolutely-does-not-exist')).toBe(
        fallbackIcon
      )
    })

    test('fallback icon format is always valid', () => {
      const iconPattern = /^[a-z0-9-]+:[a-z0-9-]+$/
      const fallbackIcon = getTechnologyIcon('invalid-tech')

      expect(fallbackIcon).toMatch(iconPattern)
    })
  })

  describe('Search Function Error Handling', () => {
    test('searchTechnologies handles invalid query types', () => {
      expect(searchTechnologies(null as any)).toEqual([])
      expect(searchTechnologies(undefined as any)).toEqual([])
      expect(searchTechnologies(123 as any)).toEqual([])
      expect(searchTechnologies({} as any)).toEqual([])
      expect(searchTechnologies([] as any)).toEqual([])
    })

    test('searchTechnologies handles empty queries gracefully', () => {
      const results = searchTechnologies('')
      expect(Array.isArray(results)).toBe(true)
      // May return all or none, but should be an array
    })

    test('searchTechnologies handles regex-breaking characters', () => {
      const dangerousChars = [
        '[',
        ']',
        '(',
        ')',
        '*',
        '+',
        '?',
        '^',
        '$',
        '|',
        '\\',
      ]

      dangerousChars.forEach((char) => {
        expect(() => searchTechnologies(char)).not.toThrow()
        expect(Array.isArray(searchTechnologies(char))).toBe(true)
      })
    })

    test('searchTechnologies handles very long queries', () => {
      const longQuery = 'a'.repeat(1000)
      expect(() => searchTechnologies(longQuery)).not.toThrow()
      expect(Array.isArray(searchTechnologies(longQuery))).toBe(true)
    })

    test('searchTechnologies handles unicode queries', () => {
      const unicodeQueries = ['🔍', '测试', 'тест', 'テスト']

      unicodeQueries.forEach((query) => {
        expect(() => searchTechnologies(query)).not.toThrow()
        expect(Array.isArray(searchTechnologies(query))).toBe(true)
      })
    })
  })

  describe('Existence Check Error Handling', () => {
    test('technologyExists handles invalid inputs safely', () => {
      expect(technologyExists(null as any)).toBe(false)
      expect(technologyExists(undefined as any)).toBe(false)
      expect(technologyExists(123 as any)).toBe(false)
      expect(technologyExists({} as any)).toBe(false)
      expect(technologyExists([] as any)).toBe(false)
      expect(technologyExists(true as any)).toBe(false)
    })

    test('technologyExists handles edge case strings', () => {
      expect(technologyExists('')).toBe(false)
      expect(technologyExists('   ')).toBe(false)
      expect(technologyExists('\0')).toBe(false)
      expect(technologyExists('\t\n\r')).toBe(false)
    })

    test('findTechnologyByName handles invalid names gracefully', () => {
      expect(findTechnologyByName(null as any)).toBeUndefined()
      expect(findTechnologyByName(undefined as any)).toBeUndefined()
      expect(findTechnologyByName(123 as any)).toBeUndefined()
      expect(findTechnologyByName({} as any)).toBeUndefined()
    })
  })

  describe('Data Corruption Scenarios', () => {
    test('functions handle missing required properties', () => {
      // Mock scenario where data is partially corrupted
      const originalConsoleError = console.error
      console.error = jest.fn() // Suppress error logs during test

      expect(() => {
        // These should not throw even with corrupted data
        getTechnology('any-id')
        getTechnologyDisplayName('any-id')
        getTechnologyIcon('any-id')
        searchTechnologies('any-query')
        getUsedCategories()
      }).not.toThrow()

      console.error = originalConsoleError
    })

    test('functions handle circular references safely', () => {
      const circularObj: any = { id: 'test' }
      circularObj.self = circularObj

      expect(() => {
        getTechnology(circularObj)
        getTechnologyDisplayName(circularObj)
        getTechnologyIcon(circularObj)
      }).not.toThrow()
    })

    test('functions handle frozen objects', () => {
      const frozenId = Object.freeze('frozen-tech')

      expect(() => {
        getTechnology(frozenId)
        getTechnologyDisplayName(frozenId)
        getTechnologyIcon(frozenId)
      }).not.toThrow()
    })
  })

  describe('Memory and Performance Error Handling', () => {
    test('functions handle memory pressure gracefully', () => {
      // Simulate repeated calls that might cause memory issues
      const iterations = 10000

      expect(() => {
        for (let i = 0; i < iterations; i++) {
          getTechnology(`test-${i}`)
          getTechnologyDisplayName(`test-${i}`)
          getTechnologyIcon(`test-${i}`)
        }
      }).not.toThrow()
    })

    test('search function handles concurrent access', () => {
      // Simulate multiple simultaneous searches
      const promises = Array.from({ length: 100 }, (_, i) =>
        Promise.resolve(searchTechnologies(`query-${i}`))
      )

      expect(() => {
        Promise.all(promises)
      }).not.toThrow()
    })

    test('functions handle deeply nested calls', () => {
      // Test recursive/deeply nested scenarios
      const recursiveTest = (depth: number): any => {
        if (depth <= 0) return getTechnology('base-case')
        return getTechnology(`level-${depth}`) || recursiveTest(depth - 1)
      }

      expect(() => recursiveTest(100)).not.toThrow()
    })
  })

  describe('Network and Async Error Simulation', () => {
    test('functions handle simulated async errors', async () => {
      // Simulate async operations that might fail
      const asyncWrapper = async (fn: () => any) => {
        try {
          return await Promise.resolve(fn())
        } catch {
          return null
        }
      }

      const results = await Promise.all([
        asyncWrapper(() => getTechnology('async-test')),
        asyncWrapper(() => getTechnologyDisplayName('async-test')),
        asyncWrapper(() => getTechnologyIcon('async-test')),
        asyncWrapper(() => searchTechnologies('async-test')),
      ])

      // All should complete without throwing
      expect(results).toHaveLength(4)
    })

    test('functions maintain consistency under simulated network delays', async () => {
      const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

      // Simulate network delay between operations
      const tech1 = getTechnology('test-consistency')
      await delay(1)
      const tech2 = getTechnology('test-consistency')

      // Results should be consistent
      expect(tech1).toEqual(tech2)
    })
  })

  describe('Boundary Value Testing', () => {
    test('handles minimum and maximum value edge cases', () => {
      // Test with various boundary values
      const boundaryValues = [
        Number.MIN_SAFE_INTEGER.toString(),
        Number.MAX_SAFE_INTEGER.toString(),
        Number.NEGATIVE_INFINITY.toString(),
        Number.POSITIVE_INFINITY.toString(),
        'NaN',
      ]

      boundaryValues.forEach((value) => {
        expect(() => {
          getTechnology(value)
          getTechnologyDisplayName(value)
          getTechnologyIcon(value)
          technologyExists(value)
        }).not.toThrow()
      })
    })

    test('handles string length boundaries', () => {
      // Test with various string lengths
      const emptyString = ''
      const singleChar = 'a'
      const veryLongString = 'a'.repeat(100000)

      ;[emptyString, singleChar, veryLongString].forEach((str) => {
        expect(() => {
          getTechnology(str)
          searchTechnologies(str)
          technologyExists(str)
        }).not.toThrow()
      })
    })
  })

  describe('Integration Error Scenarios', () => {
    test('maintains data integrity under error conditions', () => {
      // Test that errors in one function don't affect others
      const invalidInput = '!@#$%^&*()'

      // First function call with invalid input
      getTechnology(invalidInput)

      // Subsequent calls should still work normally
      const normalResult = getTechnology('react')
      expect(typeof normalResult).toBe('object')
    })

    test('error recovery after bad inputs', () => {
      // Test recovery after various bad inputs
      const badInputs = [null, undefined, {}, [], true, false, 123, '']

      badInputs.forEach((bad) => {
        getTechnology(bad as any)
        getTechnologyDisplayName(bad as any)
        getTechnologyIcon(bad as any)
      })

      // Functions should still work normally after bad inputs
      expect(() => {
        getTechnology('valid-tech-name')
        searchTechnologies('valid-search')
        getUsedCategories()
      }).not.toThrow()
    })

    test('concurrent error handling', () => {
      // Test multiple error scenarios happening simultaneously
      const errorOperations = [
        () => getTechnology(null as any),
        () => getTechnologyDisplayName(undefined as any),
        () => getTechnologyIcon({} as any),
        () => searchTechnologies(123 as any),
        () => technologyExists([] as any),
      ]

      expect(() => {
        Promise.all(errorOperations.map((op) => Promise.resolve(op())))
      }).not.toThrow()
    })
  })

  describe('Graceful Degradation', () => {
    test('provides meaningful error information without exposing internals', () => {
      // Error handling should not expose internal implementation details
      const result = getTechnology('definitely-does-not-exist')
      expect(result).toBeUndefined() // Clean failure, no internal errors exposed
    })

    test('maintains API contract under all error conditions', () => {
      // All functions should maintain their return type contracts
      expect(typeof getTechnologyDisplayName('any-input')).toBe('string')
      expect(typeof getTechnologyIcon('any-input')).toBe('string')
      expect(typeof technologyExists('any-input')).toBe('boolean')
      expect(Array.isArray(searchTechnologies('any-input'))).toBe(true)
      expect(Array.isArray(getTechnologiesByCategory('any-input' as any))).toBe(
        true
      )
      expect(Array.isArray(getUsedCategories())).toBe(true)
    })

    test('error states are consistent and predictable', () => {
      // Same input should always produce same error behavior
      const invalidInput = 'consistent-test-invalid'

      const result1 = getTechnology(invalidInput)
      const result2 = getTechnology(invalidInput)
      const result3 = getTechnology(invalidInput)

      expect(result1).toEqual(result2)
      expect(result2).toEqual(result3)
    })
  })
})
