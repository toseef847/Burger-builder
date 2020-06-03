import React from "react";
import styles from "./BuildControls.css";
import BuildControl from "../BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.addIngredient(ctrl.type)}
            removed={() => props.removeIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        disabled={!props.purchasable}
        className={styles.OrderButton}
        onClick={props.purchasing}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
