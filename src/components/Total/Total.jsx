import React from "react";
import styles from "./Total.module.css";

function Total({ total }) {
  return <div className={styles.total}>Total price: {total}</div>;
}

export default Total;
