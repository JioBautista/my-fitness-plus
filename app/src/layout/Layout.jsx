import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import styles from "../styles/layout.module.scss";

function Layout({ grabUrl }) {
  return (
    <div className={styles.container}>
      <SideBar grabUrl={grabUrl}/>
      <Outlet />
    </div>
  );
}

export default Layout;
