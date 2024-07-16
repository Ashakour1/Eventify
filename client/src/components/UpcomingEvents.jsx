import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/button";

const Upcoming = () => {
  return (
    <div className="max-w-[1140px] mx-auto h-[600px]">
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">Discover</h2>
        <h1 className="text-3xl font-bold text-customBlue">Upcoming</h1>
        <p className="text-muted-foreground text-gray-500">
          Stay updated with our list of upcoming events managed through
          Eventify.
        </p>
      </div>
      <div className="mt-8 border rounded-lg">
        <div className="flex">
          <div className="p-6 flex-1">
            <p className="text-sm text-muted-foreground">8:00 am - 9:00 am</p>
            <h3 className="mt-2 text-xl font-bold">Event Title</h3>
            <div className="mt-4">
              <p className="font-semibold">Speaker</p>
              <p className="text-muted-foreground">John Doe</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Details</p>
              <p className="text-muted-foreground">
                Join us for an insightful talk on the latest industry trends.
              </p>
            </div>
            <Button variant="outline" className="mt-4 bg-customBlue text-white">
              Register Now
            </Button>
          </div>
          <div className="p-6 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmeUrd-5LMiZFa4Cz-pKHzLoXeYejFirMbg&s')] bg-no-repeat bg-cover flex flex-col items-center justify-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
  <FaLocationArrow className="w-6 h-6 text-muted-foreground" />
  <p className="mt-2 text-muted-foreground text-center">Location</p>
</div>
</div>
      </div>
    </div>
  );
};

export default Upcoming;
