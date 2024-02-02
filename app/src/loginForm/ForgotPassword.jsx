import React from 'react'
import styles from "../styles/loginform.module.scss"
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div className={styles.wrapper}>
        <h2>Forgot your password?</h2>
        <form>
            <label>Enter your email address</label>
            <input />
            <button>Submit</button>
        </form>
        <Link to="/">Return to Login</Link>
    </div>
  )
}

export default ForgotPassword