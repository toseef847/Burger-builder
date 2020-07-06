import React, { Component } from "react";
import styels from "./Modal.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../components/UI/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      this.props.children !== nextProps.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} hide={this.props.hide}></Backdrop>
        <div
          className={styels.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0,
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
