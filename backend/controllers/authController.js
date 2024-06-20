import { catchAsync } from "../utils/catchUtils.js";
import user from "../models/users/usersModel.js";

const userSignup = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  const createdUser = await user.createUser(newUser);
  res.status(200).json(createdUser);
});
const userLogin = catchAsync(async (req, res) => {
  res.json({ message: "user logged in" });
});

export { userSignup, userLogin };
