const mongoose = require("mongoose");

const dbConfig = {
  mongodb: {
    url: "mongodb://localhost:27017/blog",
  },
};

mongoose.connect(dbConfig.mongodb.url);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connecté avec succes!");
});

module.exports = dbConfig;
