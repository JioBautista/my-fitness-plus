import React from 'react'
import SideBar from '../sidebar/SideBar'
import styles from "../styles/dashboard.module.scss"

function Dashboard() {
  return (
    <div className={styles.container}>
        <SideBar />
    </div>
  )
}

export default Dashboard