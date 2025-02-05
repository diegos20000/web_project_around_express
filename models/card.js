const mongoose = require("mongoose");

const linkValidator = (value) => {
  const urlRegex =
    /\b(https?):\/\/(www\.)?[A-Za-z0-9.\-_~:/?%#[\]@!$&'()*+,;=]+\b/;
  return urlRegex.test(value);
};

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  link: {
    type: String,
    required: true,
    validate: {
      validator: linkValidator,
      message: (props) =>
        `${props.value} no es un enlace válido para la imagen!`,
    },
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Card", cardSchema);
