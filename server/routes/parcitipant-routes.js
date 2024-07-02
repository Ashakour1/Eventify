import express from "express";
import {createParcitipant, getAllParticipants, getParticipantById, updateParticipant, deleteParticipant} from "../controllers/parcitipant-controller.js";

const router = express.Router();

// Routers
router.get("/parcitipant", getAllParticipants);
router.get("/parcitipant/:id", getParticipantById);
router.post("/parcitipant", createParcitipant);
router.put("/parcitipant", updateParticipant);
router.delete("/parcitipant", deleteParticipant);

export default router;