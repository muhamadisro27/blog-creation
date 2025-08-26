import React from "react"
import { ModeToggle } from "@/components/molecules/mode"
import Link from "next/link"
import NavLink from "@/components/molecules/nav-link"
import Container from "@/components/molecules/container"
import Typography from "@/components/atoms/typography"
import Box from "@/components/atoms/box"
import NavMobile from "./nav-mobile"

const Navbar = () => {
  return (
    <Box
      as="nav"
      className="w-full flex flex-col justify-center items-center border-b shadow-sm"
    >
      <Container className="flex !p-6 justify-between items-center">
        <Typography as="h1" className="xl:text-xl text-lg font-semibold">
          <Link href="/">Blog Creation</Link>
        </Typography>

        <Box className="lg:block hidden">
          <Box className="flex items-center space-x-8">
            <NavLink />
            <ModeToggle />
          </Box>
        </Box>

        <NavMobile />
      </Container>
    </Box>
  )
}

export default Navbar
