import mongoose from "mongoose";
import songSchema from "./songsSchema.js";

const song = mongoose.model("Song", songSchema);

export default song;
