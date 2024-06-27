import AsyncHandler from "express-async-handler";
import prisma from "../config/db.js";

/**
 * @controller create parcitipant controller
 * @method : POST
 * @description : create parcitipant in database
 * @route : /parcitipant
 * @access : public
 */

export const createParcitipant = AsyncHandler(async (req, res) => {
  const { eventId } = req.body;

  // Create participant
  const parcitipant = await prisma.Parcitipant.create({
    data: { eventId },
  });

  // Response
  res.status(201).json({
    success: true,
    data: parcitipant,
    message: "Participant created successfully",
  });
});

/**
 * @controller getAllParticipants
 * @method : GET
 * @description : Get all participants
 * @route : /participants
 * @access : public
 */

export const getAllParticipants = AsyncHandler(async (req, res) => {
  // Get all participants
  const participants = await prisma.Parcitipant.findMany();

  // Response
  res.status(200).json({
    success: true,
    data: participants,
    message: "All participants fetched successfully",
  });
});

/**
 * @controller getParticipantById
 * @method : GET
 * @description : Get participant by ID
 * @route : /participants/:id
 * @access : public
 */

export const getParticipantById = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  // Get participant
  const participant = await prisma.Parcitipant.findUnique({
    where: { id },
  });

  // Response
  res.status(200).json({
    success: true,
    data: participant,
    message: "Participant fetched successfully",
  });
});

/**
 * @controller updateParticipant
 * @method : PUT
 * @description : Update participant by ID
 * @route : /participants/:id
 * @access : public
 */

export const updateParticipant = AsyncHandler(async (req, res) => {
  const { id, eventId } = req.body;

  // Update participant
  const participant = await prisma.Parcitipant.update({
    where: { id },
    data: { eventId },
  });

  // Response
  res.status(200).json({
    success: true,
    data: participant,
    message: "Participant updated successfully",
  });
});

/**
 * @controller deleteParticipant
 * @method : DELETE
 * @description : Delete participant by ID
 * @route : /participants/:id
 * @access : public
 */

export const deleteParticipant = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  // Delete participant
  const participant = await prisma.Parcitipant.delete({
    where: { id },
  });

  // Response
  res.status(204).json({
    success: true,
    message: "Participant deleted successfully",
  });
});
