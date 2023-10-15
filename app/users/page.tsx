import React from "react";
import UserTable from "../components/table/UserTable";

interface UsersPageProps {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = ({ searchParams: { sortOrder } }: UsersPageProps) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
