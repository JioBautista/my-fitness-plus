import React from "react";
import styles from "../styles/sidebar.module.scss"

function SideBarContents() {
  return (
    <div className={styles.collapsed}>
      <button>
        <img src="public/images/icons8-workout-50.png" />
        WORKOUTS
      </button>
      <button>
        <img src="public/images/icons8-nutrition-32.png" />
        NUTRITION
      </button>
      <button>
        <img src="public/images/icons8-calculator-64.png" />
        BMI CALCULATOR
      </button>
      <hr></hr>
      <button>
        <img src="public/images/icons8-user-30.png" />
        Jbautista
      </button>
      <button>
        <img src="public/images/icons8-settings-50.png" />
        Settings
      </button>
    </div>
  );
}

export default SideBarContents;
