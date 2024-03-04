import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { NavBar } from "@/src/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codeguy's NextApp",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <NavBar />
        <main className="p-5"> {children}</main>
      </body>
    </html>
  )
}
