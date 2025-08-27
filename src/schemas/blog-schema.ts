import { z } from "zod"

export const step1Schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title minimum is 3 characters." })
    .max(50, { message: "Title maximum is 50 characters." }),
  slug: z.string().optional(),
  author: z
    .string()
    .min(3, { message: "Author minimum is 3 characters." })
    .max(50, { message: "Author maximum is 50 characters." }),
})

export const step2Schema = z.object({
  summary: z
    .string()
    .min(3, { message: "Summary minimum is 3 characters." })
    .max(200, { message: "Summary maximum is 200 characters." }),
  category: z
    .string({
      message: "Category is required",
    })
    .refine((data) => data !== "", {
      message: "Category is required",
    }),
})

export const step3Schema = z.object({
  content: z
    .string()
    .min(100, { message: "Content minimum is 100 characters." })
    .max(2000, { message: "Content maximum is 2000 characters." }),
})

export const blogSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
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
