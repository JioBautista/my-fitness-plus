import React from "react";
import styles from "../styles/loginform.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <h1>Start your fitness journey.</h1>
      <h1>
        The <span>simple</span> way
      </h1>
      <h2>Create account or enter as guest</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Username"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && errors.username.type === "required" && (
          <p style={{ color: "red", alignSelf: "start" }}>Cannot be empty</p>
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && errors.password.type === "required" && (
          <p style={{ color: "red", alignSelf: "start" }}>Cannot be empty</p>
        )}
        <button>LOG IN</button>
        <button>ENTER AS GUEST</button>
      </form>
      <p className={styles.forgot}>
        Forgot your password or need help loggin in?{" "}
        <Link to="/forgotpass">Click Here</Link>
      </p>
      <p>
        Don't have an account? <Link to="/register">Create one here</Link>
      </p>
    </div>
  );
}

export default LogInForm;
