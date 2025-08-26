import { BlogSchemaType } from "@/schemas/blog-schema"
import { LucideIcon } from "lucide-react"

export type NavLinkType = {
  url: string
  label: string
}

export type StepItem = {
  step: number
  title: string
  icon : LucideIcon
  description: string
  isCompleted: boolean
  isCurrentStep: boolean
  fields: (keyof BlogSchemaType)[]
}

export type StepItemMap = Record<number, StepItem>
