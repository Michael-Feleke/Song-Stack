import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  postSongSuccess,
  postSongFailure,
  postSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} from "./songSlice";
import api, { deleteSongById, fetchSongs, postCreatedSong } from "../../api";
import { getSongs as getSongsFn } from "./songSlice";

function* getSongs() {
  try {
    yield put(getSongsStart());
    const songs = yield call(fetchSongs, api);
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure(error.message));
  }
}

function* postSong(action) {
  try {
    yield put(postSongStart());
    const song = action.payload;
    console.log(song);
    yield call(postCreatedSong, song, api);
    yield put(postSongSuccess());
    yield put(getSongsFn());
  } catch (error) {
    yield put(postSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    const songId = action.payload;
    yield call(deleteSongById, songId, api);
    yield put(deleteSongSuccess());
    yield put(getSongsFn());
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

function* watchPostSong() {
  yield takeEvery("songs/postSong", postSong);
}

function* watchGetSong() {
  yield takeEvery("songs/getSongs", getSongs);
}
function* watchDeleteSong() {
  yield takeEvery("songs/deleteSong", deleteSong);
}

export function* songsSaga() {
  yield all([fork(watchGetSong), fork(watchPostSong), fork(watchDeleteSong)]);
}
