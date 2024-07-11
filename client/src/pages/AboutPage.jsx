import { FaMountain, FaRocket, FaUsers, FaBolt, FaInfinity, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <FaMountain className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <FaMountain className="w-16 h-16 text-primary" />
          <h1 className="text-4xl font-bold text-white mt-4">Eventify org</h1>
          <p className="text-xl text-white max-w-2xl text-center mt-6">
            Empowering businesses to thrive in the digital age through innovative solutions and unparalleled service.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaUser className="w-16 h-16 text-primary" />
            <h3 className="text-xl font-bold mt-4">John Doe</h3>
            <p className="text-gray-600">CEO and Co-founder, Acme Inc.</p>
            <p className="text-sm mt-2">
              John is a visionary leader with a passion for driving innovation and growth. He co-founded Acme Inc. to
              revolutionize the way businesses approach digital transformation.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUser className="w-16 h-16 text-primary" />
            <h3 className="text-xl font-bold mt-4">Jane Lim</h3>
            <p className="text-gray-600">Chief Technology Officer, Acme Inc.</p>
            <p className="text-sm mt-2">
              Jane is a seasoned technologist with a deep understanding of emerging technologies. She leads the
              engineering team in developing cutting-edge solutions for our clients.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUser className="w-16 h-16 text-primary" />
            <h3 className="text-xl font-bold mt-4">Sarah Mayer</h3>
            <p className="text-gray-600">Chief Operating Officer, Acme Inc.</p>
            <p className="text-sm mt-2">
              Sarah is a seasoned operations executive with a track record of driving efficiency and scalability. She
              ensures the smooth running of Acme&apos;s day-to-day operations.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At the heart of Acme Inc. are the core values that guide our actions and shape our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <FaRocket className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek new and better ways to solve problems and drive progress.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUsers className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and foster a culture of open communication and mutual support.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBolt className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Agility</h3>
              <p className="text-gray-600">
                We embrace change and adapt quickly to meet the evolving needs of our clients and the market.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaInfinity className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Integrity</h3>
              <p className="text-gray-600">
                We are committed to the highest ethical standards and transparency in all our dealings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>
          <p className="text-gray-600 max-w-2xl mt-4">
            Discover how Acme Inc. can help you unlock your full potential and stay ahead of the curve.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white bg-black shadow transition-colors hover:bg-gray-900  focus-visible:outline-none "
              prefetch={false}
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
