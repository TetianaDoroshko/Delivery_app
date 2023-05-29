import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function Navigation() {
  const [active, setActive] = useState("shop");

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          to={"/"}
          onClick={() => setActive("shop")}
          className={cx("navBtn", { active: active === "shop" })}
        >
          Shop
        </Link>
        <Link
          to={"/cart"}
          onClick={() => setActive("cart")}
          className={cx("navBtn", { active: active === "cart" })}
        >
          Shopping cart
        </Link>
        <Link
          to={"/orders"}
          onClick={() => setActive("orders")}
          className={cx("navBtn", {
            active: active === "orders",
          })}
        >
          Orders
        </Link>
      </nav>
    </header>
  );
}

export default Navigation;
