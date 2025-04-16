import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: quantity } : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity }];
      }
    });
  };

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.app}>
      <Navbar itemCount={itemCount} />
      <Outlet context={{ cartItems, addToCart }} />
    </div>
  );
};

export default App;
