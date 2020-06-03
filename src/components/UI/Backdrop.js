import React from "react";
import styles from "./Backdrop.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.hide}></div>
  ) : null;
};

export default Backdrop;
