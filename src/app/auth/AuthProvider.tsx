"use client"
import React from "react"

import { SessionProvider } from "next-auth/react"

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
