import React from "react";
import styles from "../styles/bmi.module.scss";

function BMICalculator() {
  return (
    <div className={styles.wrapper}>
      <h2>Enter your details below</h2>

      <div className={styles.radio}>
        <label>
          <input type="radio" />
          Metric
        </label>

        <label>
          <input type="radio" />
          Imperial
        </label>
      </div>

      <div className={styles.inputs}>
        <p>Height</p>
        <input placeholder="cm" />
        <p>Weight</p>
        <input placeholder="kg" />
      </div>

      <div className={styles.result}>
        <div>
          <p>Your BMI is...</p>
          <h1>23.4</h1>
        </div>

        <p>
          Your BMI suggests you're a healthy weight. Your ideal weight is
          between <span>63.3kgs - 85.2kgs.</span>
        </p>
      </div>
    </div>
  );
}

export default BMICalculator;
