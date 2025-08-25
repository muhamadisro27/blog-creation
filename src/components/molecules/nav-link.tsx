"use client"

import { cn } from "@/lib/utils"
import { NavLinkType } from "@/types/common"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links: NavLinkType[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Blog",
    url: "/blog",
  },
]

const NavLink = () => {
  const pathname = usePathname()

  return (
    <>
      {links.map((link, i) => {
        const isActive =
          pathname === link.url || pathname.startsWith(link.url + "/")

        return (
          <Link
            key={i}
            href={link.url}
            className={cn("px-3 py-2", isActive && "font-bold")}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

export default NavLink
