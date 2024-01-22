const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const { chestExercises, shoulderExercises } = require("./data/exerciseData");
require("dotenv").config();

app.use(cors());

app.get("/workouts/:muscle", (req, res) => {
  const param = req.params.muscle;

  if (param === "chest") {
    res.send(chestExercises);
  } else if (param === "shoulders") {
    res.send(shoulderExercises);
  }
});

app.listen(3000);
