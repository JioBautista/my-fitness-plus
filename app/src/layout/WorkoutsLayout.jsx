import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../styles/workoutslayout.module.scss";

function WorkoutsLayout({ grabUrl }) {
  return (
    <div className={styles.container}>
      <h1>EXERCISE CATEGORIES BASED ON MUSCLE GROUPS</h1>
      <div className={styles.links}>
        <Link to="/workouts/chest" onClick={() => grabUrl("chest")}>
          Chest
        </Link>
        <Link to="/workouts/shoulders" onClick={() => grabUrl("shoulders")}>Shoulders</Link>
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
