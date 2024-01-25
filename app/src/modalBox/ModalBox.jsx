import React from "react";
import styles from "../styles/modalbox.module.scss";

function ModalBox({ closeModal }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Fullbody Workout</h1>

        <table>
          <tr>
            <th>Exercises</th>
            <th>Sets & Repititions</th>
          </tr>

          <tr>
            <td>Barbell Bench Press</td>
            <td>3 sets of 8 to 12 reps</td>
          </tr>

          <tr>
            <td>Barbell Military Press</td>
            <td>3 sets of 8 to 12 reps</td>
          </tr>

          <tr>
            <td>Barbell Rows</td>
            <td>3 sets of 8 to 12 reps</td>
          </tr>

          <tr>
            <td>Barbell Squats</td>
            <td>3 sets of 8 to 12 reps</td>
          </tr>
        </table>
        <button>Start Program</button>
        <button onClick={() => closeModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default ModalBox;
