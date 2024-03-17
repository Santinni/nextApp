"use server"
import { NavBar } from "@/src/components"

import ProfileDropdown from "../ProfileDropdown"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/users", label: "Users" },
  { href: "/products", label: "Products" },
  { href: "/admin", label: "Admin" },
  { href: "/upload", label: "Upload" },
]

const Header = () => {
  return (
    <div
      aria-label="header"
      className="flex bg-slate-200 p-5 gap-5 justify-between"
    >
      <NavBar navLinks={navLinks} ariaLabel="Main" />
      <ProfileDropdown />
    </div>
  )
}

export default Header
