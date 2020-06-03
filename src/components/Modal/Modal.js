import React from "react";
import styels from "./Modal.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../components/UI/Backdrop";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} hide={props.hide}></Backdrop>
      <div
        className={styels.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
