import styles from "./ProductList.module.css";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
