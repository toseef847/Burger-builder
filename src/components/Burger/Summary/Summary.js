import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const Summary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <strong>{igkey}:</strong> {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <div>
        <h3 style={{ textAlign: "center" }}>Your Order</h3>
        <hr />
        <p>Your Delicious Burger with folowing ingredients:</p>
        <ul>{ingredients}</ul>
        <p>
          <strong>Total Price: ${props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <hr />
        <Button btnType="Danger" clicked={props.cancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.proceed}>
          PROCEED
        </Button>
      </div>
    </Aux>
  );
};

export default Summary;
