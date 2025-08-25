"use client"
import Box from "@/components/atoms/box"
import { Stepper } from "@/components/molecules/stepper"
import { useFormWizzard } from "@/providers/form-wizzard"
import { Button } from "@/components/atoms/button"
import Step1 from "./step1"
import clsx from "clsx"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import { ChevronLeft, LoaderCircleIcon } from "lucide-react"
import Link from "next/link"
import BreadcrumbArticle from "@/components/organisms/breadcrumb-article"

const WizzardForm = () => {
  const {
    steps,
    setSteps,
    form,
    currentStep,
    isDisabled,
    isLoading,
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
      <Box className="w-full flex justify-between items-center">
        <Button variant={"link"} asChild>
          <Link href={"/blog"}>
            <ChevronLeft />
            Back
          </Link>
        </Button>

        <BreadcrumbArticle lastItem={'Create'} />
      </Box>

      {isLoading && (
        <LoaderCircleIcon className="animate-spin size-5 self-end absolute top- right-0" />
      )}

      <Stepper />

      {stepsItems[currentStep].step === 1 && <Step1 />}
      {stepsItems[currentStep].step === 2 && <Step2 />}
      {stepsItems[currentStep].step === 3 && <Step3 />}
      {stepsItems[currentStep].step === 4 && <Step4 />}

      <Box
        className={clsx(
          "flex mt-4 w-full",
          stepsItems[currentStep].step === 1 ? "justify-end" : "justify-between"
        )}
      >
        {currentStep > 0 && (
          <Button
            disabled={isDisabled}
            className="cursor-pointer"
            type="button"
            onClick={prevStep}
          >
            Back
          </Button>
        )}
        {currentStep < stepsItems.length - 1 ? (
          <Button
            disabled={isDisabled}
            className="cursor-pointer"
            type="button"
            onClick={nextStep}
          >
            Next
          </Button>
        ) : (
          <Button
            disabled={isDisabled}
            className="cursor-pointer"
            type="submit"
          >
            Submit
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default WizzardForm
