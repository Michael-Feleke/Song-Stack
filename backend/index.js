import dotenv from "dotenv";
import express from "express";
import songsRoute from "./routes/songsRoute.js";
import { connectDB } from "./config/database.js";
import { globalErrorHandler } from "./controllers/errorController.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);

  next();
});

app.use("/api/songs", songsRoute);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
