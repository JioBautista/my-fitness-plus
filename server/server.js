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

const {
  fullBodyWorkout,
  upperLowerProgram,
  bodyweightOnly,
} = require("./data/programsData");

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-app-id": process.env.NUTRITIONIX_APPLICATION_ID,
    "x-app-key": process.env.NUTRITIONIX_API_KEY,
  },
};

app.use(cors());
// app.use(express.json());

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
    res.send(bodyweightOnly);
  }
});

// app.get("/nutrition/:food", (req, res) => {
//   const food = req.params.food

//   axios
//     .get(
//       `https://trackapi.nutritionix.com/v2/search/instant/?query=${food}`,
//       options
//     )
//     .then((response) => {
//       res.json(response.data);
//     })
//     .catch((error) => {
//       console.log("Error fetching data:", error);
//     });
// });

app.post("/nutrition/:food", (req, res) => {
  const food = req.params.food;
  const postData = {
    query: food,
  };

  axios
    .post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      postData,
      options
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Error", error);
    });
});

app.listen(3000);
