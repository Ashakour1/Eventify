import AsyncHandler from "express-async-handler";
import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @controller signup user controller
 * @method : POST
 * @description : sign-up user with password and email
 * @route : /auth/signup
 * @access : public
 */
export const registerUser = AsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please provide username, email and password");
  }

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: email,
        },
        {
          username: username,
        },
      ],
    },
  });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hashed password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  /// response
  res.status(200).json({
    success: true,
    data: user,
    message: "Registered successfully ",
  });
});

/**
 * @controller login user controller
 * @method : POST
 * @description : Login user with password and email
 * @route : /auth/Login
 * @access : public
 */

export const loginUserController = AsyncHandler(async (req, res) => {
  // get data from request body
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  // Check if user exists
  if (!user) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);

  // Check if password matches with the hashed password
  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  const expiresIn = 60 * 60 * 24 * 30; // 30 days

  // Generate token
  const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
    expiresIn,
  });

  // Set cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    token,
    expiresIn,
  });
  /// response
  res.status(200).json({
    success: true,
    message: "Login successfully ",
    data: user,
    token,
    expiresIn,
  });
});

// Get all users
/**
 * @controller get all users
 * @method : GET
 * @description : Get all users
 * @route : /all
 * @access : private
 */
export const getAllUsers = AsyncHandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    success: true,
    data: users,
    message: "All users fetched successfully",
  });
});
