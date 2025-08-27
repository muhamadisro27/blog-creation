"use client"

import Box from "@/components/atoms/box"
import { Stepper } from "@/components/molecules/stepper"
import { useFormWizzard } from "@/providers/form-wizzard"
import { Button } from "@/components/atoms/button"
import { ChevronLeft, LoaderCircleIcon } from "lucide-react"
import Link from "next/link"
import Breadcrumb from "@/components/organisms/breadcrumb-article"
import { Form } from "@/components/atoms/forms"
import StepContent from "./step-content"
import StepNavigator from "./step-navigator"
import { BlogSchemaType } from "@/schemas/blog-schema"

const WizzardForm = () => {
  const {
    steps,
    form,
    currentStep,
    isDisabled,
    isLoading,
    onSubmit,
    setSteps,
    setCurrentStep,
  } = useFormWizzard()

  const stepsItems = Object.values(steps)

  const nextStep = async () => {
    const valid = await form.trigger(stepsItems[currentStep].fields)

    if (!valid) return

    setCurrentStep((prev) => Math.min(prev + 1, stepsItems.length - 1))

    setSteps((prev) => ({
      ...prev,
      [currentStep + 1]: {
        ...prev[currentStep + 1],
        isCompleted: valid,
        isCurrentStep: false,
      },
      [currentStep + 2]: {
        ...prev[currentStep + 2],
        isCompleted: false,
        isCurrentStep: true,
      },
    }))
  }

  const prevStep = async () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))

    setSteps((prev) => ({
      ...prev,
      [currentStep]: {
        ...prev[currentStep],
        isCompleted: false,
        isCurrentStep: true,
      },
      [currentStep + 1]: {
        ...prev[currentStep + 1],
        isCompleted: false,
        isCurrentStep: false,
      },
    }))
  }

  return (
    <Box className="flex flex-col space-y-10 relative">
      <Box className="w-full flex md:flex-row flex-col space-y-2 justify-between items-center">
        <Button variant={"link"} asChild>
          <Link href={"/blog"}>
            <ChevronLeft />
            Back to blog page
          </Link>
        </Button>

        <Breadcrumb lastItem={"Create"} />
      </Box>

      {isLoading && (
        <LoaderCircleIcon className="animate-spin size-5 self-end absolute top-8 right-0" />
      )}

      <Stepper />

      <Form {...form}>
        <form>
          <StepContent steps={stepsItems} currentStep={currentStep} />

          <StepNavigator<BlogSchemaType>
            currentStep={currentStep}
            stepsLength={stepsItems.length}
            isDisabled={isDisabled}
            form={form}
            onNext={nextStep}
            onPrev={prevStep}
            onSubmit={onSubmit}
          />
        </form>
      </Form>
    </Box>
  )
}

export default WizzardForm
