import mongoose from "mongoose";
import * as Statics from "./static.js";

const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: true,
    },
    composer: {
      type: String,
      required: true,
    },
    releasedDate: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

songSchema.static(Statics);

export default songSchema;
