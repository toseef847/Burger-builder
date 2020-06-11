import React from "react";
import styles from "./Navbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Hamburger from "../SideDrawer/Hamburger/Hamburger";

const Navbar = (props) => {
  return (
    <header className={styles.Navbar}>
      <Hamburger clicked={props.toggleMenu}>MENU</Hamburger>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Navbar;
