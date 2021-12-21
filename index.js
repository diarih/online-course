const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const db = require("./helpers/db");

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

app.listen(PORT, (req, res) => {
  console.log("Listening on Port", PORT);
});

async function main(req, res) {
  try {
    await db.openDBConnection(URI);
  } catch (error) {
    console.log("main:", message.error);
  }
}
