"use client"
import Box from "@/components/atoms/box"
import { AlignJustify, X } from "lucide-react"
import { useState } from "react"
import NavLink from "@/components/molecules/nav-link"
import { ModeToggle } from "@/components/molecules/mode"

const NavMobile = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Box className="block lg:hidden">
        <AlignJustify onClick={() => setOpenMenu(!openMenu)} />
      </Box>

      {openMenu && (
        <Box
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenMenu(false)}
        />
      )}

      <Box
        className={`fixed top-0 right-0 h-full w-64 bg-background dark:bg-background shadow-lg z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Box className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold">Menu</span>
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        </Box>

        <Box className="flex flex-col space-y-4 p-6">
          <NavLink />
          <ModeToggle />
        </Box>
      </Box>
    </>
  )
}

export default NavMobile
