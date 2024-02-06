import React from "react";
import styles from "../styles/modalbox.module.scss";

function ModalBox({ closeModal, serverData }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Program Info</h1>
        <table>
          <thead>
            <tr>
              <th>Exercises</th>
              <th>Sets & Reps</th>
            </tr>
          </thead>
          <tbody>
            {serverData ? (
              serverData.exercises.map((items) => (
                <React.Fragment>
                  <tr>
                    <td>{items}</td>
                    <td>3 sets of 8 to 12 reps</td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <th>Error</th>
            )}
          </tbody>

          <thead>
            <tr>
              <th>Days</th>
              <th>Train or Rest</th>
            </tr>
          </thead>
          <tbody>
            {serverData ? (
              serverData.sessions.map((items) => (
                <React.Fragment>
                  <tr>
                    <td>{items.day}</td>
                    <td>{items.train}</td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <th>Error</th>
            )}
          </tbody>
        </table>
        <button onClick={() => closeModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default ModalBox;
