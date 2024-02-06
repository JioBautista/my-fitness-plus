import React from "react";
import styles from "../styles/home.module.scss";

function ExerciseCatalog() {
  return (
    <div className={styles.container}>
      <h1>Explore our Exercise Catalog</h1>
      <h2>
        Dive into our catalog of simple exercises with clear instructions and
        guided videos
      </h2>
      <p>
        <span>Workout Names:</span> Browse through our extensive list of
        workouts, each carefully curated to target specific muscle groups or
        enchance overall fitness.{" "}
      </p>

      <p>
        <span>Clear Instructions:</span> No need to guess your way through a
        workout. Each exercise comes with detailed instructions to ensure proper
        form and technique. Follow along seamlessly, making the most out of
        every movement.
      </p>

      <p>
        <span>Video Links:</span> Elevate your workout experience with our video
        links accompanying each exercise. Visualize the movements, understand
        the flow, and feel confident in your execution. It's like having a
        personal trainer in the comfort of your own space.
      </p>

      <p>
        Ready to explore and elevate your fitness routine? Hover over the links
        to access the exercise catalog and start your journey towards a
        healthier, stronger you.
      </p>
    </div>
  );
}

export default ExerciseCatalog;
