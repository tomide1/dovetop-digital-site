import {
  teamMembers,
  getAuthors,
  getAuthorByName,
  TeamMember,
} from '@/data/team'

describe('Team Data Structure', () => {
  test('teamMembers array exists, is not empty, and has expected structure', () => {
    expect(Array.isArray(teamMembers)).toBe(true)
    expect(teamMembers.length).toBeGreaterThan(0)

    // Test first team member has all required fields and correct types
    const firstMember: TeamMember = teamMembers[0]
    expect(firstMember).toHaveProperty('id')
    expect(typeof firstMember.id).toBe('string')
    expect(firstMember).toHaveProperty('name')
    expect(typeof firstMember.name).toBe('string')
    expect(firstMember).toHaveProperty('title')
    expect(typeof firstMember.title).toBe('string')
    expect(firstMember).toHaveProperty('image')
    expect(typeof firstMember.image).toBe('string')
    expect(firstMember).toHaveProperty('alt')
    expect(typeof firstMember.alt).toBe('string')

    // Test optional properties have correct types when present
    if (firstMember.bio) {
      expect(typeof firstMember.bio).toBe('string')
    }
    if (firstMember.isAuthor) {
      expect(typeof firstMember.isAuthor).toBe('boolean')
    }
    if (firstMember.authorBio) {
      expect(typeof firstMember.authorBio).toBe('string')
    }
    if (firstMember.socialLinks) {
      expect(typeof firstMember.socialLinks).toBe('object')
      if (firstMember.socialLinks.linkedin) {
        expect(typeof firstMember.socialLinks.linkedin).toBe('string')
      }
      if (firstMember.socialLinks.twitter) {
        expect(typeof firstMember.socialLinks.twitter).toBe('string')
      }
    }
  })

  test('all team member ids are unique', () => {
    const ids = teamMembers.map((member) => member.id)
    const uniqueIds = new Set(ids)
    expect(ids.length).toBe(uniqueIds.size)
  })

  test('all team member names are unique', () => {
    const names = teamMembers.map((member) => member.name)
    const uniqueNames = new Set(names)
    expect(names.length).toBe(uniqueNames.size)
  })

  test('image paths follow expected pattern', () => {
    teamMembers.forEach((member) => {
      expect(member.image).toMatch(/^\/images\/team\/[a-z-]+\.svg$/)
      // Verify image filename matches id pattern
      const expectedImagePath = `/images/team/${member.id}.svg`
      expect(member.image).toBe(expectedImagePath)
    })
  })

  test('alt text is properly formatted', () => {
    teamMembers.forEach((member) => {
      expect(member.alt).toContain(member.name)
      expect(member.alt.toLowerCase()).toContain('headshot')
    })
  })

  test('getAuthors function returns only members who are authors', () => {
    const authors = getAuthors()
    expect(Array.isArray(authors)).toBe(true)

    authors.forEach((author) => {
      expect(author.isAuthor).toBe(true)
      expect(typeof author.authorBio).toBe('string')
      expect(author.authorBio).toBeTruthy()
    })
  })

  test('getAuthors returns at least one author', () => {
    const authors = getAuthors()
    expect(authors.length).toBeGreaterThan(0)
  })

  test('getAuthorByName returns correct author when found', () => {
    const authors = getAuthors()
    if (authors.length > 0) {
      const firstAuthor = authors[0]
      const foundAuthor = getAuthorByName(firstAuthor.name)

      expect(foundAuthor).toBeDefined()
      expect(foundAuthor?.name).toBe(firstAuthor.name)
      expect(foundAuthor?.isAuthor).toBe(true)
    }
  })

  test('getAuthorByName returns undefined for non-existent author', () => {
    const result = getAuthorByName('Non Existent Author')
    expect(result).toBeUndefined()
  })

  test('getAuthorByName returns undefined for team member who is not an author', () => {
    const nonAuthors = teamMembers.filter((member) => !member.isAuthor)
    if (nonAuthors.length > 0) {
      const result = getAuthorByName(nonAuthors[0].name)
      expect(result).toBeUndefined()
    }
  })

  test('authors have required author-specific properties', () => {
    const authors = getAuthors()
    authors.forEach((author) => {
      expect(author.isAuthor).toBe(true)
      expect(typeof author.authorBio).toBe('string')
      expect(author.authorBio).toBeTruthy()
      expect(author.authorBio!.length).toBeGreaterThan(0)
    })
  })

  test('team members match existing team image files', () => {
    const expectedTeamMembers = [
      'thomas-rivera',
      'jasmine-lee',
      'michael-chen',
      'olivia-mitchell',
      'priya-patel',
      'sarah-johnson',
      'alex-rodriguez',
      'david-wilson',
    ]

    const actualIds = teamMembers.map((member) => member.id).sort()
    expectedTeamMembers.sort()

    expect(actualIds).toEqual(expect.arrayContaining(expectedTeamMembers))
  })
})
