import React, { useState } from "react";
import { getOrders } from "../services/api_services";
import GetOrdersForm from "../components/GetOrdersForm/GetOrdersForm";
import OrdersListItem from "../components/OrdersListItem/OrdersListItem";
import styles from "./page.module.css";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const dateStart = e.target.elements.dateStart.value;
    const dateEnd = e.target.elements.dateEnd.value;
    getOrders(dateStart, dateEnd)
      .then((data) => setOrders(data))
      .catch((err) => setError(err.message));
  };
  return (
    <div className={styles.page}>
      <GetOrdersForm onFormSubmit={onFormSubmit} />
      <div>
        {orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <OrdersListItem order={order} key={order._id} />
            ))}
          </ul>
        ) : error ? (
          <p>{error}</p>
        ) : (
          "There aren't any orders on this period"
        )}
      </div>
    </div>
  );
}

export default OrdersPage;
