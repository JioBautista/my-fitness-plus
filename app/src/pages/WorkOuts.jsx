import React, { useEffect } from "react";

function WorkOuts() {
  const [data, setData] = React.useState("");

  useEffect(() => {
    fetch("http://localhost:3000/chest")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      {data &&
        data.map((items) => {
          return (
            <>
              <div>
                <h2>{items.name}</h2>
                <p>{items.instructions}</p>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default WorkOuts;
