import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import styles from "./Layout.css";

const Layout = (props) => {
  return (
    <Aux>
      <div className={styles.content}>Navigation, Builder, Backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
