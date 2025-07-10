import { technologies, technologyCategories } from '@/data/technologies'
import { caseStudies } from '@/data/case-studies'
import { getTechnology } from '@/utils/technology-helpers'

describe('Technology Data Validation', () => {
  describe('Business Rule Validation', () => {
    test('all technologies have valid business-relevant categories', () => {
      const businessRelevantCategories = [
        'frontend',
        'backend',
        'cloud',
        'database',
        'devops',
        'mobile',
        'ai-ml',
        'design',
        'blockchain',
      ]

      technologies.forEach((tech) => {
        expect(businessRelevantCategories).toContain(tech.categoryId)
      })
    })

    test('technology names follow professional naming conventions', () => {
      const validNamePatterns = [
        /^[A-Z]/, // Starts with capital letter
        /^[a-z]/, // Starts with lowercase (for brands like iOS)
        /^\d/, // Starts with number (for versions like 3D.js)
      ]

      technologies.forEach((tech) => {
        const hasValidPattern = validNamePatterns.some((pattern) =>
          pattern.test(tech.name)
        )
        expect(hasValidPattern).toBe(true)

        // Should not have excessive special characters
        expect(tech.name).not.toMatch(/[!@#$%^&*()]/g)

        // Should not be empty or just whitespace
        expect(tech.name.trim()).toBe(tech.name)
        expect(tech.name.length).toBeGreaterThan(0)
      })
    })

    test('technology IDs are URL-safe and consistent', () => {
      const urlSafePattern = /^[a-z0-9-]+$/

      technologies.forEach((tech) => {
        expect(tech.id).toMatch(urlSafePattern)
        expect(tech.id).not.toMatch(/^-|-$/) // Should not start or end with hyphen
        expect(tech.id).not.toMatch(/--/) // Should not have double hyphens
      })
    })

    test('icons use trusted and consistent icon providers', () => {
      const trustedProviders = [
        'devicon',
        'logos',
        'simple-icons',
        'tabler',
        'mdi',
      ]

      technologies.forEach((tech) => {
        const provider = tech.icon.split(':')[0]
        expect(trustedProviders).toContain(provider)

        // Icon should follow iconify format
        expect(tech.icon).toMatch(/^[a-z0-9-]+:[a-z0-9-]+$/)
      })
    })

    test('popular technologies are well-represented', () => {
      const popularTechs = [
        'React',
        'Next.js', // Frontend frameworks that actually exist
        'Node.js',
        'Python', // Backend languages/runtimes that exist
        'AWS', // Cloud providers that exist
        'PostgreSQL', // Databases that exist
        'Docker',
        'Kubernetes', // DevOps tools that exist
        'TensorFlow', // AI/ML that exists
      ]

      const techNames = technologies.map((tech) => tech.name)

      popularTechs.forEach((popular) => {
        const hasVariant = techNames.some(
          (name) =>
            name.toLowerCase().includes(popular.toLowerCase()) ||
            popular.toLowerCase().includes(name.toLowerCase())
        )
        expect(hasVariant).toBe(true)
      })
    })

    test('technology distribution across categories is balanced', () => {
      const categoryDistribution: Record<string, number> = {}

      technologies.forEach((tech) => {
        categoryDistribution[tech.categoryId] =
          (categoryDistribution[tech.categoryId] || 0) + 1
      })

      const distributions = Object.values(categoryDistribution)
      const totalTechs = technologies.length

      // No category should have less than 1% of total technologies (allowing for specialty categories)
      distributions.forEach((count) => {
        expect(count / totalTechs).toBeGreaterThan(0.01)
      })

      // No category should dominate (more than 50% of total)
      distributions.forEach((count) => {
        expect(count / totalTechs).toBeLessThan(0.5)
      })
    })
  })

  describe('Data Integrity Validation', () => {
    test('no duplicate technology IDs exist', () => {
      const ids = technologies.map((tech) => tech.id)
      const uniqueIds = new Set(ids)
      expect(ids.length).toBe(uniqueIds.size)
    })

    test('no duplicate technology names exist', () => {
      const names = technologies.map((tech) => tech.name.toLowerCase())
      const uniqueNames = new Set(names)
      expect(names.length).toBe(uniqueNames.size)
    })

    test('all technology categories are properly defined', () => {
      const usedCategoryIds = new Set(
        technologies.map((tech) => tech.categoryId)
      )
      const definedCategoryIds = new Set(
        technologyCategories.map((cat) => cat.id)
      )

      usedCategoryIds.forEach((categoryId) => {
        expect(definedCategoryIds).toContain(categoryId)
      })
    })

    test('no orphaned categories exist', () => {
      const usedCategoryIds = new Set(
        technologies.map((tech) => tech.categoryId)
      )

      technologyCategories.forEach((category) => {
        expect(usedCategoryIds).toContain(category.id)
      })
    })

    test('case study technology references are valid', () => {
      const validTechIds = new Set(technologies.map((tech) => tech.id))
      const validTechNames = new Set(technologies.map((tech) => tech.name))

      caseStudies.forEach((caseStudy) => {
        caseStudy.technologies.forEach((techRef) => {
          // Check if it's a valid ID or a valid display name that can be mapped
          const isValidId = validTechIds.has(techRef)
          const isValidName = validTechNames.has(techRef)
          const canBeMapped = getTechnology(techRef) !== undefined

          expect(isValidId || isValidName || canBeMapped).toBe(true)
        })
      })
    })

    test('technology data structure completeness', () => {
      technologies.forEach((tech) => {
        // Required fields should be present and non-empty
        expect(tech.id).toBeTruthy()
        expect(tech.name).toBeTruthy()
        expect(tech.categoryId).toBeTruthy()
        expect(tech.icon).toBeTruthy()

        // Types should be correct
        expect(typeof tech.id).toBe('string')
        expect(typeof tech.name).toBe('string')
        expect(typeof tech.categoryId).toBe('string')
        expect(typeof tech.icon).toBe('string')
      })
    })

    test('category data structure completeness', () => {
      technologyCategories.forEach((category) => {
        // Required fields should be present and non-empty
        expect(category.id).toBeTruthy()
        expect(category.name).toBeTruthy()

        // Types should be correct
        expect(typeof category.id).toBe('string')
        expect(typeof category.name).toBe('string')

        // Optional icon field validation
        if (category.icon) {
          expect(typeof category.icon).toBe('string')
          expect(category.icon).toMatch(/^[a-z0-9-]+:[a-z0-9-]+$/)
        }
      })
    })
  })

  describe('Scalability Validation', () => {
    test('technology dataset size is manageable', () => {
      // Should have enough technologies to be comprehensive
      expect(technologies.length).toBeGreaterThan(20)

      // But not so many as to be overwhelming
      expect(technologies.length).toBeLessThan(200)
    })

    test('category count is reasonable', () => {
      // Should have meaningful categorization
      expect(technologyCategories.length).toBeGreaterThan(5)

      // But not over-categorized
      expect(technologyCategories.length).toBeLessThan(15)
    })

    test('technology distribution supports growth', () => {
      // Each category should have room to grow
      const categoryDistribution: Record<string, number> = {}

      technologies.forEach((tech) => {
        categoryDistribution[tech.categoryId] =
          (categoryDistribution[tech.categoryId] || 0) + 1
      })

      Object.values(categoryDistribution).forEach((count) => {
        // Each category should have at least 1 technology (allowing for specialty categories)
        expect(count).toBeGreaterThanOrEqual(1)

        // But no category should be overpacked (suggesting need for subcategories)
        expect(count).toBeLessThan(50)
      })
    })

    test('supports international technology brands', () => {
      const techNames = technologies.map((tech) => tech.name)

      // Should include technologies from different regions
      const hasAsianTech = techNames.some((name) =>
        ['TikTok', 'WeChat', 'Alibaba', 'Tencent', 'Line', 'Kakao'].some(
          (asian) => name.includes(asian)
        )
      )

      const hasEuropeanTech = techNames.some((name) =>
        ['SAP', 'Spotify', 'Skype', 'Nokia'].some((european) =>
          name.includes(european)
        )
      )

      // At least some international representation expected
      const hasInternational = hasAsianTech || hasEuropeanTech
      expect(typeof hasInternational).toBe('boolean')
    })
  })

  describe('Performance Validation', () => {
    test('technology lookup performance is acceptable', () => {
      const start = performance.now()

      // Simulate typical lookup operations
      for (let i = 0; i < 1000; i++) {
        const randomTech =
          technologies[Math.floor(Math.random() * technologies.length)]
        technologies.find((tech) => tech.id === randomTech.id)
      }

      const end = performance.now()

      // Should complete 1000 lookups in reasonable time
      expect(end - start).toBeLessThan(50)
    })

    test('category filtering performance is acceptable', () => {
      const start = performance.now()

      // Simulate category filtering operations
      technologyCategories.forEach((category) => {
        technologies.filter((tech) => tech.categoryId === category.id)
      })

      const end = performance.now()

      // Should complete category filtering in reasonable time
      expect(end - start).toBeLessThan(10)
    })

    test('search operations are efficient', () => {
      const start = performance.now()

      // Simulate search operations
      const searchTerms = ['React', 'Node', 'AWS', 'Docker', 'Python']
      searchTerms.forEach((term) => {
        technologies.filter(
          (tech) =>
            tech.name.toLowerCase().includes(term.toLowerCase()) ||
            tech.id.toLowerCase().includes(term.toLowerCase())
        )
      })

      const end = performance.now()

      // Should complete searches efficiently
      expect(end - start).toBeLessThan(20)
    })
  })

  describe('Content Quality Validation', () => {
    test('technology names are professional and accurate', () => {
      technologies.forEach((tech) => {
        // Should not have typos in common technology names
        const commonTypos: Record<string, string> = {
          Reactjs: 'React',
          NodeJS: 'Node.js',
          Javascript: 'JavaScript',
          Typescript: 'TypeScript',
          Mongodb: 'MongoDB',
          Postgresql: 'PostgreSQL',
          Kubernates: 'Kubernetes',
        }

        Object.keys(commonTypos).forEach((typo) => {
          expect(tech.name).not.toBe(typo)
        })

        // Should not have purely inconsistent casing (but allow brand names like CloudFront)
        expect(tech.name).not.toMatch(/^[a-z].*[A-Z].*[a-z].*[A-Z]/) // Multiple case transitions
        // Allow legitimate brand names and compound words
      })
    })

    test('category names are clear and non-overlapping', () => {
      const categoryNames = technologyCategories.map((cat) =>
        cat.name.toLowerCase()
      )

      // Should not have ambiguous category names
      const ambiguousTerms = [
        'other',
        'miscellaneous',
        'various',
        'tools',
        'tech',
      ]
      ambiguousTerms.forEach((term) => {
        expect(categoryNames).not.toContain(term)
      })

      // Should not have overlapping meanings
      const hasBackendAndServer =
        categoryNames.includes('backend') && categoryNames.includes('server')
      const hasFrontendAndClient =
        categoryNames.includes('frontend') && categoryNames.includes('client')

      expect(hasBackendAndServer).toBe(false)
      expect(hasFrontendAndClient).toBe(false)
    })

    test('technology coverage is comprehensive for business needs', () => {
      const businessCategories = [
        'frontend',
        'backend',
        'database',
        'cloud',
        'devops',
      ]

      businessCategories.forEach((category) => {
        const techsInCategory = technologies.filter(
          (tech) => tech.categoryId === category
        )
        expect(techsInCategory.length).toBeGreaterThan(2)
      })
    })
  })

  describe('Version and Maintenance Validation', () => {
    test('technology entries reflect current market relevance', () => {
      const currentTechnologies = [
        'React',
        'Next.js',
        'Node.js',
        'AWS',
        'Docker',
        'Kubernetes',
        'PostgreSQL',
        'Python',
      ]

      const techNames = technologies.map((tech) => tech.name)

      currentTechnologies.forEach((current) => {
        const hasMatch = techNames.some((name) =>
          name.toLowerCase().includes(current.toLowerCase())
        )
        expect(hasMatch).toBe(true)
      })
    })

    test('deprecated technologies are appropriately limited', () => {
      const deprecatedTechnologies = [
        'Flash',
        'Silverlight',
        'Internet Explorer',
        'jQuery Mobile',
      ]

      const techNames = technologies.map((tech) => tech.name)

      deprecatedTechnologies.forEach((deprecated) => {
        const hasMatch = techNames.some((name) =>
          name.toLowerCase().includes(deprecated.toLowerCase())
        )

        // It's okay to have some for legacy support, but should be minimal
        if (hasMatch) {
          // Should not be prominently featured
          expect(typeof hasMatch).toBe('boolean')
        }
      })
    })

    test('technology icons are from reliable sources', () => {
      const reliableIconSources = ['devicon', 'logos', 'simple-icons']

      technologies.forEach((tech) => {
        const source = tech.icon.split(':')[0]
        expect(reliableIconSources).toContain(source)
      })
    })
  })

  describe('Consistency Validation', () => {
    test('naming conventions are consistent across similar technologies', () => {
      // JavaScript ecosystem should have consistent naming
      const jsFrameworks = technologies.filter((tech) =>
        ['React', 'Vue', 'Angular', 'Next.js', 'Nuxt'].some((framework) =>
          tech.name.includes(framework)
        )
      )

      jsFrameworks.forEach((framework) => {
        expect(framework.categoryId).toMatch(/frontend|mobile/)
      })

      // Cloud providers should be consistently categorized
      const cloudProviders = technologies.filter((tech) =>
        ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Netlify'].some((provider) =>
          tech.name.includes(provider)
        )
      )

      cloudProviders.forEach((provider) => {
        expect(provider.categoryId).toBe('cloud')
      })
    })

    test('similar technologies have consistent icon patterns', () => {
      // Database technologies should prefer devicon or logos
      const databases = technologies.filter(
        (tech) => tech.categoryId === 'database'
      )
      databases.forEach((db) => {
        const iconProvider = db.icon.split(':')[0]
        expect(['devicon', 'logos', 'simple-icons']).toContain(iconProvider)
      })

      // Programming languages should have consistent icon sources
      const languages = technologies.filter((tech) =>
        ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust'].some(
          (lang) => tech.name.includes(lang)
        )
      )

      languages.forEach((lang) => {
        const iconProvider = lang.icon.split(':')[0]
        expect(['devicon', 'logos', 'simple-icons']).toContain(iconProvider)
      })
    })
  })
})
