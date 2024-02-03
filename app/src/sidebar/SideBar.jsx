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

          <Link to="/workouts/back" onClick={() => handleClick("back")}>
            Back
          </Link>

          <Link to="/workouts/arms" onClick={() => handleClick("arms")}>
            Arms
          </Link>

          <Link to="/workouts/legs" onClick={() => handleClick("legs")}>
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

      <hr className={styles.link}></hr>

      <Link to="settings" className={styles.link}>
        <img src="/images/icons8-settings-50.png" />
        Settings
      </Link>

      <Link to="login" className={styles.link}>
        Register/LogIn
      </Link>

      <img
        src="/images/icons8-menu-50.png"
        onClick={() => setToggle(!toggle)}
        className={styles.close}
      />

      {/* TOGGLE SIDEBAR MOBILE & TABLET SCREEN SIZES*/}
      {toggle && (
        <>
          <div className={styles.collapsedBar}>
            <div className={styles.dropdown}>
              <Link>
                <img src="/images/icons8-workout-50.png" />
                EXERCISES
              </Link>

              <div
                className={styles.dropdowncontent}
                style={{ position: "relative" }}
              >
                <Link to="/workouts/chest" onClick={() => handleClick("chest")}>
                  Chest
                </Link>

                <Link
                  to="/workouts/shoulders"
                  onClick={() => handleClick("shoulders")}
                >
                  Shoulders
                </Link>

                <Link to="/workouts/back" onClick={() => handleClick("back")}>
                  Back
                </Link>

                <Link to="/workouts/arms" onClick={() => handleClick("arms")}>
                  Arms
                </Link>

                <Link to="/workouts/legs" onClick={() => handleClick("legs")}>
                  Legs
                </Link>
              </div>
            </div>

            <Link to="programs">
              <img src="/images/icons8-workout-66.png" />
              PROGRAMS
            </Link>

            <Link to="nutrition">
              <img src="/images/icons8-nutrition-32.png" />
              NUTRITION
            </Link>

            <hr></hr>

            <Link to="settings">
              <img src="/images/icons8-settings-50.png" />
              Settings
            </Link>

            <Link to="login">
              Register/LogIn
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default SideBar;
