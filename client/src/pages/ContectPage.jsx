import { useState } from 'react';
import axios from 'axios'; // Importing axios for HTTP requests
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa';
import { toast } from 'sonner'; // Importing toast from sonner

export default function ContactPage() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Loading state
  const [loading, setLoading] = useState(false);


  // Clear the form data
  const ClearText = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  // Function to validate form data
  const validate = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  // Function to handle input changes and update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation check
    if (!validate()) {
      return;
    }

    setLoading(true);
    
    try {
      // Sending the form data to the backend endpoint using axios
      const response = await axios.post('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast.success(response.data.message);
      setLoading(false);
      console.log(response.data.message);
      //ClearText();
    } catch (error) {
      ClearText();
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
        setLoading(false);
        ClearText();
      } else {
        toast.error('An error occurred. Please try again.');
        setLoading(false);
        ClearText();
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around min-h-screen lg:space-x-8">
      {/* Contact Information Section */}
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

      {/* Contact Form Section */}
      <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border rounded"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 w-full border rounded"
              value={formData.lastName}
              onChange={handleChange}
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
              name="email"
              className="mt-1 p-2 w-full border rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border rounded"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Select Subject</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="General Inquiry"
                className="mr-2"
                onChange={handleChange}
              />
              <span>General Inquiry</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="Event Support"
                className="mr-2"
                onChange={handleChange}
              />
              <span>Event Support</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="Technical Issue"
                className="mr-2"
                onChange={handleChange}
              />
              <span>Technical Issue</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                value="Feedback"
                className="mr-2"
                onChange={handleChange}
              />
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
            name="message"
            className="mt-1 p-2 w-full border rounded"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message.."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
        >
          {loading ? (
                    <svg
                      className="animate-spin border-white border-2 rounded-full h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
        </button>
      </form>
    </div>
  );
}