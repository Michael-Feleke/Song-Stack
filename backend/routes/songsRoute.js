import express from "express";
import {
  createSong,
  getSong,
  getSongs,
  deleteSong,
  updateSong,
} from "../controllers/songsController.js";
import { validateSong } from "../validation/validateSongs.js";

const router = express.Router();

router.get("/", getSongs);

router.get("/:id", getSong);

router.post("/", validateSong, createSong);

router.delete("/:id", deleteSong);

router.patch("/:id", updateSong);

export default router;
