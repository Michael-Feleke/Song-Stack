import mongoose from "mongoose";
import userSchema from "./usersSchema.js";

const user = mongoose.model("user", userSchema);

export default user;
