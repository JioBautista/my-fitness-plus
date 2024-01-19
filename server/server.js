const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require('dotenv').config()

app.use(cors());

app.get("/workouts/:muscle", (req, res) => {
  const param = req.params.muscle;
  const options = {
    method: "GET",
    url: `https://api.api-ninjas.com/v1/exercises?muscle=${param}&difficulty=beginner&type=strength`,
    headers: {
      "X-Api-Key": process.env.EXERCISE_API_KEY,
    },
  };
  axios.request(options).then((response) => res.json(response.data));
});

app.listen(3000);
