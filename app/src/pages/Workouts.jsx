import React, { useEffect } from "react";
import styles from "../styles/workouts.module.scss";

function Workouts() {
  const [workouts, setWorkouts] = React.useState([]);

//   useEffect(() => {
//     fetch("https://api.api-ninjas.com/v1/exercises?difficulty=beginner", {
//       headers: { "X-Api-Key": "NiLaSdJJjrHz3MATgl3Tmg==DZxPhLrznogMX1ot" },
//     })
//       .then((res) => res.json())
//       .then((res) => setWorkouts(res));
//   }, []);

//   console.log(workouts)
  return (
    <div className={styles.container}>
      <h1>Workout Categories</h1>
      <div className={styles.buttons}>
        <button>Beginner</button>
        <button>Intermediate</button>
        <button>Advance</button>
      </div>
    </div>
  );
}

export default Workouts;
