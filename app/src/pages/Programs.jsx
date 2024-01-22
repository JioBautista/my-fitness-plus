import React from "react";
import styles from "../styles/programs.module.scss";

function Programs() {
  return (
    <div className={styles.container}>
      {/* FULL BODY PROGRAM */}
      <div className={styles.wrapper}>
        <h1>Fullbody Workout</h1>
        <div className={styles.grid}>
          <h2>Contains: 6 exercises</h2>
          <h2>Duration: 45min - 1hr</h2>
          <button>View</button>
        </div>
      </div>

      <div className={styles.wrapper}>
        <h1>Upperbody Workout</h1>
        <div className={styles.grid}>
          <h2>Contains: 5 exercises</h2>
          <h2>Duration: 45min - 1hr</h2>
          <button>View</button>
        </div>
      </div>

      <div className={styles.wrapper}>
        <h1>Lowerbody Workout</h1>
        <div className={styles.grid}>
          <h2>Contains: 4 exercises</h2>
          <h2>Duration: 45min - 1hr</h2>
          <button>View</button>
        </div>
      </div>

      <div className={styles.wrapper}>
        <h1>Bodyweight Only</h1>
        <div className={styles.grid}>
          <h2>Contains: 4 exercises</h2>
          <h2>Duration: 45min - 1hr</h2>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}

export default Programs;
