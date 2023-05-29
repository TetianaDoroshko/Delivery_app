import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../../redux/orderReducer";
import styles from "./ProductList.module.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order);

  const [selectedShop, setSelectedShop] = useState("");

  useEffect(() => {
    if (order.length > 0) {
      setSelectedShop(order[0].owner._id);
    } else {
      setSelectedShop("");
    }
  }, [order]);

  const addToCart = (addedProd) => {
    dispatch(addToOrder(addedProd));
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
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>{product.price} money</p>
      <button
        onClick={() => addToCart(product)}
        className={styles.btnAdd}
        disabled={order.length && product.owner._id !== selectedShop}
        title={
          order.length && product.owner._id !== selectedShop
            ? "You can order products from one shop only"
            : "Add to cart"
        }
      >
        {order.some((prod) => prod._id === product._id)
          ? "Add +1"
          : "Add to cart"}
      </button>
    </article>
  );
}

export default ProductCard;
