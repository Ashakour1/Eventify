import AsyncHandler from "express-async-handler";
import prisma from "../config/db.js";
import cloudinary from "../config/cloudinary.js";

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

export const createEvent = AsyncHandler(async (req, res) => {
  const { title, description, date, time, location, image } = req.body;
  const currentUser = req.user.id;
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

  //   console.log("current" + currentUser);

  let result;
  if (req.file) {
    let encodedImage = `data:image/jpg;base64,${req.file.buffer.toString(
      "base64"
    )}`;
    try {
      result = await cloudinary.uploader.upload(encodedImage, {
        resource_type: "image",
        folder: "events",
        transformation: { width: 500, height: 500, crop: "limit" },
        encoding: "base64",
      });
    } catch (error) {
      return res.status(500).json({ error: "Image upload failed" });
    }
  }

  //   console.log(result.url)

  const event = await prisma.event.create({
    data: {
      title,
      description,
      date,
      time,
      location,
      image: result?.url || null,
      organizer: { connect: { id: currentUser } },
    },
  });

  res.status(200).json({
    success: true,
    message: "Event created successfully",
    data: event,
  });
});
