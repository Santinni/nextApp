import "./globals.css"

import { ReactNode } from "react"

import { Inter } from "next/font/google"
import { Metadata } from "next/types"

import { Header } from "@/src/components"

import AuthProvider from "./authProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend vývoj - React, NextJS, TypeScript | Karel Kutchan",
  description:
    "Jsem frontend vývojář v React, TypeScript a NextJS. Specializuji se na vývoj webových aplikací, přináším inovace a zlepšuji UX.",
  keywords:
    "Karel Kutchan, Frontend Vývojář, React, NextJS, TypeScript, UI/UX Design, Webové Aplikace, Web Development, Vývoj Aplikací",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="p-5"> {children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
