import React, { useEffect } from "react";

function ChestWorkout() {
  const [data, setData] = React.useState("");

  useEffect(() => {
    fetch("http://localhost:3000/chest")
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
          <>
            <div>
              <h2>{items.name}</h2>
              <p>{items.instructions}</p>
              <iframe
                width="560"
                height="315"
                src={items.videos}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </>
        ))
      ) : (
        <h1>Page Not Found</h1>
      )}
    </div>
  );
}

export default ChestWorkout;
