const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const cardPath = path.join(__dirname, ".././data/cards.json");

router.get("/cards", (req, res) => {
  fs.readFile(cardPath, { encoding: "utf8" }, (err, cardsData) => {
    if (err) {
      console.log(err);
      return;
    }
    const cards = JSON.parse(cardsData);
    res.send(cards);
  });
});

module.exports = router;
