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
import {
  deleteSongById,
  fetchSongs,
  fetchSongsByName,
  postCreatedSong,
  updateSongById,
} from "../../services/api";
import { getSongs as getSongsFn } from "./songSlice";

function* getSongs() {
  try {
    yield put(getSongsStart());
    const songs = yield call(fetchSongs);
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure(error.message));
  }
}

function* getSongsByName(action) {
  try {
    yield put(getSongsStart());
    const songs = yield call(fetchSongsByName, action.payload);
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure(error.message));
  }
}

function* postSong(action) {
  try {
    yield put(postSongStart());
    const song = action.payload;
    const response = yield call(postCreatedSong, song);
    yield put(postSongSuccess(response.data));
    yield put(getSongsFn());
  } catch (error) {
    yield put(postSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    yield put(deleteSongStart());
    const songId = action.payload;
    yield call(deleteSongById, songId);

    yield put(deleteSongSuccess(songId));
    yield put(getSongsFn());
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

function* updateSong(action) {
  try {
    yield put(updateSongStart());

    const { songNew, id } = action.payload;
    const data = yield call(updateSongById, id, songNew);
    yield put(updateSongSuccess(data));
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

function* watchGetSongByName() {
  yield takeEvery("songs/getSongsByName", getSongsByName);
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
    fork(watchGetSongByName),
  ]);
}
