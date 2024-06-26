import song from "../models/songs/songsModel.js";
import { catchAsync } from "../utils/catchUtils.js";
import { isIdValid } from "../utils/validationUtils.js";

const getSongs = catchAsync(async (req, res) => {
  const { _id } = req.foundUser;
  const songs = await song.getAllOwnSongs(_id);
  res.status(200).json(songs);
});

const getAllSongs = catchAsync(async (req, res) => {
  const songs = await song.getAllSongs();
  res.status(200).json(songs);
});

const getSong = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!isIdValid(id)) return res.status(404).json({ error: "No such song" });

  const searchedSong = await song.getSongById(id);
  if (!searchedSong) return res.status(404).json({ error: "No such song" });

  res.status(200).json(searchedSong);
});

const createSong = catchAsync(async (req, res) => {
  const { title, artist, genre, album, composer, releasedDate } = req.body;

  const { _id } = req.foundUser;

  const newSong = {
    title,
    artist,
    genre,
    album,
    composer,
    releasedDate,
    createdBy: _id,
  };
  const createdSong = await song.createNewSong(newSong);
  res.status(200).json(createdSong);
});

const deleteSong = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!isIdValid(id)) return res.status(404).json({ error: "No such song" });

  console.log(id);

  const deletedSong = await song.deleteSongById(id);

  if (!deletedSong) return res.status(404).json({ error: "No such song" });

  res.status(200).json(deletedSong);
});

const updateSong = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!isIdValid(id)) return res.status(404).json({ error: "No such song" });

  const idObj = { _id: id };
  const bodyObj = { ...req.body };

  const updatedSong = await song.updateSongById(idObj, bodyObj);
  if (!updatedSong) return res.status(404).json("No such song");

  res.status(200).json(updatedSong);
});

export { getSongs, getAllSongs, createSong, getSong, deleteSong, updateSong };
