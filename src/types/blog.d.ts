export interface BlogType {
  id: number
  title: string
  slug: string
  author: string
  excerpt: string
  content?: string
  category: BlogCategory
  status: BlogStatus
  createdAt: number
  publishedAt: number | null
}

export type BlogCategory = "tech" | "lifestyle" | "business"
export type BlogStatus = "draft" | "published"
