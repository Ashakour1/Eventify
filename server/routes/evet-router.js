import express from "express";
import { getAllEvents, getSingleEvent } from "../controllers/event-controller";

const router = express.Router();

// Routers
router.get("/event", getAllEvents);
router.get("/event/:id", getSingleEvent);

export default router;