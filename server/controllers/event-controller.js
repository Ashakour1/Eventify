import AsyncHandler from "express-async-handler";
import prisma from "../config/db.js";

/**
 * @controller get all events controller
 * @method : POST
 * @description : get all events from database
 * @route : /event
 * @access : public
 */

export const getAllEvents = AsyncHandler(async (req, res) => {
    const events = await prisma.event.findMany();
    res.status(200).json({
        success: true,
        data: events,
    });
});

/**
 * @controller get single event controller
 * @method : POST
 * @description : get single event from database
 * @route : /event/:id
 * @access : public
 */

export const getSingleEvent = AsyncHandler(async (req, res) => {
    const event = await prisma.event.findUnique({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({
        success: true,
        data: event,
    });
});