import React from "react";
import styles from "../styles/settings.module.scss";

function Settings() {
  return (
    <div className={styles.container}>
      <h1>Account Settings</h1>

      <div className={styles.content}>
        <div className={styles.inputs}>
          <div>
            <h2>Email</h2>
            <p>pachojio@gmail.com</p>
          </div>
          <img src="images/icons8-edit-64.png" />
        </div>

        <div className={styles.inputs}>
          <div>
            <h2>Username</h2>
            <p>Jbautista_</p>
          </div>
          <img src="images/icons8-edit-64.png" />
        </div>

        <div className={styles.inputs}>
          <div>
            <h2>Password</h2>
          </div>
          <img src="images/icons8-edit-64.png" />
        </div>

        <div className={styles.inputs}>
          <div>
            <h2>Language</h2>
            <p>English(UK)</p>
          </div>
          <img src="images/icons8-edit-64.png" />
        </div>

        <button>SAVE</button>
        <button>LOG OUT</button>
      </div>
    </div>
  );
}

export default Settings;
