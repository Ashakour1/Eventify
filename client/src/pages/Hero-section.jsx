"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const words = [
    {
      text: "Effortlessly",
      className: "text-[35px]",
    },
    {
      text: "Plan ,",
      className: "text-[35px]",
    },
    {
      text: "Manage ,",
      className: "text-[35px]",
    },
    {
      text: "Enjoy",
      className: "text-[35px]",
    },
    {
      text: "Events",
      className: "text-[35px]",
    },
    {
      text: "With",
      className: "text-[35px]",
    },
    {
      text: "Eventify.",
      className: "text-[35px] text-customBlue",
    },
  ];

 
  return (
    <main className="">
      <div className="max-w-[1040px] mx-auto min-h-screen">
        <div className="flex flex-col justify-center items-center text-center w-9/12 mx-auto pt-24 space-y-6">
          <TypewriterEffect words={words} fontSize="text-3xl" />

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
                className="border-customBlue rounded-md border-2 bg-customBlue hover:bg-customBlue/90 px-6 py-2 text-white font-semibold"
              >
                Get Started
              </button>
            </Link>
            <Link to="/">
              <button className="border-customBlue rounded-md border-2 bg-transparent hover:bg-none px-6 py-2 text-black font-semibold">
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
