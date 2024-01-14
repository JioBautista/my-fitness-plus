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
        <button>
          <img src="images/icons8-workout-50.png" />
          WORKOUTS
        </button>
      </Link>

      <Link to="programs" className={styles.link}>
        <button>
          <img src="images/icons8-workout-66.png" />
          PROGRAMS
        </button>
      </Link>

      <Link to="nutrition" className={styles.link}>
        <button>
          <img src="images/icons8-nutrition-32.png" />
          NUTRITION
        </button>
      </Link>

      <Link to="calculator" className={styles.link}>
        <button>
          <img src="images/icons8-calculator-64.png" />
          BMI CALCULATOR
        </button>
      </Link>

      <hr className={styles.link}></hr>

      <Link to="user" className={styles.link}>
        <button>
          <img src="images/icons8-user-30.png" />
          Guest
        </button>
      </Link>

      <Link to="settings" className={styles.link}>
        <button>
          <img src="images/icons8-settings-50.png" />
          Settings
        </button>
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
            <button>
              <img src="images/icons8-workout-50.png" />
              WORKOUTS
            </button>
            <button>
              <img src="images/icons8-nutrition-32.png" />
              NUTRITION
            </button>
            <button>
              <img src="images/icons8-calculator-64.png" />
              BMI CALCULATOR
            </button>
            <hr></hr>
            <button>
              <img src="images/icons8-user-30.png" />
              Guest
            </button>
            <button>
              <img src="images/icons8-settings-50.png" />
              Settings
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SideBar;
