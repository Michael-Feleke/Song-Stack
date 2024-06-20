import user from "../models/users/usersModel.js";

const checkEmailUnique = async (req, res, next) => {
  const { email } = req.body;
  try {
    const existingUser = await user.findEmail({ email });
    if (existingUser) {
      return res.status(400).json({ errors: ["Email already in use"] });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export { checkEmailUnique };
