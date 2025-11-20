export interface Author {
  id: string // UUID from auth.users
  name: string
  title: string
  image?: string
}

export interface InsightData {
  id?: number
  slug: string
  title: string
  excerpt: string
  content: string
  cover_image: string
  created_at: string
  author_id: string
  author?: Author
  category: string
  featured: boolean
}