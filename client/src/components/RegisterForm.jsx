import React, { useState } from "react";
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
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const ClearText = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("api/users/auth/signup", formData);
      toast.success(data.message);
      setLoading(false);
      ClearText();
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-customBlue">Register Form </CardTitle>
          <CardDescription>
            Fill Out the form carefully for registration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  id="username"
                  placeholder="Enter your Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  value={formData.password}
                  className="focus-none"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Button className="bg-blue-500 hover:bg-blue-0" type="submit">
                  {loading ? (
                    <svg
                      class="animate-spin border-white border-2 rounded-full h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex items-center text-center">
          Have an account?&nbsp;
          <Link to="/login" className="font-bold text-customBlue">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
