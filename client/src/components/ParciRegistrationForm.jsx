import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParticipantRegistrationForm = () => {
  const { eventId } = useParams();
  const [eventName, setEventName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const fetchEventName = async () => {
      try {
        const response = await axios.get(`/api/events/${eventId}`);
        setEventName(response.data.title); // Assuming response.data contains event title
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventName();
  }, [eventId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
    // Example: Call an API to submit the form data
  };

  return (
    <div>
      <h1>Participant Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={eventName}
          readOnly
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ParticipantRegistrationForm;
