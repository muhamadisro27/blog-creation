import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  Dispatch,
  SetStateAction,
  FC,
  ReactNode,
} from "react"
import { UseFormReturn } from "react-hook-form"
import { BlogSchemaType } from "@/schemas/blog-schema"
import { StepItemMap } from "@/types/common"
import { steps as stepItems } from "@/utils/constant"
import { useCreateBlog } from "@/services/mutation/blog"
import { slugify } from "@/utils/string"
import { BlogCategory, BlogRequestBody } from "@/types/blog"
import { useBlogForm } from "@/hooks/use-blog-form"

type FormWizzardContextType = {
  form: UseFormReturn<BlogSchemaType>
  currentStep: number
  isDisabled: boolean
  isLoading: boolean
  steps: StepItemMap
  validateStep: (stepIndex: number) => Promise<boolean>
  setSteps: Dispatch<SetStateAction<StepItemMap>>
  setCurrentStep: Dispatch<SetStateAction<number>>
  onSubmit: (values: BlogSchemaType) => void
}

const FormWizzardContext = createContext<FormWizzardContextType | undefined>(
  undefined
)

export const FormWizzardProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { form, validateStep } = useBlogForm()
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<StepItemMap>(stepItems)
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

  const value = useMemo(
    () => ({
      form,
      currentStep,
      isDisabled,
      isLoading,
      steps,
      validateStep,
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
      validateStep,
      setSteps,
      setCurrentStep,
      onSubmit,
    ]
  )

  return (
    <FormWizzardContext.Provider value={value}>
      {children}
    </FormWizzardContext.Provider>
  )
}

export const useFormWizzard = () => {
  const context = useContext(FormWizzardContext)
  if (!context)
    throw new Error("useFormWizzard must be used within FormWizzardProvider")
  return context
}
