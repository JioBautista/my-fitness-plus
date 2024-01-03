import React from "react";
import styles from "../styles/loginform.module.scss";

function LogInForm() {
  return (
    <div className={styles.wrapper}>
      <h1>MyFitnessPlus+</h1>
      <h2>Welcome Back</h2>
      <input
        placeholder="Username"
      />
      <input type="password" placeholder="Password" />
      <button>LOG IN</button>
      <p className={styles.forgot}>
        Forgot your Password or need help loggin in? <a>Click Here</a>
      </p>
      <p>
        Don't have an account? <a>Create one here</a>
      </p>
    </div>
  );
}

export default LogInForm;
