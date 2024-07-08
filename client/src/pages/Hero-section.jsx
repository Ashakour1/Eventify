import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <main>
      <div className="max-w-[1240px] pt-16 mx-auto h-full flex flex-col items-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Manage with Ease, Impress with Results
          </h1>
          <p className="text-base md:text-lg text-gray-500 mt-4 max-w-[600px] mx-auto">
            Eventify combines all the tools you need to plan, manage, and execute events into one platform. Enjoy the endless possibilities of creating perfect events with minimal effort.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link to="/events">
              <button className="py-2 px-4 md:py-3 md:px-6 bg-gray-200 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">
                Explore Events
              </button>
            </Link>
            <Link to="/contact">
              <button className="py-2 px-4 md:py-3 md:px-6 border border-gray-300 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
