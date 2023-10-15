import React from "react";
interface UserDetailPageProps {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: UserDetailPageProps) => {
  return <div>UserID: {id}</div>;
};

export default UserDetailPage;
