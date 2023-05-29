import React from "react";
import ShopItem from "./ShopItem";
import styles from "./ShopList.module.css";

function ShopList({ products, setShopFilter }) {
  const shops = products.map((prod) => prod.owner);

  const uniqueShops = [];

  shops.forEach((el) => {
    if (!uniqueShops.some((shop) => shop._id === el._id)) {
      uniqueShops.push(el);
    }
  });

  uniqueShops.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul className={styles.shopList}>
      {uniqueShops.map((shop) => (
        <ShopItem key={shop._id} shop={shop} setShopFilter={setShopFilter} />
      ))}
    </ul>
  );
}

export default ShopList;
