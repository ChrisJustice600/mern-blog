const express = require("express");
const app = express();
const port = 3000;
require("../api/config/dbConfig");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Le server est en écoute dans le port ${port}`);
});
