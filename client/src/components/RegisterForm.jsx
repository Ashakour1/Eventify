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

  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("api/users/auth/signup", formData);
      toast.success(data.message);
      clearForm();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-blue-500">Register Form </CardTitle>
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
                  onChange={handleChange}
                  id="username"
                  placeholder="Enter your Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleChange}
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  className="focus-none"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Button className="bg-blue-500 hover:bg-none" type="submit">
                  Register
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex items-center text-center">
          Have an account?&nbsp;
          <Link to="/login" className="font-bold text-blue-500">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
