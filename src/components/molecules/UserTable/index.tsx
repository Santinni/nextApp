import { sort } from "fast-sort"
import Link from "next/link"

import type { Column } from "@/src/components/atoms/Table"
import Table from "@/src/components/atoms/Table"
import { UserProps } from "@/src/interfaces"

interface UserTableProps {
  sortOrder: string
}

const UserTable = async (props: UserTableProps) => {
  const { sortOrder } = props

  const res = await fetch("http://localhost:3030/api/users", {
    cache: "no-store",
  })
  const data: UserProps[] = await res.json()
  const sortKeyMap: { [key: string]: keyof UserProps } = {
    username: "username",
    id: "id",
    name: "name",
    surname: "surname",
    email: "email",
  }
  const sortKey = sortKeyMap[sortOrder] || "name"
  const sortedUsers = sort(data).asc((user) => user[sortKey])

  const columns: Column<UserProps>[] = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      renderHeader: () => (
        <Link href="/users?sortOrder=username">Username</Link>
      ),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      renderHeader: () => <Link href="/users?sortOrder=id">ID</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      renderHeader: () => <Link href="/users?sortOrder=name">Name</Link>,
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
      renderHeader: () => <Link href="/users?sortOrder=surname">Surname</Link>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      renderHeader: () => <Link href="/users?sortOrder=email">Email</Link>,
    },
    {
      title: "Registered At",
      dataIndex: "registeredAt",
      key: "registeredAt",
    },
    {
      title: "Followers",
      dataIndex: "followers",
      key: "followers",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ]

  return <Table<UserProps> columns={columns} data={sortedUsers} />
}

export default UserTable
