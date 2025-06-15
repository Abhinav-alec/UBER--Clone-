const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");

connectToDb(); // Connect to the database

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.use("/users", userRoutes);
module.exports = app;
