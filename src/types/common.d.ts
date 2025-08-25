import { BlogSchemaType } from "@/schemas/blog-schema"

export type NavLinkType = {
  url: string
  label: string
}

export type StepItem = {
  step: number
  title: string
  description: string
  isCompleted: boolean
  isCurrentStep: boolean
  fields: (keyof BlogSchemaType)[]
}

export type StepItemMap = Record<number, StepItem>
