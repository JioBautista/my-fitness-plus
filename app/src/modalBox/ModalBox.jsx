import React from "react";
import styles from "../styles/modalbox.module.scss";

function ModalBox({ closeModal, serverData }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Program Info</h1>
        <table>
          <tbody>
            {serverData ? (
              serverData.exercises.map((items) => (
                <React.Fragment>
                  <tr>
                    <th>{items}</th>
                    <th>3 sets of 8 to 12 reps</th>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <th>Error</th>
            )}
          </tbody>
        </table>
        <button>Start Program</button>
        <button onClick={() => closeModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default ModalBox;
