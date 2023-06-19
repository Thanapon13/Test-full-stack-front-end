import Joi from "joi";

const editProfileSchema = Joi.object({
  "First name": Joi.string().required().messages({
    "string.empty": "First name is required"
  }),
  "Last name": Joi.string().required().messages({
    "string.empty": "Last name is required"
  })
});

const validateEditProfile = input => {
  const { error } = editProfileSchema.validate(input, {
    abortEarly: false
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateEditProfile;
