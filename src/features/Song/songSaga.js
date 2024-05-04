import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import {
  getSongsStart,
  getSongsSuccess,
  getSongsFailure,
  postSongSuccess,
  postSongFailure,
  postSongStart,
} from "./songSlice";
import api, { fetchSongs, postCreatedSong } from "../../api";
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

function* watchPostSong() {
  yield takeEvery("songs/postSong", postSong);
}

function* watchGetSong() {
  yield takeEvery("songs/getSongs", getSongs);
}

export function* songsSaga() {
  yield all([fork(watchGetSong), fork(watchPostSong)]);
}
