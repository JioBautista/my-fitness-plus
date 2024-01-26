const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const {
  chestExercises,
  shoulderExercises,
  backExercises,
  legsExercises,
  armsExercises,
} = require("./data/exerciseData");

const { fullBodyWorkout, upperLowerProgram, bodyweightOnly } = require("./data/programsData");

app.use(cors());

app.get("/workouts/:muscle", (req, res) => {
  const param = req.params.muscle;

  if (param === "chest") {
    res.send(chestExercises);
  } else if (param === "shoulders") {
    res.send(shoulderExercises);
  } else if (param === "back") {
    res.send(backExercises);
  } else if (param === "legs") {
    res.send(legsExercises);
  } else if (param === "arms") {
    res.send(armsExercises);
  }
});

app.get("/programs/:program", (req, res) => {
  const param = req.params.program;

  if (param === "fullbodyworkout") {
    res.send(fullBodyWorkout);
  } else if (param === "upperlowerworkout") {
    res.send(upperLowerProgram);
  } else if (param === "bodyweightonly") {
    res.send(bodyweightOnly)
  }
});
app.listen(3000);
