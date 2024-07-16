import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="md:mx-20 mx-0  my-2 rounded md:px-4 px-4 py-2">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center ">
        <div className="logo">
          <Link to="/">
            <p className="text-2xl font-bold text-blue-500">Eventify</p>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <Link className="text-sm p-2 font-medium" to="/about">
            About Us
          </Link>
          <Link className="text-sm p-2 font-medium " to="/events">
            Events
          </Link>
          <Link className="text-sm p-2 font-medium " to="/contact">
            Contact Us
          </Link>
          <Button className="rounded-none bg-blue-500">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </div>
      <div onClick={handleOpen} className="md:hidden block">
        {isOpen ? (
          <button className="md:hidden absolute top-4 right-4">
            <CiMenuBurger className="text-2xl" />
          </button>
        ) : (
          <button className="md:hidden absolute top-4 right-4">
            <CiMenuBurger className="text-2xl" />
          </button>
        )}
      </div>
      {isOpen ? (
        <div className="md:hidden  w-full mt-2 rounded   h-58  text-black ">
          <div className="font-bold flex flex-col">
            <Link className="p-4 border-b" onClick={handleClose} to="/about">
              About
            </Link>
            <Link className="p-4 border-b" onClick={handleClose} to="/contact">
              Contact
            </Link>
            <Link className="p-4 border-b" onClick={handleClose} to="/events">
              Events
            </Link>
            <button
              onClick={handleOpen}
              className="bg-blue-600 font-bold text-white py-2 items-center m-2 px-4 rounded-md"
            >
              Getstarted
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
