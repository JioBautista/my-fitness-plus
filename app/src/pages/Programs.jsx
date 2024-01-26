import React from "react";
import styles from "../styles/programs.module.scss";
import ModalBox from "../modalBox/ModalBox";
import { Link } from "react-router-dom";

function Programs({ grabUrl, params }) {
  const [toggle, setToggle] = React.useState(false);
  const [data, setData] = React.useState("");

  const closeModal = (data) => {
    setToggle(data);
  };

  const handleClick = (data) => {
    setToggle(!toggle);
    grabUrl(data);
  };

  function fetchAPI() {
    fetch(`http://localhost:3000/programs/${params}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log("Error", error));
  }

  React.useEffect(() => {
    fetchAPI();
  }, [params]);

  console.log(data);
  return (
    <div className={styles.container}>
      <h1>
        Workout programs designed for <span>beginners</span>
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1>Fullbody Workout</h1>
          <img src="src/images/pexels-victor-freitas-2261477.jpg" />
          <div className={styles.grid}>
            <h3>Contains: 6 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <Link
              to="/programs/fullbodyworkout"
              onClick={() => handleClick("fullbodyworkout")}
            >
              View
            </Link>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Upper/Lower Program</h1>
          <img src="src/images/pexels-ketut-subiyanto-4720770.jpg" />
          <div className={styles.grid}>
            <h3>Contains: 5 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <Link
              to="/programs/upperlowerworkout"
              onClick={() => handleClick("upperlowerworkout")}
            >
              View
            </Link>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Bodyweight Only</h1>
          <img src="src/images/pexels-li-sun-2294361.jpg" />
          <div className={styles.grid}>
            <h3>Contains: 4 exercises</h3>
            <h3>Duration: 45min - 1hr</h3>
            <Link
              to="/programs/bodyweightonly"
              onClick={() => handleClick("bodyweightonly")}
            >
              View
            </Link>
          </div>
        </div>
      </div>

      {toggle && <ModalBox closeModal={closeModal} serverData={data} />}
    </div>
  );
}

export default Programs;
