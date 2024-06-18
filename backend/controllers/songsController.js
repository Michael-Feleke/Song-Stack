import song from "../models/songs/songsModel.js";
import mongoose from "mongoose";

const getSongs = async (req, res) => {
  const songs = await song.getAllSongs();
  res.status(200).json(songs);
};

const getSong = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such song" });

  const searchedSong = await song.getSongById(id);

  if (!searchedSong) return res.status(404).json({ error: "No such song" });
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
    const createdSong = await song.createNewSong(newSong);
    res.status(200).json(createdSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSong = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such song" });

  const deletedSong = await song.deleteSongById(id);

  if (!deletedSong) return res.status(404).json({ error: "No such song" });
  res.status(200).json(deletedSong);
};

const updateSong = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such song" });

  const idObj = { _id: id };
  const bodyObj = { ...req.body };

  const updatedSong = await song.updateSongById(idObj, bodyObj);
  if (!updatedSong) return res.status(404).json("No such song");

  res.status(200).json(updatedSong);
};

export { getSongs, createSong, getSong, deleteSong, updateSong };
