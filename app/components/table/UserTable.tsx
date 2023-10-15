import React from "react";
import { UserProps } from "../../interfaces";
import Link from "next/link";
import { sort } from "fast-sort";

interface UserTableProps {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: UserProps[] = await res.json();

  // Mapování sortOrder na klíče řazení
  const sortKeyMap: { [key: string]: keyof UserProps } = {
    username: "username",
    name: "name",
    email: "email",
  };

  const sortKey = sortKeyMap[sortOrder] || "name"; // Default na "name", pokud sortOrder není rozpoznán

  const sortedUsers = sort(users).asc((user) => user[sortKey]);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=username">Username</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{`${user.address.street}, ${user.address.city}`}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
