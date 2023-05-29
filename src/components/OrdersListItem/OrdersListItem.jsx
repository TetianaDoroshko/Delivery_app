import React from "react";
import styles from "./OrdersListItem.module.css";

function OrdersListItem({ order }) {
  const { name, email, address, phone } = order.customer;
  return (
    <li className={styles.item}>
      <div className={styles.descr}>
        <p># {order._id}</p>
        <p> Date: {order.createdAt}</p>
        <p>Total cost: {order.total}</p>
      </div>
      <div className={styles.descr}>
        <p>Customer: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
      </div>
      <ul className={styles.descr}>
        {order.orderList.map((prod) => (
          <li key={prod._id} className={styles.product}>
            <span>{prod.productName}</span>
            <span className={styles.quantity}>{prod.quantity}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default OrdersListItem;
