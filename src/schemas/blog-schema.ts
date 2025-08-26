import { z } from "zod"

export const blogSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title minimum is 3 characters." })
    .max(50, { message: "Title maximum is 50 characters." }),
  slug: z.string().optional(),
  author: z
    .string()
    .min(3, { message: "Author minimum is 3 characters." })
    .max(50, { message: "Author maximum is 50 characters." }),
  summary: z.string(),
  content: z.string(),
  category: z.string(),
  createdAt: z.string().optional(),
  publishedAt: z.string().optional(),
})

export type BlogSchemaType = z.infer<typeof blogSchema>

export const defaultValues: BlogSchemaType = {
  title: "",
  slug: "",
  author: "",
  summary: "",
  content: "",
  category: "",
}
