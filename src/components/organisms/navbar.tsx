import React from "react"
import { ModeToggle } from "@/components/molecules/mode"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-semibold">
        <Link href="/">Blog Creation</Link>
      </h1>
      <ModeToggle />
    </div>
  )
}

export default Navbar
