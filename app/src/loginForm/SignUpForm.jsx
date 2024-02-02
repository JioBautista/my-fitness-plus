import React from "react";
import styles from "../styles/loginform.module.scss";

function SignUpForm() {
  return (
    <div className={styles.wrapper}>
      <h2>Create an account</h2>
      <form>
        <input placeholder="Create a username" />
        <input placeholder="Create a password" type="password" />
        <input placeholder="Enter your email address" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
