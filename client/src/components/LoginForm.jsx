import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
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

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
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
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
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
                    "Register"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex items-center text-center">
          Have an account?&nbsp;
          <Link to="/register" className="font-bold text-customBlue">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
