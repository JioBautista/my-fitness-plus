import React from "react";
import styles from "../styles/nutrition.module.scss";

function Nutrition() {
  const [data, setData] = React.useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <div className={styles.container}>
      <h1>Nutrition Tracker</h1>
      <input type="date" />
      <input onChange={handleChange} />
      <p>{data}</p>
      <button>Search</button>
    </div>
  );
}

export default Nutrition;
