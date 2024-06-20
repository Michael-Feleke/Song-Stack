import jwt from "jsonwebtoken";
import { MAX_TOKEN_AGE } from "./constants.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: MAX_TOKEN_AGE,
  });
};

export { createToken };
