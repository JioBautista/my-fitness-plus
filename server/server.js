const express = require("express");
const app = express();
const cors = require('cors')
const { chestExercises, shoulderExercises } = require("./data/exerciseData");

app.use(cors({
    origin:"http://localhost:5173/"
}))
app.get("/chest", (req, res) => {
  res.json(chestExercises);
});

app.get("/shoulders", (req, res) => {
  res.json(shoulderExercises);
});

app.listen(3000);
