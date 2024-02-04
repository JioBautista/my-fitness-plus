import React from "react";
import styles from "../styles/loginform.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/register", {
        username: data.username,
        password: data.password,
        email: data.email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* CREATE USERNAME INPUT */}
        <label>Create a username</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 5,
              message: "Username must be at least 5 characters",
            },
            maxLength: {
              value: 10,
              message: "Username must be at most 10 characters",
            },
            pattern: /^[A-Za-z0-9]+$/i,
          })}
        />
        {errors.username && (
          <p style={{ textAlign: "start", color: "red" }}>
            {errors.username.message}
          </p>
        )}

        {/* CREATE PASSWORD INPUT */}
        <label>Enter a password</label>
        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^\d{4}$/,
              message: "Password must be a 4-digit number",
            },
          })}
          type="password"
        />
        {errors.password && (
          <p style={{ textAlign: "start", color: "red" }}>
            {errors.password.message}
          </p>
        )}

        {/* ENTER EMAIL ADDRESS INPUT */}
        <label>Enter an email address</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p style={{ textAlign: "start", color: "red" }}>
            {errors.email.message}
          </p>
        )}
        <button>Sign Up</button>
      </form>

      <Link to="/login">Return to Login</Link>
    </div>
  );
}

export default SignUpForm;
