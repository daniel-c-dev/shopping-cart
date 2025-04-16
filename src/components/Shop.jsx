import Text from "./Text.jsx";
import fetchProducts from "./fetchProducts.js";
import Products from "./Products.jsx";
import { useState, useEffect } from "react";
import styles from "../styles/Shop.module.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const fetchedProducts = await fetchProducts();
      console.log("Products: ", fetchedProducts);
      setProducts(fetchedProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <div className={styles.shopContainer}>
      {loading ? (
        <Text text="Loading products..." className={styles.loadingText} />
      ) : (
        <Products products={products} />
      )}
    </div>
  );
};

export default Shop;
