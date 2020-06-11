import React, { useState } from "react";
import Aux from "../Auxiliary/Auxiliary";
import styles from "./Layout.css";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setShow] = useState(false);
  const toggleSideDrawer = () => {
    setShow(!showSideDrawer);
  };
  return (
    <Aux>
      <Navbar toggleMenu={toggleSideDrawer} />
      <SideDrawer show={showSideDrawer} clicked={toggleSideDrawer} />
      <main className={styles.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
