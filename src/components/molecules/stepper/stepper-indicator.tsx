import Box from "@/components/atoms/box"
import clsx from "clsx"
import { Check, Circle, Dot } from "lucide-react"
import React, { FC } from "react"

type StepperIndicatorProps = {
  isActive: boolean
  isCompleted: boolean
}

const StepperIndicator: FC<StepperIndicatorProps> = ({
  isActive,
  isCompleted,
}) => {
  return (
    <Box className="flex items-center justify-center">
      <Box
        className={clsx(
          "rounded-full border w-[40px] lg:w-[55px] h-[40px] lg:h-[55px] flex items-center justify-center",
          isActive ? "dark:border-gray-200 border-gray-500" : "",
          isCompleted && "bg-gray-200",
          !isCompleted && isActive && "bg-gray-200"
        )}
      >
        {/* not current step */}
        {!isActive && !isCompleted && <Dot size={20} />}
        {/* current step not completed */}
        {isActive && !isCompleted && (
          <Circle size={30} className="text-gray-900" />
        )}
        {/* not active completed */}
        {!isActive && isCompleted && (
          <Check size={20} className="text-gray-900" />
        )}
      </Box>
    </Box>
  )
}

export default StepperIndicator
