import React, { useEffect } from "react";
import styles from "../styles/workouts.module.scss";

function Workouts() {
  return (
    <div className={styles.container}>
        <h1>Your workouts</h1>
        <ul>
            <li>
                <h3>Bench Press</h3>

                <div className={styles.settings}>
                <p>Sets</p>
                <button>-</button>
                <span>0</span>
                <button>+</button>
                </div>

                <div className={styles.settings}>
                <p>Reps</p>
                <button>-</button>
                <span>0</span>
                <button>+</button>
                </div>
            </li>
        </ul>
      <h2>Workout Categories</h2>
      <div className={styles.buttons}>
        <button>Beginner</button>
        <button>Intermediate</button>
        <button>Advance</button>
      </div>

      <div>

      </div>
    </div>
  );
}

export default Workouts;
