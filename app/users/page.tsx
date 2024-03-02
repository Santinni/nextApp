import { Suspense } from "react"

import Link from "next/link"

import { Loading, UserTable } from "@/app/components"

interface UsersPageProps {
  searchParams: {
    sortOrder: string
  }
}

const UsersPage = ({ searchParams: { sortOrder } }: UsersPageProps) => {
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
