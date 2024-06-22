import Joi from "joi";

const userSchema = Joi.object({
  email: Joi.string().email().trim().required().messages({
    "string.base": "Email should be a type of text",
    "string.email": "Email must be a valid email",
    "string.empty": "Email cannot be an empty field",
    "any.required": "Email is a required field",
  }),
  password: Joi.string().trim().min(6).required().messages({
    "string.base": "Password should be a type of text",
    "string.empty": "Password cannot be an empty field",
    "string.min": "Password should have a minimum length of {#limit}",
    "any.required": "Password is a required field",
  }),
  role: Joi.string().valid("user", "admin").required().messages({
    "string.base": "Role should be a type of text",
    "string.empty": "Role cannot be an empty field",
    "any.only": "Role must be one of the following values: user, admin",
    "any.required": "Role is a required field",
  }),
});

const validateAuth = (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorDetails = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorDetails });
  }
  next();
};

export { validateAuth };
