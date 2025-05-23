import Text from "./Text";
import HomeTitle from "./HomeTitle";
import HomeCarousel from "./HomeCarousel";
import RedirectButton from "./RedirectButton";
import fetchProducts from "./fetchProducts";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
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
    <div className={styles.homeContainer}>
      <HomeTitle />
      <RedirectButton path="/shop" text="Shop Now" />
      {loading ? (
        <Text text="Loading..." />
      ) : (
        <HomeCarousel products={products} />
      )}
    </div>
  );
};

export default Home;
