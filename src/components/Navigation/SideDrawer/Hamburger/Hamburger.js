import React from "react";
import styles from "./Hamburger.css";

const Hamburger = (props) => {
  return (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Hamburger;
