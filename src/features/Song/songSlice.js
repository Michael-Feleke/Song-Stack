import { createSlice } from "@reduxjs/toolkit";
import { get } from "styled-system";

const initialState = {
  songs: [],
  status: "idle",
  error: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || {},
  playlists: JSON.parse(localStorage.getItem("playlists")) || [],
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
      state.status = "idle";
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
      const songId = action.payload;
      console.log(songId);
      if (state.favorites[songId]) {
        delete state.favorites[songId];
      }
      try {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }

      state.playlists.forEach((playlist) => {
        playlist.songs = playlist.songs.filter(
          (song) => song.id !== action.payload
        );
      });
      try {
        localStorage.setItem("playlists", JSON.stringify(state.playlists));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }

      state.status = "idle";
    },
    deleteSongFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    updateSongStart(state) {
      state.status = "loading";
    },
    updateSongSuccess(state, action) {
      state.status = "succeeded";
      const updatedSong = action.payload;
      const index = state.songs.findIndex((song) => song.id === updatedSong.id);
      if (index !== -1) {
        state.songs[index] = updatedSong;
      }
    },
    updateSongFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    toggleFavorite(state, action) {
      const { songId } = action.payload;
      if (state.favorites[songId]) {
        delete state.favorites[songId];
      } else {
        state.favorites[songId] = true;
      }
      try {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
    },
    createPlaylist(state, action) {
      state.playlists.push(action.payload);
      try {
        localStorage.setItem("playlists", JSON.stringify(state.playlists));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
    },
    updatePlaylistName(state, action) {
      const { id, name } = action.payload;
      const index = state.playlists.findIndex((playlist) => playlist.id === id);

      if (index !== -1) {
        state.playlists[index].name = name;
      }
    },
    deletePlaylist(state, action) {
      const { id } = action.payload;
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id !== id
      );
      try {
        localStorage.setItem("playlists", JSON.stringify(state.playlists));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
    },
    addSongToPlaylist(state, action) {
      const { playlistId, songId } = action.payload;
      const playlist = state.playlists.find(
        (playlist) => playlist.id === playlistId
      );
      const song = state.songs.find((song) => song.id === songId);
      console.log(playlist);
      if (playlist) {
        playlist.songs.push(song);
      }
      try {
        localStorage.setItem("playlists", JSON.stringify(state.playlists));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
      try {
        localStorage.setItem("songs", JSON.stringify(state.songs));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
    },
    removeSongFromPlaylist(state, action) {
      const { playlistId, songId } = action.payload;
      const playlist = state.playlists.find(
        (playlist) => playlist.id === playlistId
      );
      if (playlist) {
        playlist.songs = playlist.songs.filter((song) => song.id !== songId);
      }

      try {
        localStorage.setItem("playlists", JSON.stringify(state.playlists));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
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
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  toggleFavorite,
  createPlaylist,
  updatePlaylistName,
  deletePlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist,
} = songsSlice.actions;

export const getSongs = () => ({ type: "songs/getSongs" });
export const postSong = (song) => ({ type: "songs/postSong", payload: song });
export const deleteSong = (id) => ({ type: "songs/deleteSong", payload: id });
export const updateSong = (song) => ({
  type: "songs/updateSong",
  payload: song,
});

export default songsSlice.reducer;
