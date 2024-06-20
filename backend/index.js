import dotenv from "dotenv";
import express from "express";
import authRoute from "./routes/authRoutes.js";
import songsRoute from "./routes/songsRoute.js";
import { connectDB } from "./config/database.js";
import { globalErrorHandler } from "./controllers/errorController.js";
import cookieParser from "cookie-parser";

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);

  next();
});

app.use("/auth", authRoute);

app.use("/api/songs", songsRoute);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Listening for requests on PORT ${PORT}`);
});

app.get("/set-cookies", (req, res) => {
  res.cookie("newUser", false);
  res.cookie("isLoggedIn", false, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  });
});

app.get("/get-cookies", (req, res) => {});
