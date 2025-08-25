import Typography from "@/components/atoms/typography"
import clsx from "clsx"
import React, { FC, ReactNode } from "react"

type StepTitleProps = {
  children: ReactNode
  isActive: boolean
}

const StepperTitle: FC<StepTitleProps> = ({ children, isActive }) => {
  return (
    <Typography
      as="h5"
      className={clsx(
        "text-sm font-medium md:mt-5",
        isActive
          ? "dark:text-gray-300 text-gray-900 font-semibold"
          : "dark:text-gray-600 text-gray-400"
      )}
    >
      {children}
    </Typography>
  )
}

export default StepperTitle
