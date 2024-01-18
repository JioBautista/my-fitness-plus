import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../styles/workoutslayout.module.scss";

function WorkoutsLayout({ grabUrl }) {
  const handleClick = (data) => {
    grabUrl(data);
  };

  return (
    <div className={styles.container}>
      <h1>EXERCISE CATEGORIES BASED ON MUSCLE GROUPS</h1>
      <div className={styles.links}>
        <Link to="/workouts/chest" onClick={() => handleClick("chest")}>
          Chest
        </Link>

        <Link to="/workouts/shoulders" onClick={() => handleClick("shoulders")}>
          Shoulders
        </Link>

        <Link to="/workouts/middle_back" onClick={() => handleClick("middle_back")}>
          Back
        </Link>

        <Link to="/workouts/biceps" onClick={() => handleClick("biceps")}>
          Biceps
        </Link>

        <Link to="/workouts/triceps" onClick={() => handleClick("triceps")}>
          Triceps
        </Link>

        <Link to="/workouts/glutes" onClick={() => handleClick("glutes")}>
          Legs
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default WorkoutsLayout;
