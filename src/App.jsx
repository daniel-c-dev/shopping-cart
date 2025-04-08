import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className={styles.app}>
      <Navbar itemCount={cartItems.length} />
      <Outlet context={{ cartItems, addToCart }} />
    </div>
  );
};

export default App;
