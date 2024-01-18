import React from "react";
import styles from "../styles/exercises.module.scss";

function ShoulderWorkout() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch(`http://localhost:3000/shoulders`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div>
      {data ? (
        data.map((items) => (
          <React.Fragment key={items.id}>
            <div className={styles.wrapper} key={items.id}>
              <h2>{items.name}</h2>
              <p>{items.instructions}</p>
              <iframe
                width="100%"
                height="315"
                src={items.videos}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          </React.Fragment>
        ))
      ) : (
        <h1>Page Not Found</h1>
      )}
    </div>
  );
}

export default ShoulderWorkout;
