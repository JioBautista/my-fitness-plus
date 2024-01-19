import React from "react";
import styles from "../styles/sidebar.module.scss";
import { Link } from "react-router-dom";
import "animate.css";

function SideBar({ grabUrl }) {
  const [toggle, setToggle] = React.useState(false);

  const handleClick = (data) => {
    grabUrl(data);
  };
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <h1>FitSimple</h1>
      </Link>

      <div className={styles.dropdown}>
        <Link to="" className={styles.link}>
          <img src="/images/icons8-workout-50.png" />
          EXERCISES
        </Link>

        <div className={styles.dropdowncontent}>
          <Link to="/workouts/chest" onClick={() => handleClick("chest")}>
            Chest
          </Link>
          <Link
            to="/workouts/shoulders"
            onClick={() => handleClick("shoulders")}
          >
            Shoulders
          </Link>
          <Link
            to="/workouts/middle_back"
            onClick={() => handleClick("middle_back")}
          >
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
      </div>

      <Link to="programs" className={styles.link}>
        <img src="/images/icons8-workout-66.png" />
        PROGRAMS
      </Link>

      <Link to="nutrition" className={styles.link}>
        <img src="/images/icons8-nutrition-32.png" />
        NUTRITION
      </Link>

      <Link to="calculator" className={styles.link}>
        <img src="/images/icons8-calculator-64.png" />
        BMI CALCULATOR
      </Link>

      <hr className={styles.link}></hr>

      <Link to="settings" className={styles.link}>
        <img src="/images/icons8-settings-50.png" />
        Settings
      </Link>

      <img
        src="/images/icons8-menu-50.png"
        onClick={() => setToggle(!toggle)}
        className={styles.close}
      />
    </div>
  );
}

export default SideBar;
