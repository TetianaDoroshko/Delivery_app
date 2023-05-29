import React from "react";
import styles from "./Actions.module.css";

function Actions({ children }) {
  return <div className={styles.actions}>{children}</div>;
}

export default Actions;
