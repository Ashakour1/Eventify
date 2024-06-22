import express from "express";
import {
  registerUser,
  loginUserController,
  getAllUsers,
} from "../controllers/user-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

/**
 * @method : POST
 * @description : Login user with password and email
 * @route : /auth/signup
 * @access : public
 *
 */

router.post("/auth/signup", registerUser);

/**
 * @method : POST
 * @description : Login user with password and email
 * @route : /auth/Login
 * @access : public
 *
 */

router.post("/auth/login", loginUserController);

router.get("/all", authMiddleware, getAllUsers);

export default router;
