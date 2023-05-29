import React from "react";
import styles from "./ProductOrderCard.module.css";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../redux/orderReducer";

function ProductOrderCard({ product }) {
  const dispatch = useDispatch();

  const onInputchangeQuantity = (evt) => {
    dispatch(changeQuantity({ _id: product._id, quantity: evt.target.value }));
  };
  return (
    <article className={styles.productCard}>
      <div className={styles.imgContainer}>
        <img
          src={product.img}
          alt={product.name}
          width={250}
          className={styles.image}
        />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>{product.price} money</p>
        <input
          type="number"
          value={product.quantity}
          onChange={onInputchangeQuantity}
          className={styles.quantity}
        />
      </div>
    </article>
  );
}

export default ProductOrderCard;
