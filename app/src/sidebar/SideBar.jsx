import React from "react";
import styles from "../styles/sidebar.module.scss";
import "animate.css";

function SideBar() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <h1>MyFitnessPlus+</h1>

      <button className={styles.link}>
        <img src="images/icons8-workout-50.png" />
        WORKOUTS
      </button>

      <button className={styles.link}>
        <img src="images/icons8-nutrition-32.png" />
        NUTRITION
      </button>

      <button className={styles.link}>
        <img src="images/icons8-calculator-64.png" />
        BMI CALCULATOR
      </button>

      <hr className={styles.link}></hr>

      <button className={styles.link}>
        <img src="images/icons8-user-30.png" />
        Jbautista
      </button>

      <button className={styles.link}>
        <img src="images/icons8-settings-50.png" />
        Settings
      </button>

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
            className={`animate__animated  animate__slideInLeft ${styles.collapsed}`}
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
              Jbautista
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
