import React from "react";
import styles from "../styles/sidebar.module.scss";
import SideBarContents from "./SideBarContents";

function SideBar() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <h1>MyFitnessPlus+</h1>

      <img
        src="public/images/icons8-menu-50.png"
        onClick={() => setToggle(!toggle)}
      />

      {toggle && (
        <>
          <div className={styles.overlay} onClick={() => setToggle(!toggle)}></div>
          <SideBarContents />
        </>
      )}
    </div>
  );
}

export default SideBar;
