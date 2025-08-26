export interface BlogType {
  id: string
  title: string
  slug: string
  author: string
  summary: string
  content?: string
  category: BlogCategory
  createdAt: number
  publishedAt: number | null
}

export type BlogCategoryMap = {
  [K in BlogCategory]: {
    label: string
    value: BlogCategory
  }
}

export type BlogRequestBody = {
  title: string
  slug: string
  author: string
  summary: string
  content: string
  category: BlogCategory
  createdAt: number
  publishedAt: number | null
}

export type BlogCategory = "tech" | "lifestyle" | "business"

export type BlogData = Record<string, string | number | null | undefined>
