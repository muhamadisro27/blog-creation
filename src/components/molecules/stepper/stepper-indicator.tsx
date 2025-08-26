import Box from "@/components/atoms/box"
import clsx from "clsx"
import { LucideIcon } from "lucide-react"
import React, { FC } from "react"

type StepperIndicatorProps = {
  isActive: boolean
  isCompleted: boolean
  icon: LucideIcon
}

const StepperIndicator: FC<StepperIndicatorProps> = ({
  isActive,
  isCompleted,
  icon: Icon,
}) => {
  return (
    <Box className="flex items-center justify-center">
      <Box
        className={clsx(
          "rounded-full border-2 w-[40px] lg:w-[55px] h-[40px] lg:h-[55px] flex items-center justify-center",
          isActive ? "dark:border-gray-200 border-gray-900" : "",
          isCompleted && "bg-gray-200",
          !isCompleted && isActive && "bg-gray-200"
        )}
      >
        <Icon
          className={
            isActive || isCompleted
              ? "text-gray-900 dark:text-gray-900"
              : "dark:gray-500 text-gray-400"
          }
        />
      </Box>
    </Box>
  )
}

export default StepperIndicator
