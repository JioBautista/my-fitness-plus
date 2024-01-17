import React, { useEffect } from "react";

function WorkOuts() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/chest")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return <div>WorkOuts</div>;
}

export default WorkOuts;
