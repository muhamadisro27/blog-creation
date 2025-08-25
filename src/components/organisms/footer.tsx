import React, { ComponentProps, FC } from "react"
import Container from "@/components/molecules/container"
import Typography from "@/components/atoms/typography"

type FooterProps = {} & ComponentProps<"footer">

const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
    <Container className="flex flex-col items-center" as="footer" {...props}>
      <Typography
        as="span"
        className="text-center text-xs lg:text-sm"
      >
       Blog Creation &copy; Muhamad Isro Sabanur - All rights reserved.
      </Typography>
    </Container>
  )
}

export default Footer
