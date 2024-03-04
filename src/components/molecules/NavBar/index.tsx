"use client"

import { FC } from "react"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavBarProps {
  navLinks: {
    href: string
    label: string
  }[]
  isVertical?: boolean
  ariaLabel: string
}

const NavBar: FC<NavBarProps> = ({ navLinks, isVertical, ariaLabel }) => {
  const pathname = usePathname()

  return (
    <nav
      aria-label={ariaLabel}
      className={clsx("flex bg-slate-200 p-5 gap-5", isVertical && "flex-col")}
    >
      {navLinks.map((navLink) => {
        const isActive =
          navLink.href === "/"
            ? pathname === navLink.href
            : pathname.startsWith(navLink.href)
        return (
          <Link
            key={navLink.href}
            href={navLink.href}
            className={isActive ? "font-bold" : undefined}
          >
            {navLink.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavBar
