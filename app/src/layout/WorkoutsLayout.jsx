import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../styles/workoutslayout.module.scss";

function WorkoutsLayout() {
  return (
    <div className={styles.container}>
      <h1>EXERCISE CATEGORIES</h1>

      <div className={styles.links}>
        <Link>Chest</Link>
        <Link>Shoulders</Link>
        <Link>Back</Link>
        <Link>Biceps</Link>
        <Link>Triceps</Link>
        <Link>Legs</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default WorkoutsLayout;
