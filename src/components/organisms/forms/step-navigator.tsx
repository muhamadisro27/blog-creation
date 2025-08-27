"use client"

import Box from "@/components/atoms/box"
import { Button } from "@/components/atoms/button"
import clsx from "clsx"
import { FieldValues, UseFormReturn } from "react-hook-form"

type StepNavigatorProps<T extends FieldValues> = {
  currentStep: number
  stepsLength: number
  isDisabled: boolean
  form: UseFormReturn<T>
  onNext: () => void
  onPrev: () => void
  onSubmit: (values: T) => void
}

const StepNavigator = <T extends FieldValues>({
  currentStep,
  stepsLength,
  isDisabled,
  form,
  onNext,
  onPrev,
  onSubmit,
}: StepNavigatorProps<T>) => {
  return (
    <Box
      className={clsx(
        "flex mt-4 w-full",
        currentStep === 0 ? "justify-end" : "justify-between"
      )}
    >
      {currentStep > 0 && (
        <Button
          disabled={isDisabled}
          type="button"
          onClick={onPrev}
          className="cursor-pointer"
        >
          Back
        </Button>
      )}

      {currentStep < stepsLength - 1 ? (
        <Button
          disabled={isDisabled}
          type="button"
          onClick={onNext}
          className="cursor-pointer"
        >
          Next
        </Button>
      ) : (
        <Button
          disabled={isDisabled}
          type="button"
          onClick={form.handleSubmit(onSubmit)}
          className="cursor-pointer"
        >
          Submit
        </Button>
      )}
    </Box>
  )
}

export default StepNavigator
