import { catchAsync } from "../utils/catchUtils.js";
import user from "../models/users/usersModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { MAX_TOKEN_AGE } from "../utils/constants.js";

dotenv.config();

const userSignup = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  const createdUser = await user.createUser(newUser);
  const token = createToken(createdUser._id);
  res.cookie("jwt", token, {
    httpOnly: true,
  });
  res.status(200).json(createdUser);
});
const userLogin = catchAsync(async (req, res) => {
  res.json({ message: "user logged in" });
});

const createToken = (id) => {
  return jwt.sign(id, process.env.SECRET_KEY, {
    expiresIn: MAX_TOKEN_AGE,
  });
};

export { userSignup, userLogin };
