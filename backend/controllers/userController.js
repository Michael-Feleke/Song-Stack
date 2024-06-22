import user from "../models/users/usersModel.js";
import { catchAsync } from "../utils/catchUtils.js";
import { isIdValid } from "../utils/validationUtils.js";

const getUser = catchAsync(async (req, res) => {
  res.status(200).json(req.foundUser);
});

const getUsers = catchAsync(async (req, res) => {
  const users = await user.getAllUsers();
  const filteredUsers = users.map((user) => req.permission.filter(user._doc));
  res.status(200).json(filteredUsers);
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!isIdValid(id)) return res.status(404).json({ error: "No such user" });

  res.cookie("jwt", "", {
    maxAge: 1,
  });

  const deletedUser = await user.deleteUserById(id);
  if (!deletedUser) return res.status(404).json({ error: "No such user" });

  res.status(200).json(deletedUser);
});

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!isIdValid(id)) return res.status(404).json({ error: "No such user" });

  const idObj = { _id: id };
  const bodyObj = { ...req.body };

  const updatedUser = await user.updateUserById(idObj, bodyObj);
  if (!updateUser) return res.status(404).json("No such user");

  res.status(200).json(updatedUser);
});

export { getUser, getUsers, updateUser, deleteUser };
