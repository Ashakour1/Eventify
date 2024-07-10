import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-green-300 mx-20 my-2 rounded px-4 py-2">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center ">
        <div className="logo">
          <Link to="/">
            <p className="text-2xl font-bold">Eventify</p>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <Link className="text-sm p-2" to="/about">
            About Us
          </Link>
          <Link className="text-sm p-2 " to="/events">
            Events
          </Link>
          <Link className="text-sm p-2 " to="/contact">
            Contact Us
          </Link>
          <Button className="rounded-none">
            <Link to="/reg">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
