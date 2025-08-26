import { BlogData } from "@/types/blog";
import { StepItemMap } from "@/types/common"

export const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

export function mapBlogDataToSteps(blogData: BlogData, steps: StepItemMap) {
  const mapped: Record<
    number,
    { step: number; title: string; data: Record<string, string | null> }
  > = {}

  for (const [stepKey, stepItem] of Object.entries(steps)) {
    mapped[Number(stepKey)] = {
      step: stepItem.step,
      title: stepItem.title,
      data: stepItem.fields.reduce((acc, field) => {
        const value = blogData[field]
        acc[field] =
          value !== undefined && value !== null ? String(value) : null
        return acc
      }, {} as Record<string, string | null>),
    }
  }

  return mapped
}
