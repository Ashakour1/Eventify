import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around min-h-screen lg:space-x-8">
      <div className="bg-gray-400 p-8 rounded-lg shadow-lg text-white w-full lg:w-1/3 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-8">Say something to start a live chat!</p>
          <div className="flex items-center mb-6">
            <FaPhone className="w-6 h-6 mr-4" />
            <span>+1012 3456 789</span>
          </div>
          <div className="flex items-center mb-6">
            <FaEnvelope className="w-6 h-6 mr-4" />
            <span>support@eventify.com</span>
          </div>
          <div className="flex items-center mb-10">
            <FaMapMarkerAlt className="w-6 h-6 mr-4" />
            <span>127 Street Mogadishu Somalia</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <FaTwitter className="w-6 h-6 cursor-pointer" />
          <FaInstagram className="w-6 h-6 cursor-pointer" />
          <FaDiscord className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <form className="bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 p-2 w-full border rounded"
              defaultValue="Doe"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 p-2 w-full border rounded"
              defaultValue="+1012 3456 789"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Select Subject</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input type="radio" name="subject" className="mr-2" />
              <span>General Inquiry</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="subject" className="mr-2" />
              <span>Event Support</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="subject" className="mr-2" />
              <span>Technical Issue</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="subject" className="mr-2" />
              <span>Feedback</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Write your message.."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
