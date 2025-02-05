const { User } = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Error al obtener usuarios", error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: "Error al obtener el usuario", error });
  }
};

const createUser = async (req, res) => {
  const { name, about, avatar } = req.body;
  try {
    const newUser = await User.create({ name, about, avatar });
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Error al crear el usuario", error });
  }
};

module.exports = { getUsers, getUserById, createUser };
