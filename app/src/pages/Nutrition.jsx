import React from "react";
import styles from "../styles/nutrition.module.scss";

function Nutrition() {
  return (
    <div className={styles.container}>
      <h1>Nutrition Tracker</h1>
      <input type="date" />
      <input />

      <ul>
        <h2>Breakfast</h2>
        <li>Cereal</li>
      </ul>

      <ul>
        <h2>Lunch</h2>
        <li>
          Burger <button>Delete</button>
        </li>
      </ul>

      <ul>
        <h2>Dinner</h2>
        <li>Pasta</li>
      </ul>

      <ul>
        <h2>Snacks</h2>
        <li>Protein Bar</li>
      </ul>
    </div>
  );
}

export default Nutrition;
