import { cn } from "@/lib/utils"
import { ComponentProps, FC, ReactNode } from "react"
import Box from "@/components/atoms/box"

type ContainerProps = {
  children: ReactNode
  className?: string
} & ComponentProps<typeof Box>

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <Box className={cn(className, "p-6 max-w-7xl w-full")} {...props}>
      {children}
    </Box>
  )
}

export default Container
