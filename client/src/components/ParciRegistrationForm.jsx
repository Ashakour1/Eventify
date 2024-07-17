import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "react-hot-toast";

const ParticipantRegistrationForm = () => {
  const { eventId } = useParams();
  const [eventName, setEventName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchEventName = async () => {
      try {
        const response = await axios.get(`/api/events/events/${eventId}`);
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

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required";
    }
    if (!formData.text) {
      errors.message = "Message is required";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/participants/create/", {
        ...formData,
        eventId, // Include eventId in the form submission
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        text: "",
      });
      // Implement your form submission logic here
      console.log(formData);
      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-5 md:px-0">
      <Card>
        <CardHeader>
          <CardTitle className="text-customBlue">
            Participant Registration Form
          </CardTitle>
          <CardDescription>
            Fill out the form to register for {eventName}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {error.name && (
                  <p className="text-red-500 text-sm">{error.name}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {error.email && (
                  <p className="text-red-500 text-sm">{error.email}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                {error.phone && (
                  <p className="text-red-500 text-sm">{error.phone}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Input
                  as="textarea"
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
                {error.message && (
                  <p className="text-red-500 text-sm">{error.message}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Button className="bg-blue-500 hover:bg-blue-600" type="submit">
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
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex items-center text-center">
          <Link to="/" className="font-bold text-customBlue">
            Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ParticipantRegistrationForm;
