const express = require("express");
const app = express();
const cors = require('cors')
const { chestExercises, shoulderExercises } = require("./data/exerciseData");

app.use(cors())

app.get("/chest", (req, res) => {
  res.json(chestExercises);
});

app.get("/shoulders", (req, res) => {
  res.json(shoulderExercises);
});

app.listen(3000);
