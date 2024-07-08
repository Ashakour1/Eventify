import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 space-y-3">
      <h1 className="uppercase tracking-widest text-gray-500 pl-2">
        404 | Not Found
      </h1>
      <Link to="/">
        <Button className="px-7 bg-customBlue">Go back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
