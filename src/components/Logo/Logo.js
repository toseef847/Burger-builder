import React from "react";
import styles from "./Logo.css";
import LogoImage from "../../assets/images/burger-logo.png";

const Logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={LogoImage} alt="My Burger Builder App logo" />
    </div>
  );
};
export default Logo;
