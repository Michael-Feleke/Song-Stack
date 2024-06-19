import mongoose from "mongoose";

export function isIdValid(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
