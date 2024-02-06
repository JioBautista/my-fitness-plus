import React from "react";
import styles from "../styles/home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to FitSimple!</h1>
      <h2>Ready to embark on a journey towards a healther and stronger you?</h2>
      <p>
        At FitSimple, we're thrilled to join you on this exciting adventure
        towards improved well-being and vitality. Whether you're a seasoned
        fitness enthusiast or taking your first steps into the world of
        wellness, we're here to guide and support you every step of the way.
      </p>
      <p>
        <span>Explore our Exercises Catalog:</span> Dive into our simple
        collection of exercises catering to all fitness levels. Our exercises
        catalog is your go-to resource building a versatile and effective
        workout routine.
      </p>

      <p>
        <span>Personalized Workout Programs:</span> No more guesswork! Our
        expertly crafted workout programs are designed to align with your
        fitness goals, whether it's muscle gain, weight loss, or orverall
        well-being. Experience personalized routines that evolve with your
        progress.
      </p>

      <p>
        <span>Nutrition Track Feature:</span> Fuel your fitness journey with
        precision. our state-of-the-art nutrition tracker empowers you to
        monitor your dietary intake and set goals. Achieve balance in your diet,
        supporting your body's needs and enhancing your workout results.
      </p>

      <img src="src/images/FIT_SIMPLE_LOGO_BLACK.png" />
      <p>- Empowering Your Fitness Goals, One Step at a Time!</p>
    </div>
  );
}

export default Home;
