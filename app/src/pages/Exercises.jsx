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
              <h3>Preparation</h3>
              <p>{items.preparation}</p>
              <h3>Execution</h3>
              <p>{items.execution}</p>
              <iframe
                width="100%"
                height="315"
                src={items.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </React.Fragment>
        ))
      ) : (
        <h2>Page Not Found</h2>
      )}
    </div>
  );
}

export default Exercises;
