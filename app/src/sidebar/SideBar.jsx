import React from "react";
import styles from "../styles/sidebar.module.scss";
import { Link } from "react-router-dom";
import "animate.css";

function SideBar() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <Link to="user">
        <h1>MyFitnessPlus+</h1>
      </Link>

      <Link to="workouts" className={styles.link}>
          <img src="images/icons8-workout-50.png" />
          WORKOUTS
      </Link>

      <Link to="programs" className={styles.link}>
          <img src="images/icons8-workout-66.png" />
          PROGRAMS
      </Link>

      <Link to="nutrition" className={styles.link}>
          <img src="images/icons8-nutrition-32.png" />
          NUTRITION
      </Link>

      <Link to="calculator" className={styles.link}>
          <img src="images/icons8-calculator-64.png" />
          BMI CALCULATOR
      </Link>

      <hr className={styles.link}></hr>

      <Link className={styles.link}>
          <img src="images/icons8-user-30.png" />
          Guest
      </Link>

      <Link to="settings" className={styles.link}>
          <img src="images/icons8-settings-50.png" />
          Settings
      </Link>

      <img
        src="public/images/icons8-menu-50.png"
        onClick={() => setToggle(!toggle)}
        className={styles.close}
      />

      {toggle && (
        <>
          {/* OVERLAY EFFECT */}
          <div
            className={styles.overlay}
            onClick={() => setToggle(!toggle)}
          ></div>
          {/* MOBILE SIDEBAR */}
          <div
            className={`animate__animated  animate__slideInLeft animate__faster ${styles.collapsed}`}
          >
            <Link to="/workouts">
              <img src="images/icons8-workout-50.png" />
              WORKOUTS
            </Link>

            <Link to="/programs">
              <img src="images/icons8-workout-66.png" />
              PROGRAMS
            </Link>

            <Link to="/nutrition">
              <img src="images/icons8-nutrition-32.png" />
              NUTRITION
            </Link>

            <Link to="/calculator">
              <img src="images/icons8-calculator-64.png" />
              BMI CALCULATOR
            </Link>

            <hr></hr>

            <Link to="/user">
              <img src="images/icons8-user-30.png" />
              Guest
            </Link>

            <Link to="/settings">
              <img src="images/icons8-settings-50.png" />
              Settings
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default SideBar;
