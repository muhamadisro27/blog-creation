import { ComponentPropsWithoutRef, ElementType } from "react"
import { cn } from "@/lib/utils"

type TypographyProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

const Typography = <T extends ElementType = "p">({
  as,
  children,
  className,
  ...props
}: TypographyProps<T>) => {
  const Component = as || "p"

  return (
    <Component
      className={cn("dark:text-gray-200 text-gray-800", className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
