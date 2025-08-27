import Box from "@/components/atoms/box"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import { StepItemMap } from "@/types/common"
import { FC } from "react"

type StepContentProps = {
  currentStep: number
  steps: StepItemMap
}

const StepContent: FC<StepContentProps> = ({
  steps,
  currentStep,
}: StepContentProps) => {
  return (
    <Box className="space-y-8 flex flex-col relative">
      {steps[currentStep].step === 1 && <Step1 />}
      {steps[currentStep].step === 2 && <Step2 />}
      {steps[currentStep].step === 3 && <Step3 />}
      {steps[currentStep].step === 4 && <Step4 />}
    </Box>
  )
}

export default StepContent
