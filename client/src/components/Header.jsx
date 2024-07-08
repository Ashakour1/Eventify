import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-customBlue rounded-2xl mx-10 my-4">
      <div className="flex justify-between items-center max-w-[1140px] mx-auto h-16 mt-1">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" className="w-10" />
          </Link>
        </div>
        <div className="hidden md:flex gap-3 text-center items-center">
          <Link className="font-medium p-2" to="/">
            Home
          </Link>
          <Link className="font-medium p-2" to="/events">
            Events
          </Link>
          <Link className="font-medium p-2" to="/about">
            About
          </Link>
          <Link className="font-medium p-2" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
