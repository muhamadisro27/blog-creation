import Typography from "@/components/atoms/typography"
import clsx from "clsx"
import React, { FC, ReactNode } from "react"

type StepperDescriptionProps = {
  children: ReactNode
  isActive: boolean
}

const StepperDescription: FC<StepperDescriptionProps> = ({
  isActive,
  children,
}) => {
  return (
    <Typography
      as="span"
      className={clsx(
        "text-xs pt-2 lg:w-full w-full md:max-w-[140px] leading-5",
        isActive
          ? "dark:text-gray-300 text-gray-900 font-semibold"
          : "dark:text-gray-600 text-gray-400"
      )}
    >
      {children}
    </Typography>
  )
}

export default StepperDescription
