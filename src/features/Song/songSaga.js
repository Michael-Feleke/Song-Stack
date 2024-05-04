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
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  updateSongStart,
} from "./songSlice";
import api, {
  deleteSongById,
  fetchSongs,
  postCreatedSong,
  updateSongById,
} from "../../api";
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
    yield call(postCreatedSong, song, api);
    yield put(postSongSuccess());
    yield put(getSongsFn());
  } catch (error) {
    yield put(postSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    yield put(deleteSongStart());
    const songId = action.payload;
    yield call(deleteSongById, songId, api);
    yield put(deleteSongSuccess());
    yield put(getSongsFn());
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

function* updateSong(action) {
  try {
    yield put(updateSongStart());
    const song = action.payload;
    yield call(updateSongById, song.id, song, api);
    yield put(updateSongSuccess(song));
    yield put(getSongsFn());
  } catch (error) {
    yield put(updateSongFailure(error.message));
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

function* watchUpdateSong() {
  yield takeEvery("songs/updateSong", updateSong);
}

export function* songsSaga() {
  yield all([
    fork(watchGetSong),
    fork(watchPostSong),
    fork(watchDeleteSong),
    fork(watchUpdateSong),
  ]);
}
