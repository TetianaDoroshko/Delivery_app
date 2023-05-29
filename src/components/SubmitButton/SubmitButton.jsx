import React from "react";
import styles from "./SubmitButton.module.css";

function SubmitButton({ onFormSubmit }) {
  return (
    <button className={styles.submitButton} onClick={onFormSubmit}>
      Submit
    </button>
  );
}

export default SubmitButton;
