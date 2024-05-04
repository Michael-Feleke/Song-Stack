import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  status: "idle",
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsStart(state) {
      state.status = "loading";
    },
    getSongsSuccess(state, action) {
      state.status = "succeeded";
      state.songs = action.payload;
    },
    getSongsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    postSongStart(state) {
      state.status = "loading";
    },
    postSongSuccess(state, action) {
      state.status = "succeeded";
      state.songs.push(action.payload);
    },
    postSongFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    deleteSongStart(state) {
      state.status = "loading";
    },
    deleteSongSuccess(state, action) {
      state.status = "succeeded";
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
    deleteSongFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  postSongStart,
  postSongSuccess,
  postSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;

export const getSongs = () => ({ type: "songs/getSongs" });
export const postSong = (song) => ({ type: "songs/postSong", payload: song });
export const deleteSong = (id) => ({ type: "songs/deleteSong", payload: id });

export default songsSlice.reducer;
