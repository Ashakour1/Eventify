import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import prisma from "../config/db.js";
import { JWT_SECRET } from "../config/config.js";

export const authMiddleware = AsyncHandler(async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    res.status(403).json({ message: "Not authorized, no token" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // console.log(decoded);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded._id,
      },
    });

    // console.log(user.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    req.user = user;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
});
