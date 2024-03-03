"use client"

import { FC } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavBarProps {
  navLinks: {
    href: string
    label: string
  }[]
  orientation?: "horizontal" | "vertical"
}

const NavBar: FC<NavBarProps> = ({ navLinks }) => {
  const pathname = usePathname()

  return (
    <nav aria-label="Main" className="flex bg-slate-200 p-5">
      {navLinks.map((navLink) => {
        const isActive =
          navLink.href === "/"
            ? pathname === navLink.href
            : pathname.startsWith(navLink.href)
        return (
          <Link
            key={navLink.href}
            href={navLink.href}
            className={isActive ? "font-bold mr-5" : "mr-5"}
          >
            {navLink.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavBar
