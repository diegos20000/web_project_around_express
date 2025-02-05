const mongoose = require("mongoose");

const avatarValidator = (value) => {
  const urlRegex =
    /\b(https?):\/\/(www\.)?[A-Za-z0-9.\-_~:/?%#[\]@!$&'()*+,;=]+\b/;
  return urlRegex.test(value);
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  avatar: {
    type: String,
    required: true,
    validate: {
      validator: avatarValidator,
      message: (props) =>
        `${props.value} no es un enlace válido para el avatar!`,
    },
  },
});

module.exports = { User: mongoose.model("user", userSchema), avatarValidator };
