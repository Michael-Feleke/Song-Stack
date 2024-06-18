import song from "../models/songs/songsModel.js";

const getSongs = async (req, res) => {
  const songs = await song.getAllSongs();
  res.status(200).json(songs);
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

export { getSongs, createSong };
