import { catchAsync } from "../utils/catchUtils.js";
import user from "../models/users/usersModel.js";
import dotenv from "dotenv";
import { MAX_TOKEN_AGE } from "../utils/constants.js";
import { createToken } from "../utils/createToken.js";

dotenv.config();

const userSignup = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  const createdUser = await user.createUser(newUser);
  const token = createToken(createdUser._id);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: MAX_TOKEN_AGE * 1000,
  });
  res.status(200).json({ user: createdUser._id });
});
const userLogin = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const loggedUser = await user.login(email, password);
  const token = createToken(loggedUser._id);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: MAX_TOKEN_AGE * 1000,
  });
  res.status(200).json({ user: loggedUser._id });
});

const userLogout = catchAsync(async (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.status(200).json({ message: "user logged out" });
});

export { userSignup, userLogin, userLogout };
