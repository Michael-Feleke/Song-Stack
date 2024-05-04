import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import { getSongsStart, getSongsSuccess, getSongsFailure } from "./songSlice";
import api, { fetchSongs } from "../../api";

function* getSongs() {
  try {
    yield put(getSongsStart());
    const songs = yield call(fetchSongs, api);
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure(error.message));
  }
}

function* watchGetSongs() {
  yield takeEvery("songs/getSongs", getSongs);
}

export function* songsSaga() {
  yield all([fork(watchGetSongs)]);
}
