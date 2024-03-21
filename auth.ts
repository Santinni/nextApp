import type { NextAuthConfig } from "next-auth"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    if (credentials.username === "admin" && credentials.password === "admin") {
      return { name: "Admin" }
    } else return null
  },
})

const config = {
  providers: [Google, credentialsConfig],
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
