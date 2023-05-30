import React, { useEffect, useState } from "react";
import ShopList from "../components/ShopList/ShopList";
import ProductList from "../components/ProductList/ProductList";
import { getAllProducts } from "../services/api_services";
import styles from "./page.module.css";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [shopFilter, setShopFilter] = useState(null);

  const filteredProducts = shopFilter
    ? products.filter((prod) => prod.owner._id === shopFilter)
    : products;

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  return (
    <main className={styles.page} style={{ display: "flex" }}>
      <ShopList products={products} setShopFilter={setShopFilter} />
      <ProductList products={filteredProducts} />
    </main>
  );
}

export default ProductPage;
