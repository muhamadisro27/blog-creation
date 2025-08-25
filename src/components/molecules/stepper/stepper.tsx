"use client"

import Box from "@/components/atoms/box"
// import { steps } from "@/utils/constant"
import { useIsMobile } from "@/hooks/use-mobile"
import StepperIndicator from "./stepper-indicator"
import StepperDivider from "./stepper-divider"
import StepperTitle from "./stepper-title"
import StepperDescription from "./stepper-description"
import { useFormWizzard } from "@/providers/form-wizzard"

const Stepper = () => {
  const isMobile = useIsMobile()
  const { steps } = useFormWizzard()
  const stepsItems = Object.values(steps)

  return (
    <Box className="flex flex-col md:flex-row w-full lg:space-y-0 space-y-5">
      {stepsItems.map((item, idx) => {
        const lastStep = stepsItems.length - 1
        const isLastStep = idx !== lastStep

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

              {isLastStep && !isMobile && (
                <StepperDivider isCompleted={item.isCompleted} />
              )}
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
