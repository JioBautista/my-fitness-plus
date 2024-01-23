import React from "react";
import styles from "../styles/programs.module.scss";

function Programs() {
  return (
    <div className={styles.container}>
      <h1>Workout Programs</h1>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Fullbody Workout</h1>
          <div className={styles.grid}>
            <h3>Contains: 6 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <button>View</button>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Upperbody Workout</h1>
          <div className={styles.grid}>
            <h3>Contains: 5 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <button>View</button>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Lowerbody Workout</h1>
          <div className={styles.grid}>
            <h3>Contains: 4 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <button>View</button>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Bodyweight Only</h1>
          <div className={styles.grid}>
            <h3>Contains: 4 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <button>View</button>
          </div>
        </div>
      </div>

      <h1>Weekly Training Session Example</h1>

      <div className={styles.calendar}>
        <div className={styles.day}>
          <p>Sunday</p>
          <p>Rest</p>
        </div>
        <div className={styles.day}>
          <p>Monday</p>
          <p>Fullbody</p>
        </div>
        <div className={styles.day}>
          <p>Tuesday</p>
          <p>Rest</p>
        </div>
        <div className={styles.day}>
          <p>Wednesday</p>
          <p>Fullbody</p>
        </div>
        <div className={styles.day}>
          <p>Thursday</p>
          <p>Rest</p>
        </div>
        <div className={styles.day}>
          <p>Friday</p>
          <p>Fullbody</p>
        </div>
        <div className={styles.day}>
          <p>Saturday</p>
          <p>Rest</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
