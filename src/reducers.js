import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./features/Song/songSlice";

const rootReducer = combineReducers({
  songs: songsReducer,
});

export default rootReducer;
