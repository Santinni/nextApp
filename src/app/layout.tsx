import "./globals.css"

import { ReactNode } from "react"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { NavBar } from "@/src/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codeguy's NextApp",
  description: "Generated by create next app",
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/users", label: "Users" },
  { href: "/products", label: "Products" },
  { href: "/admin", label: "Admin" },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <NavBar navLinks={navLinks} />
        <main className="p-5"> {children}</main>
      </body>
    </html>
  )
}
