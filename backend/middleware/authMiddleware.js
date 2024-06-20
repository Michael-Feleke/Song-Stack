import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import user from "../models/users/usersModel.js";

dotenv.config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(401).json({ message: "Unauthorized: No token provided" });
      } else {
        let foundUser = await user.findUserById(decodedToken.id);
        req.foundUser = foundUser;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized: No token provided" });
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(404).json({ message: "user not logged in" });
      } else {
        let foundUser = await user.findUserById(decodedToken.id);
        req.foundUser = foundUser;
        res.status(200).json(foundUser);
      }
    });
  } else {
    res.status(404).json({ message: "user not logged in" });
    next();
  }
};

export { requireAuth, checkUser };
