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

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  })
  const data: UserProps[] = await res.json()
  const sortKeyMap: { [key: string]: keyof UserProps } = {
    username: "username",
    name: "name",
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      renderHeader: () => <Link href="/users?sortOrder=name">Name</Link>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      renderHeader: () => <Link href="/users?sortOrder=email">Email</Link>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (value, record) =>
        `${record.address.street}, ${record.address.city}`,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
  ]

  return <Table<UserProps> columns={columns} data={sortedUsers} />
}

export default UserTable
