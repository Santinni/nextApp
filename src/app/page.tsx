import { getServerSession } from "next-auth"

import { ProductCard } from "@/src/components"

import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <h1>Home page</h1>
      <p>Session: {JSON.stringify(session)}</p>
      <ProductCard />
    </main>
  )
}
