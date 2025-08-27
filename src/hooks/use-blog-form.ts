import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  blogSchema,
  BlogSchemaType,
  defaultValues,
  step1Schema,
  step2Schema,
  step3Schema,
} from "@/schemas/blog-schema"

export const useBlogForm = () => {
  const stepSchemas = [step1Schema, step2Schema, step3Schema]

  const form = useForm<BlogSchemaType>({
    resolver: zodResolver(blogSchema),
    defaultValues,
    mode: "onChange",
  })

  const validateStep = async (stepIndex: number) => {
    const fields = Object.keys(stepSchemas[stepIndex].shape)
    return form.trigger(fields as (keyof BlogSchemaType)[])
  }

  return { form, validateStep }
}
