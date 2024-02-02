import React from "react";
import styles from "../styles/loginform.module.scss";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className={styles.wrapper}>
      <h2>Create an account</h2>
      <form>
        <label>Create a username</label>
        <input />
        <label>Enter a password</label>
        <input type="password" />
        <label>Enter an email address</label>
        <input />
        <button>Sign Up</button>
      </form>

      <Link to="/">Return to Login</Link>
    </div>
  );
}

export default SignUpForm;
