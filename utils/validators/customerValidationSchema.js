import joi from "joi";

const validateSchema = joi.object({
  ID: joi.number().required().strict(),
  NAME: joi.string().required(),
  ADDRESS: joi.string().required(),
});

const customerValidation = (req, res, next) => {
  const { error } = validateSchema.validate(req.body);

  if (error) {
    const msg = error.details[0].message;
    return res.status(400).send({error: msg });
  }
  next();
};

export default customerValidation;
