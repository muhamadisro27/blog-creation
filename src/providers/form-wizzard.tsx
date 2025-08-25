import { Form } from "@/components/atoms/forms"
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
  useContext,
  useState,
} from "react"
import { useForm, UseFormReturn } from "react-hook-form"
import { steps as stepItems } from "@/utils/constant"

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

  const onSubmit = (values: BlogSchemaType) => {
    console.log(values)

    console.log(currentStep)

    console.log("submit")
  }

  const isLoading = form.formState.isValidating
  const isDisabled = form.formState.isSubmitting

  return (
    <FormWizzardContext.Provider
      value={{
        form,
        currentStep,
        isDisabled,
        isLoading,
        steps,
        setSteps,
        setCurrentStep,
        onSubmit,
      }}
    >
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
