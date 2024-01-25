import React from "react";
import styles from "../styles/programs.module.scss";
import ModalBox from "../modalBox/ModalBox";
import { Link } from "react-router-dom";

function Programs() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className={styles.container}>
      <h1>Workout Programs</h1>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Fullbody Workout</h1>
          <div className={styles.grid}>
            <h3>Contains: 6 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <Link
              to="/programs/fullbodyworkout"
              onClick={() => setToggle(!toggle)}
            >
              View
            </Link>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Upperbody Workout</h1>
          <div className={styles.grid}>
            <h3>Contains: 5 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <Link to="/programs/upperbodyworkout">View</Link>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Lowerbody Workout</h1>
          <div className={styles.grid}>
            <h3>Contains: 4 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <Link to="/programs/lowerbodyworkout">View</Link>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Bodyweight Only</h1>
          <div className={styles.grid}>
            <h3>Contains: 4 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <Link to="/programs/bodyweightonly">View</Link>
          </div>
        </div>
      </div>

      <h1>Weekly Training Session Templates</h1>

      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Fullbody Session</h1>
          <div className={styles.grid}>
            <h3>2/3 sessions per week</h3>
            <h3>4/5 days of recovery</h3>
            <Link to="/programs/fullbody" onClick={() => setToggle(!toggle)}>
              View
            </Link>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Upper/Lower Split</h1>
          <div className={styles.grid}>
            <h3>3 sessions per week</h3>
            <h3>4 days of recovery</h3>
            <Link to="/programs/upperlower">View</Link>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Beginners Session</h1>
          <div className={styles.grid}>
            <h3>3 sessions per week</h3>
            <h3>4 days of recovery</h3>
            <Link to="/programs/beginners">View</Link>
          </div>
        </div>
      </div>

      {toggle && <ModalBox />}
    </div>
  );
}

export default Programs;
