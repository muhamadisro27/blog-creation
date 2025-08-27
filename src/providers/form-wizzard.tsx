import {
  blogSchema,
  BlogSchemaType,
  defaultValues,
} from "@/schemas/blog-schema"
import { StepItemMap } from "@/types/common"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { useForm, UseFormReturn } from "react-hook-form"
import { steps as stepItems } from "@/utils/constant"
import { BlogCategory, BlogRequestBody } from "@/types/blog"
import { slugify } from "@/utils/string"
import { useCreateBlog } from "@/services/mutation/blog"

type FormWizzardContextType = {
  form: UseFormReturn<BlogSchemaType>
  currentStep: number
  isDisabled: boolean
  isLoading: boolean
  steps: StepItemMap
  setSteps: Dispatch<SetStateAction<StepItemMap>>
  setCurrentStep: Dispatch<SetStateAction<number>>
  onSubmit: (values: BlogSchemaType) => void
}

export const FormWizzardContext = createContext<
  FormWizzardContextType | undefined
>(undefined)

type FormWizzardProviderType = {
  children: ReactNode
}

export const FormWizzardProvider: FC<FormWizzardProviderType> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<StepItemMap>(stepItems)
  const form = useForm<BlogSchemaType>({
    resolver: zodResolver(blogSchema),
    defaultValues,
    mode: "onChange",
  })

  const { mutateAsync, isPending, isSuccess } = useCreateBlog()

  const isLoading = form.formState.isValidating || isPending
  const isDisabled = form.formState.isSubmitting || isPending

  const onSubmit = useCallback(
    async (values: BlogSchemaType) => {
      try {
        setSteps((prev) => ({
          ...prev,
          [4]: {
            ...prev[4],
            isCompleted: true,
            isCurrentStep: false,
          },
        }))

        const { title, author, category, content, summary, slug } = values

        const currentDate = Date.now()

        const body: BlogRequestBody = {
          title,
          slug: slug ?? slugify(title),
          content,
          author,
          category: category as BlogCategory,
          summary,
          createdAt: currentDate,
          publishedAt: currentDate,
        }

        await mutateAsync(body)

        if (isSuccess) localStorage.setItem("blogForm", JSON.stringify(body))
      } catch (error) {
        console.error(error)
        setSteps((prev) => ({
          ...prev,
          [4]: {
            ...prev[4],
            isCompleted: false,
            isCurrentStep: true,
          },
        }))
      }
    },
    [mutateAsync, isSuccess]
  )

  const contextMenu = useMemo(
    () => ({
      form,
      currentStep,
      isDisabled,
      isLoading,
      steps,
      setSteps,
      setCurrentStep,
      onSubmit,
    }),
    [
      form,
      currentStep,
      isDisabled,
      isLoading,
      steps,
      setSteps,
      setCurrentStep,
      onSubmit,
    ]
  )

  return (
    <FormWizzardContext.Provider value={contextMenu}>
      {children}
    </FormWizzardContext.Provider>
  )
}

export const useFormWizzard = () => {
  const context = useContext(FormWizzardContext)

  if (!context) {
    throw new Error("useFormWizzard must be used within FormWizzardProvider")
  }

  return context
}
