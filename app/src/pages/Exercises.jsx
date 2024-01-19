import React, { useEffect } from "react";
import styles from "../styles/exercises.module.scss";

function Exercises({ params }) {
  const [data, setData] = React.useState("");

  function fetchAPI() {
    fetch(`http://localhost:3000/workouts/${params}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log("Error", error));
  }

  useEffect(() => {
    fetchAPI();
  }, [params]);

  return (
    <div className={styles.container}>
      <h1>Exercises based on muscle group</h1>
      {data ? (
        data.map((items) => (
          <React.Fragment key={items.id}>
            <div className={styles.wrapper} key={items.id}>
              <h2>{items.name}</h2>
              <h3>
                {" "}
                Good for: <span>{items.difficulty}</span>
              </h3>
              <p>Equipment needed: {items.equipment}</p>
              <p>{items.instructions}</p>
            </div>
          </React.Fragment>
        ))
      ) : (
        <h1>Page Not Found</h1>
      )}
    </div>
  );
}

export default Exercises;
