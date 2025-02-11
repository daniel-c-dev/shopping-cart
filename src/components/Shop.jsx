import Products from "./Products.jsx";
import styles from "../styles/Shop.module.css";

const Shop = () => {
  return (
    <div className={styles.shopContainer}>
      <Products />
    </div>
  );
};

export default Shop;
