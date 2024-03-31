const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const githubRoutes = require("./routes/githubRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected gracefully!!"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(cors());

app.use("/user", githubRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to backend!!");
});

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});
