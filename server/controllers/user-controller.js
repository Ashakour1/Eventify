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
  const { name, email, password } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
      email: req.body.email,
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
      name,
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
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  const expiresIn = 60 * 60 * 24 * 30; // 30 days

  const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
    expiresIn,
  });

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
  });
});

export const getAllUsers = AsyncHandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    success: true,
    data: users,
    message: "All users fetched successfully",
  });
});
