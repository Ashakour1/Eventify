import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="">
      <div className="max-w-[1140px] mx-auto min-h-screen">
        <div className="flex flex-col justify-center items-center text-center w-9/12 mx-auto pt-14 space-y-3">
          <h1 className="text-3xl font-bold">
            Effortlessly Plan, Manage, and Enjoy Your Events with Efficient
            Tools
          </h1>
          <p className="text-lg text-gray-500 ">
            Eventify offers a comprehensive solution for event planning. Create
            events, manage attendees, and handle ticketing all in one place.
            With real-time updates and user authentication, organizing events
            has never been easier.
          </p>
          <div className="flex gap-4">
            <Link to="/register">
              <button
                type="button"
                className="border-customBlue rounded-md border-2 bg-customBlue hover:bg-customBlue/90 px-6 py-2 text-white"
              >
                Get Started
              </button>
            </Link>
            <Link to="/">
              <button className="border-customBlue rounded-md border-2 bg-transparent hover:bg-none px-6 py-2 text-black hover:bg-customBlue/45 hover:text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
