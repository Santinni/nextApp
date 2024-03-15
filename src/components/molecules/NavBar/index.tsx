"use client"

import { FC } from "react"

import clsx from "clsx"
import { useSession } from "next-auth/react"
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
  const { status, data: session } = useSession()

  return (
    <nav
      aria-label={ariaLabel}
      className={clsx(
        "flex bg-slate-200 gap-5  p-5 justify-between",
        isVertical && "flex-col"
      )}
    >
      <div className={clsx("flex justify gap-5", isVertical && "flex-col")}>
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
      </div>
      {status === "authenticated" && (
        <div className={clsx("flex gap-5", isVertical && "flex-col")}>
          <img
            src={session.user?.image!}
            alt={session.user?.name!}
            className="h-8 w-8 rounded-full"
          />
          <div> {session.user?.name}</div>
          <Link href="/api/auth/signout">Sign out</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </nav>
  )
}

export default NavBar
