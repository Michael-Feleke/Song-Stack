import Joi from "joi";

const songSchema = Joi.object({
  title: Joi.string().trim().min(3).max(255).required().messages({
    "string.base": "Title should be a type of text",
    "string.empty": "Title cannot be an empty field",
    "string.min": "Title should have a minimum length of {#limit}",
    "string.max": "Title should have a maximum length of {#limit}",
    "any.required": "Title is a required field",
  }),
  artist: Joi.string().trim().min(3).max(255).required().messages({
    "string.base": "Artist should be a type of text",
    "string.empty": "Artist cannot be an empty field",
    "string.min": "Artist should have a minimum length of {#limit}",
    "string.max": "Artist should have a maximum length of {#limit}",
    "any.required": "Artist is a required field",
  }),
  genre: Joi.string().trim().min(3).max(100).required().messages({
    "string.base": "Genre should be a type of text",
    "string.empty": "Genre cannot be an empty field",
    "string.min": "Genre should have a minimum length of {#limit}",
    "string.max": "Genre should have a maximum length of {#limit}",
    "any.required": "Genre is a required field",
  }),
  album: Joi.string().trim().min(3).max(255).optional().messages({
    "string.base": "Album should be a type of text",
    "string.empty": "Album cannot be an empty field",
    "string.min": "Album should have a minimum length of {#limit}",
    "string.max": "Album should have a maximum length of {#limit}",
  }),
  composer: Joi.string().trim().min(3).max(255).optional().messages({
    "string.base": "Composer should be a type of text",
    "string.empty": "Composer cannot be an empty field",
    "string.min": "Composer should have a minimum length of {#limit}",
    "string.max": "Composer should have a maximum length of {#limit}",
  }),
  releasedDate: Joi.date().iso().max("now").optional().messages({
    "date.base": "Release Date should be a valid date",
    "date.format": "Release Date should be in ISO format",
    "date.max": "Release Date cannot be in the future",
  }),
});

const validateSong = (req, res, next) => {
  const { error } = songSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorDetails = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorDetails });
  }
  next();
};

export { validateSong };
