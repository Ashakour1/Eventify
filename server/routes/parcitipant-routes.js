import express from "express";
import {createParcitipant, getAllParticipants, getParticipantById, updateParticipant, deleteParticipant} from "../controllers/parcitipant-controller.js";

const router = express.Router();

// Routers
router.get("/", getAllParticipants);
router.get("/:id", getParticipantById);
router.post("/create", createParcitipant);
router.put("/", updateParticipant);
router.delete("/", deleteParticipant);

export default router;