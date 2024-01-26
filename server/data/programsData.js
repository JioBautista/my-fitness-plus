const fullBodyWorkout = {
  exercises: [
    "Barbell Bench press",
    "Barbell Military Press",
    "Barbell Rows",
    "Barbell Squat",
    "Bicep Curls",
    "Tricep Extensions",
  ],
  sessions: [
    {
      day: "Sunday",
      train: "Rest",
    },
    {
      day: "Monday",
      train: "Fullbody",
    },
    {
      day: "Tuesday",
      train: "Rest",
    },
    {
      day: "Wednesday",
      train: "Fullbody",
    },
    {
      day: "Thursday",
      train: "Rest",
    },
    {
      day: "Friday",
      train: "Fullbody",
    },
    {
      day: "Saturday",
      train: "Rest",
    },
  ],
};

const upperLowerProgram = {
  exercises: [
    "Barbell Bench press",
    "Barbell Military Press",
    "Barbell Rows",
    "Barbell Squat",
    "Dumbbell Lunge",
    "Barbell Straight Leg Deadlift",
  ],
  sessions: [
    {
      day: "Sunday",
      train: "Rest",
    },
    {
      day: "Monday",
      train: "Upperbody",
    },
    {
      day: "Tuesday",
      train: "Lowerbody",
    },
    {
      day: "Wednesday",
      train: "Rest",
    },
    {
      day: "Thursday",
      train: "Upperbody",
    },
    {
      day: "Friday",
      train: "Lowerbody",
    },
    {
      day: "Saturday",
      train: "Rest",
    },
  ],
};

const bodyweightOnly = {
  exercises: ["Bodyweight Squats", "Push-ups", "Pull-ups", "Dips"],
  sessions: [
    {
      day: "Sunday",
      train: "Rest",
    },
    {
      day: "Monday",
      train: "Train",
    },
    {
      day: "Tuesday",
      train: "Train",
    },
    {
      day: "Wednesday",
      train: "Rest",
    },
    {
      day: "Thursday",
      train: "Train",
    },
    {
      day: "Friday",
      train: "Train",
    },
    {
      day: "Saturday",
      train: "Rest",
    },
  ],
};
module.exports = { fullBodyWorkout, upperLowerProgram, bodyweightOnly };
