import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>This is Users</h2>
      <div>
        {users.map((user) => (
          <User key={users.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
