const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const { chestExercises, shoulderExercises } = require("./data/exerciseData");

app.use(cors());

app.get("/chest", (req, res) => {
  res.send(chestExercises);
});

app.get("/shoulders", (req, res) => {
  // res.json(shoulderExercises);
  // const options = {
  //   method: "GET",
  //   url: "https://api.api-ninjas.com/v1/exercises?muscle=shoulders",
  //   headers: {
  //     "X-Api-Key": "NiLaSdJJjrHz3MATgl3Tmg==DZxPhLrznogMX1ot",
  //   },
  // };
  // axios.request(options).then((response) => res.json(response.data));

  axios({
    method: "get",
    url: "https://api.api-ninjas.com/v1/exercises?muscle=shoulders",
    headers: {
      "X-Api-Key": "NiLaSdJJjrHz3MATgl3Tmg==DZxPhLrznogMX1ot",
    },
  })
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));

    
});

app.get("/test", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
    headers: {
      "X-Api-Key": "NiLaSdJJjrHz3MATgl3Tmg==DZxPhLrznogMX1ot",
    },
  };
  axios.request(options).then((response) => res.json(response.data));
});

app.listen(3000);
