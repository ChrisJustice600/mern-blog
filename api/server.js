const express = require("express");
const app = express();
const port = 3000;
require("../api/config/dbConfig");
const User = require("../api/models/User");
const bcrypt = require("bcrypt");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const salt = bcrypt.genSaltSync(10);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.listen(port, () => {
  console.log(`Le server est en écoute dans le port ${port}`);
});
