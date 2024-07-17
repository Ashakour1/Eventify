import React, { useEffect, useState } from "react";
import { FaFileWord, FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/button";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiVideoOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Upcoming = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("/api/events/");
        console.log(response.data);
        setEvents(response.data.data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div className="max-w-[1140px] mx-auto h-[600px] mt-10">
      <div className="space-y-2">
        {events.length === 0 ? (
          <div className="flex items-center justify-center w-full h-96">
            <p className="text-muted-foreground">No events available</p>
          </div>
        ) : (
          <div className="max-w-[1140px] mx-auto h-[600px]">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-muted-foreground">
                Discover
              </h2>
              <h1 className="text-3xl font-bold text-customBlue">Upcoming</h1>
              <p className="text-muted-foreground text-gray-500">
                Stay updated with our list of upcoming events managed through
                Eventify.
              </p>
            </div>
            {events.map((event) => (
              <div key={event.id} className="mt-8 border rounded-lg">
                <div className="flex">
                  <div className="p-6 flex-1">
                    <p className="text-sm text-muted-foreground">
                      Time : {event.time}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">Title</h3>
                    <p className="text-muted-foreground">{event.title}</p>
                    <div className="mt-4">
                      <p className="font-semibold">Date </p>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">Details</p>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                    <Link to={`/participant/${event.id}`}>
                      <Button
                        variant="outline"
                        className="mt-4 bg-customBlue text-white"
                      >
                        Register Now
                      </Button>
                    </Link>
                  </div>
                  <div
                    className="p-6 bg-no-repeat bg-center flex flex-col items-center justify-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    {event.eventType === "Offline" ? (
                      <div className="flex flex-col justify-center items-center text-center">
                        <FaLocationDot className="bg-black text-white rounded p-2 w-10 h-8 text-muted-foreground" />
                        <p className="my-2 font-bold text-muted-foreground text-center">
                          {event.location}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-center items-center text-center">
                        <CiVideoOn className="bg-black text-white rounded p-2 w-10 h-8 text-muted-foreground" />
                        <p className="my-2 font-bold text-muted-foreground text-center">
                          {event.eventType}
                        </p>
                        <Link to={event.link}>
                          <button className="bg-customBlue text-white rounded text-center px-4 py-2">
                            Event Link
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upcoming;
