import React from "react";
import styles from "./ShopList.module.css";

function ShopItem({ shop, setShopFilter }) {
  return (
    <li
      key={shop.id}
      className={styles.shopItem}
      onClick={() => setShopFilter(shop._id)}
    >
      {shop.name}
    </li>
  );
}

export default ShopItem;
