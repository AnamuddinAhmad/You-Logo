import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="px-4 py-2 text-3xl text-center text-white bg-orange-700">
        User : {userid.toUpperCase()}{" "}
      </h1>
    </>
  );
}

export default User;
