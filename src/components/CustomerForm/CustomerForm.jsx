import React from "react";
import styles from "./CustomerForm.module.css";

function CustomerForm({ customer, onInputChange }) {
  return (
    <form className={styles.customerForm}>
      <label htmlFor="name" className={styles.label}>
        Name:
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter name"
        value={customer.name}
        onChange={onInputChange}
        className={styles.input}
      />
      <label htmlFor="email" className={styles.label}>
        Email:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter email"
        value={customer.email}
        onChange={onInputChange}
        className={styles.input}
      />
      <label htmlFor="phone" className={styles.label}>
        Phone:
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Enter phone"
        value={customer.phone}
        onChange={onInputChange}
        className={styles.input}
      />
      <label htmlFor="address" className={styles.label}>
        Address:
      </label>
      <input
        id="address"
        type="text"
        name="address"
        placeholder="Enter address"
        value={customer.address}
        onChange={onInputChange}
        className={styles.input}
      />
    </form>
  );
}

export default CustomerForm;
