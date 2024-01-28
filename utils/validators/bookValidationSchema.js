import joi from "joi";

const bookSchema = joi.object({
  ID: joi.number().integer().required().strict(),
  NAME: joi.string().max(25).required(),
  ISBN: joi.string().alphanum().required(),
  EDITION: joi.number().integer().positive().required(),
});

const validateBook = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);

  if (error) {
    const msg = error.details[0].message;

    return res.status(400).json({ error: msg });
  }

  next();
};

export default validateBook;
