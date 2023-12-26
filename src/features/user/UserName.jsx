import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="md: hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default UserName;
