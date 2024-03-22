import { Suspense } from "react"

import Link from "next/link"
import { Metadata } from "next/types"

import { Loading, UserTable } from "@/src/components"

interface UsersPageProps {
  searchParams: {
    sortOrder: string
  }
}

const UsersPage = (props: UsersPageProps) => {
  const {
    searchParams: { sortOrder },
  } = props
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<Loading />}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage

export const metadata: Metadata = {
  title: "Users",
  description: "Users",
  keywords: "Users",
}
