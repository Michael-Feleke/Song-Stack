import express from "express";
import {
  createSong,
  getSong,
  getSongs,
  deleteSong,
  updateSong,
  getAllSongs,
} from "../controllers/songsController.js";
import { validateSong } from "../validation/validateSongs.js";
import { checkSongPermission } from "../middleware/checkSongPermission.js";

const router = express.Router();

router.get("/", checkSongPermission("readOwn", "song"), getSongs);

router.get("/all", checkSongPermission("readAny", "song"), getAllSongs);

router.get("/:id", checkSongPermission("readOwn", "song"), getSong);

router.post("/", validateSong, createSong);

router.delete("/:id", checkSongPermission("deleteOwn", "song"), deleteSong);

router.patch("/:id", checkSongPermission("updateOwn", "song"), updateSong);

export default router;
