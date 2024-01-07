import React from "react";
import styles from "../styles/bmi.module.scss";

function BMICalculator() {
  return (
    <div className={styles.container}>
      <h1>Body Mass Index Calculator</h1>
      <p>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
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
          <div>
            <p>Height</p>
            <input placeholder="cm" type="number" />
          </div>

          <div>
            <p>Weight</p>
            <input placeholder="kg" type="number"/>
          </div>
        </div>

        <div className={styles.buttons}>
          <button>CONFIRM</button>
          <button>RESET</button>
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
    </div>
  );
}

export default BMICalculator;
