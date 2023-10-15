import React from "react";

const UserNotFound = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-center">404 - User Not Found</h1>
      <p className="text-center">
        The requested user could not be found.
        <br />
        Please check the URL in the address bar and try again.
      </p>
    </div>
  );
};

export default UserNotFound;
