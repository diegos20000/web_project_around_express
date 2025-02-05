const express = require("express");
const app = express();
const cards = require("./routes/cards");
const users = require("./routes/users");
const mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/mydb", {})
  .then(() => console.log("Conexión a MongoDB exitosa"))
  .catch((err) => console.error("Error de conexión a MongoDB:", err));

const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: "67a2d0f62d914fb33dc03216",
  };

  next();
});

app.use("/cards", cards);
app.use("/users", users);

app.use((req, res, next) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`${PORT} escuchando`);
});
