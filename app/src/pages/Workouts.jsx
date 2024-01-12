import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/workouts.module.scss";

function Workouts() {
  return (
    <div className={styles.container}>
      <h2>Workout Categories</h2>

      <div className={styles.workouts}>
        <h3>Fullbody Workout</h3>
        <button>View more</button>
      </div>

      <div className={styles.workouts}>
        <h3>Lowerbody Workout</h3>
        <button>View more</button>
      </div>

      <div className={styles.workouts}>
        <h3>Upperbody Workout</h3>
        <button>View more</button>
      </div>

      <div className={styles.workouts}>
        <h3>Chest Workout</h3>
        <button>View more</button>
      </div>

      <div className={styles.workouts}>
        <h3>Back Workout</h3>
        <button>View more</button>
      </div>

      <div className={styles.workouts}>
        <h3>Leg Workout</h3>
        <button>View more</button>
      </div>
    </div>
  );
}

export default Workouts;
