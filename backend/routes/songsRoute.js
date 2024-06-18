import express from "express";
import { createSong, getSongs } from "../controllers/songsController.js";

const router = express.Router();

router.get("/", getSongs);

// router.get("/:id", getSong);

router.post("/", createSong);

// router.delete("/:id", deleteSong);

// router.put("/:id", updateSong);

export default router;
