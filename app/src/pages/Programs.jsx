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
      <h1>Kickstart your fitness journey with targeted workout programs!</h1>
      <h2>
        Tailored Full Body, Upper/Lower Split, and Bodyweight Programs with
        Clear Schedules and Rep Guidance
      </h2>

      <p>
        Your fitness journey begins now, and we're thrilled to be your guide.
        Our Workout Programs Page is your gateway to a fitter, stronger you,
        offering diverse programs crafted to suit your aspirations and elevate
        your fitness experience.
      </p>

      <h2>Discover Your Perfect Fit:</h2>

      <p>
        <span>Full Body Workouts:</span> Unleash the power of comprehensive
        workouts targeting every muscle group. Our Full Body Program is curated
        to provide a balanced and effective routine, ensuring no muscle is left
        untouched. Follow the detailed schedule and conquer each session with
        confidence.
      </p>

      <p>
        <span>Upper/Lower Body Split:</span> Refine your strength and physique
        with our Upper/Lower Body Program. This structured split focuses on
        specific muscle groups each day, with clear instructions for sets and
        reps to ensure you optimize your efforts.
      </p>

      <p>
        <span>Anywhere, Anytime with Bodyweight Bliss:</span> Embrace the
        freedom of our Bodyweight Program. No equipment, no excuses! Achieve a
        full-body burn with exercises tailored for bodyweight mastery, each with
        a carefully outline set and rep guide.
      </p>

      <h2>Your Journey Starts Here:</h2>

      <p>
        Readt to commit to a structured fitness plan? Choose your program to
        explore detailed schedules, exercise sets, and reps for each program.
        It's time to take charge of your fitness destiny!
      </p>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3>Fullbody Workout</h3>
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
          <h3>Upper/Lower Program</h3>
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
          <h3>Bodyweight Only</h3>
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
