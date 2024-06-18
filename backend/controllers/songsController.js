import song from "../models/songs/songsModel.js";
import mongoose from "mongoose";

const getSongs = async (req, res) => {
  const songs = await song.getAllSongs();
  res.status(200).json(songs);
};

const getSong = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "NO such song" });

  const searchedSong = await song.getOneSong(id);

  if (!song) return res.status(404).json({ error: "No such song" });
  res.status(200).json(searchedSong);
};

const createSong = async (req, res) => {
  const { title, artist, genre, album, composer, releasedDate } = req.body;
  const newSong = {
    title,
    artist,
    genre,
    album,
    composer,
    releasedDate,
  };

  try {
    const createdSong = await song.createOneSong(newSong);
    res.status(200).json(createdSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getSongs, createSong, getSong };
