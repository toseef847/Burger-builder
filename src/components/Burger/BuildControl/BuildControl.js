import React from "react";
import styles from "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}:</div>
      <button
        className={styles.Less}
        disabled={props.disabled}
        onClick={props.removed}
      >
        Remove
      </button>
      <button className={styles.More} onClick={props.added}>
        Add
      </button>
    </div>
  );
};

export default BuildControl;
