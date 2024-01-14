import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../styles/workoutslayout.module.scss";

function WorkoutsLayout() {
  return (
    <div className={styles.container}>
      <h1>Workout Programs</h1>

      <div className={styles.links}>
        <Link to="fullbody">Full Body</Link>
        <Link>Beginners</Link>
        <Link>Upper Body</Link>
        <Link>Lower Body</Link>
        <Link>Chest</Link>
        <Link>Back</Link>
        <Link>Legs</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default WorkoutsLayout;
