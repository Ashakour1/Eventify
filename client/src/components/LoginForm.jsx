import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

import { useUser } from "../Hooks/useUser";
import axios from "axios";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login, user } = useUser();

  const redirecTo = location.search.split("/")[1];

  useEffect(() => {
    if (user) {
      redirecTo ? navigate(`/${redirecTo}`) : navigate("/dashboard");
    }
  }, [user, redirecTo]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/users/auth/login", formData);
      console.log(data);
      toast.success(data.message);
      login(data, data.expiresIn);
      navigate("/dashboard");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="w-full px-5 md:px-0">
      <Card>
        <CardHeader>
          <CardTitle className="text-customBlue">Login Form </CardTitle>
          <CardDescription>
            Enter your credentials to login to your account
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
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="focus-none"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Button className="bg-blue-500 hover:bg-blue-0" type="submit">
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
                    "Login"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex items-center text-center">
          Don&apos;t have an account?&nbsp;
          <Link to="/register" className="font-bold text-customBlue">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
