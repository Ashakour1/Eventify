import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="mx-20 my-2 rounded px-4 py-2">
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
          <Link className="text-sm p-2 font-medium " to="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm p-2 font-medium " to="/contact">
            Contact Us
          </Link>
          <Button className="rounded-none bg-blue-500">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
