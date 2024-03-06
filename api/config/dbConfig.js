const mongoose = require("mongoose");

const dbConfig = {
  mongodb: {
    url: "mongodb://localhost:27017/blog",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

mongoose.connect(dbConfig.mongodb.url, dbConfig.mongodb.options);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connecté avec succes!");
});

module.exports = dbConfig;
