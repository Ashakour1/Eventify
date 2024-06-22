import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import prisma from "../config/db.js";

export const authMiddleware = AsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);

      console.log(process.env.JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: {
          id: decoded._id,
        },
      });
      console.log(user);
      req.user = user;

      if (!user) {
        res.status(404);
        throw new Error("Not Authorized to access this route");
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
