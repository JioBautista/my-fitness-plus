import React from "react";
import styles from "../styles/modalbox.module.scss";

function ModalBox({ closeModal, serverData }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Program Info</h1>
        <table>
          <tbody>
            {serverData[0].exercises.map((items) => (
              <>
                <tr>
                  <th>{items}</th>
                  <td>3 sets of 8 to 12 reps</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        <table>
          <tbody>
            {serverData[0].sessions.map((items) => (
              <>
                <tr>
                  <td>{items}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <button>Start Program</button>
        <button onClick={() => closeModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default ModalBox;
