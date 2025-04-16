import Text from "./Text";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/CartItemsContainer.module.css";

const CartItemsContainer = () => {
  const { cartItems } = useOutletContext();
  const visibleItems = cartItems.filter((item) => item.quantity > 0);

  return (
    <div className={styles.cartItemsContainer}>
      {visibleItems.length > 0 ? (
        visibleItems.map((item, index) => (
          <CartItem key={index} product={item} />
        ))
      ) : (
        <Text text="Cart is empty." className={styles.cartEmptyText} />
      )}
    </div>
  );
};

export default CartItemsContainer;
