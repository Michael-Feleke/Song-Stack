import jwt from "jsonwebtoken";
import user from "../models/users/usersModel.js";

const getCurrentUser = (req, res) => {
  const token = req.cookies.jwt;

  jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
    const foundUser = await user.findUserById(decodedToken.id);
    return foundUser;
  });
};

export { getCurrentUser };
