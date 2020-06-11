import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import BackDrop from "../../../components/UI/Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = `${styles.SideDrawer} ${styles.Close}`;
  if (props.show) {
    attachedClasses = `${styles.SideDrawer} ${styles.Open}`;
  }
  return (
    <Aux>
      <BackDrop show={props.show} hide={props.clicked} />
      <div className={attachedClasses}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <div>
          <hr />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
