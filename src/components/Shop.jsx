import fetchProducts from "./fetchProducts.js";
import Products from "./Products.jsx";
import styles from "../styles/Shop.module.css";
import { useState, useEffect } from "react";

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
      {loading ? <p>Loading products...</p> : <Products products={products} />}
    </div>
  );
};

export default Shop;
