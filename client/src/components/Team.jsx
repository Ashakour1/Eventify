import React from "react";
import { FaUser } from "react-icons/fa";

const Team = () => {
  return (
    <section className="py-12 md:py-24 lg:py-18 bg-gray-100">
      <div className="max-w-[1140px] mx-auto container">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who are driving Eventify. forward.
          </p>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto pt-5 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <FaUser className="w-16 h-16 text-primary" />
          <h3 className="text-xl font-bold mt-4">Abdishakur Mohamed</h3>
          <p className="text-gray-600">CEO and Co-founder, Eventify.</p>
          <p className="text-sm mt-2">
            John is a visionary leader with a passion for driving innovation and
            growth. He co-founded Eventify. to revolutionize the way businesses
            approach digital transformation.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaUser className="w-16 h-16 text-primary" />
          <h3 className="text-xl font-bold mt-4">Zakarie Mahad</h3>
          <p className="text-gray-600">Chief Technology Officer, Eventify.</p>
          <p className="text-sm mt-2">
            Jane is a seasoned technologist with a deep understanding of
            emerging technologies. She leads the engineering team in developing
            cutting-edge solutions for our clients.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaUser className="w-16 h-16 text-primary" />
          <h3 className="text-xl font-bold mt-4">Aamina</h3>
          <p className="text-gray-600">Chief Operating Officer, Eventify.</p>
          <p className="text-sm mt-2">
            Sarah is a seasoned operations executive with a track record of
            driving efficiency and scalability. She ensures the smooth running
            of Eventify&apos;s day-to-day operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
