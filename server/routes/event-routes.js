import express from "express";
import {
  getAllEvents,
  getSingleEvent,
  createEvent,
  deleteEvent,
} from "../controllers/event-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import upload from "../middlewares/upload-cloudinary.js";

const router = express.Router();

// Routers
router.get("/", authMiddleware, getAllEvents);
router.get("/events/:id", getSingleEvent).delete('/:id', deleteEvent);

router.post("/", authMiddleware, upload.single("image"), createEvent);



export default router;
