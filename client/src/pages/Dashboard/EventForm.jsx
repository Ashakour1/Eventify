import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import DHeader from "./DHeader";

const EventForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    eventType: "",
    link: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`/api/events/${id}`);
          setFormData(data.data);
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Error fetching the event."
          );
        }
      };
      fetchData();
    }
  }, [id]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });

    try {
      const response = id
        ? await axios.put(`/api/events/${id}`, form, {
            headers: { "Content-Type": "multipart/form-data" },
          })
        : await axios.post("/api/events/", form, {
            headers: { "Content-Type": "multipart/form-data" },
          });

      toast.success(response.data.message);
      navigate("/admin/events");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error submitting the form."
      );
    }
  };

  return (
    <div>
      <DHeader />
      <main className="flex min-h-screen items-center justify-center bg-gray-100 py-20 px-4">
        <div className="w-[800px] rounded-lg bg-white text-black p-8 shadow-lg">
          <h1 className="my-4 text-3xl font-bold tracking-tight text-black">
            {id ? "Update Event" : "Create Event"}
          </h1>
          <p className="mb-4 text-gray-700">
            {id
              ? "Update the event details below."
              : "Fill in the event details below."}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Event Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the event title"
                className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter a brief description of the event"
                rows="4"
                className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="time"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the event location"
                className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="eventType"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Event Type
              </label>
              <select
                id="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
                required
              >
                <option value="">Select Event Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            {formData.eventType === "Online" && (
              <div className="flex flex-col">
                <label
                  htmlFor="link"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Event Link
                </label>
                <input
                  type="text"
                  id="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="Enter the event link"
                  className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
                  required
                />
              </div>
            )}

            <div className="flex flex-col">
              <label
                htmlFor="image"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Event Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                accept="image/*"
                className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-4 h-32 w-32 object-cover"
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-700"
            >
              {id ? "Update Event" : "Create Event"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EventForm;
