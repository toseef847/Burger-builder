import React from "react";
import styles from "./Burger.css";
import Burgeringredients from "./Burgeringredients/Burgeringredients";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((el, i) => {
        return <Burgeringredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((curr, el) => {
      return curr.concat(el);
    });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients.</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className={styles.Burger}>
      <Burgeringredients type="bread-top" />
      {transformedIngredients}
      <Burgeringredients type="bread-bottom" />
    </div>
  );
};
export default Burger;
