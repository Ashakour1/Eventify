import AsyncHandler from "express-async-handler";
import prisma from "../config/db.js";
import cloudinary from "../config/cloudinary.js";

/**
 * @controller get all events controller
 * @method : GET
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
 * @method : GET
 * @description : get single event from database
 * @route : /event/:id
 * @access : public
 */

export const getSingleEvent = AsyncHandler(async (req, res) => {
  // console.log(req.pa);
  const event = await prisma.event.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }
  res.status(200).json({
    success: true,
    data: event,
  });
});

/**
 * @controller create event controller
 * @method : POST
 * @description : create event in database
 * @route : /event
 * @access : public
 */

export const createEvent = AsyncHandler(async (req, res) => {
  try {
    const { title, description, date, time, location, eventType, link } =
      req.body;

    // console.log(title, description, date, time, location);

    if (!title || !description || !date || !time || !location) {
      res.status(400);
      throw new Error("Please fill all the fields");
    }

    const eventExists = await prisma.event.findFirst({
      where: {
        title,
      },
    });

    if (eventExists) {
      res.status(400);
      throw new Error("Event already exists");
    }

    const currentUser = req.user.id;
    // console.log(currentUser);

    let result = null;

    if (req.file) {
      const encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString(
        "base64"
      )}`;

      result = await cloudinary.uploader.upload(encodedImage, {
        resource_type: "image",
        transformation: [{ width: 500, height: 500, crop: "limit" }],
      });
    }

    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date,
        time,
        location,
        eventType,
        link,
        image: result?.url || null,
        organizer: {
          connect: {
            id: currentUser,
          },
        },
      },
    });

    if (!newEvent) {
      res.status(400);
      throw new Error("Event not created");
    }

    res.status(201).json({
      success: true,
      data: newEvent,
      message: "Event created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

/*
 * @controller update event controller
 * @method : PUT
 * @description : update event in database
 * @route : /event/:id
 * @access : public
 */

export const updateEvent = AsyncHandler(async (req, res) => {
  const { id, title, description, date, time, location, eventType, link } =
    req.body;
  const event = await prisma.event.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      date,
      time,
      location,
      eventType,
      link,
    },
  });

  // Response
  res.status(200).json({
    success: true,
    data: event,
  });
});

/*
 * @controller delete event controller
 * @method : DELETE
 * @description : delete event from database
 * @route : /event/:id
 * @access : public
 */

export const deleteEvent = AsyncHandler(async (req, res) => {
  const event = await prisma.event.delete({
    where: {
      id: req.params.id,
    },
  });

  // Response
  res.status(200).json({
    success: true,
    data: event,
  });
});
