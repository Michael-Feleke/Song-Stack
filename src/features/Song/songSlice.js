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
  },
});

export const {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  postSongStart,
  postSongSuccess,
  postSongFailure,
} = songsSlice.actions;

export const getSongs = () => ({ type: "songs/getSongs" });
export const postSong = (song) => ({ type: "songs/postSong", payload: song });
export default songsSlice.reducer;
