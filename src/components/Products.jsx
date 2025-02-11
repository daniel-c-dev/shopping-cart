import ProductCard from "./ProductCard";
import styles from "../styles/Products.module.css";

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
