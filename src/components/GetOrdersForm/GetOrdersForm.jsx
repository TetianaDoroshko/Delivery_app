import React from "react";
import styles from "./GetOrdersForm.module.css";

function GetOrdersForm({ onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <label className={styles.label}>
        From:
        <input type="date" name="dateStart" className={styles.input} />
      </label>
      <label className={styles.label}>
        To:
        <input type="date" name="dateEnd" className={styles.input} />
      </label>
      <button type="submit" className={styles.button}>
        Get orders
      </button>
    </form>
  );
}

export default GetOrdersForm;
