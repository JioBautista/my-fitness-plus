import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import styles from "../styles/layout.module.scss";

function Layout() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Layout;
