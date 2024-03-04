import { Suspense } from "react"

import Link from "next/link"

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
