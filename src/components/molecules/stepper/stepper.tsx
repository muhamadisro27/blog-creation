"use client"

import Box from "@/components/atoms/box"
import StepperIndicator from "./stepper-indicator"
import StepperTitle from "./stepper-title"
import StepperDescription from "./stepper-description"
import { useFormWizzard } from "@/providers/form-wizzard"

const Stepper = () => {
  const { steps } = useFormWizzard()
  const stepsItems = Object.values(steps)

  return (
    <Box className="flex flex-col md:flex-row w-full lg:space-y-0 space-y-5">
      {stepsItems.map((item) => {
        return (
          <Box
            className="flex-1 flex md:flex-col items-center justify-start gap-x-4 text-left md:text-center"
            key={item.step}
          >
            <Box className="flex items-center w-max relative">
              <StepperIndicator
                isActive={item.isCurrentStep}
                isCompleted={item.isCompleted}
              />
            </Box>

            <Box className="flex flex-col items-start md:items-center">
              <StepperTitle isActive={item.isCompleted || item.isCurrentStep}>
                {item.title}
              </StepperTitle>
              <StepperDescription
                isActive={item.isCompleted || item.isCurrentStep}
              >
                {item.description}
              </StepperDescription>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default Stepper
