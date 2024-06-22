import express from "express";
import ErrorHandler from "./middlewares/error-middleware.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user-routes.js";
import eventRoutes from "./routes/event-router.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", userRoutes);
app.use("/api/event", eventRoutes);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
