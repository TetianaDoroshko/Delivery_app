import React from "react";
import styles from "./ProductOrder.module.css";
import { useSelector } from "react-redux";
import ProductOrderCard from "../ProductOrderCard/ProductOrderCard";

function ProductOrder() {
  const order = useSelector((store) => store.order);

  return (
    <div className={styles.productOrder}>
      {order.length > 0 ? (
        order.map((product) => (
          <ProductOrderCard product={product} key={product._id} />
        ))
      ) : (
        <p>Your cart is empty. Make your choice!</p>
      )}
    </div>
  );
}

export default ProductOrder;
