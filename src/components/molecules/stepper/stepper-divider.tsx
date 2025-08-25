import Box from "@/components/atoms/box"
import clsx from "clsx"
import React, { FC } from "react"

type StepperDividerProps = {
  isCompleted?: boolean
}

const StepperDivider: FC<StepperDividerProps> = ({ isCompleted = false }) => {
  return (
    <Box
      className={clsx(
        "border-b border-b-300/30 absolute left-[40px] w-[140px] md:left-[40px] md:w-[140px] lg:left-[54px] lg:w-[190px] xl:left-[55px] xl:w-[253px]",
        isCompleted ? "dark:border-gray-200 border-gray-500" : ""
      )}
    />
  )
}

export default StepperDivider
