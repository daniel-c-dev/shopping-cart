import Text from "./Text";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/CartItemsContainer.module.css";

const CartItemsContainer = () => {
  const { cartItems } = useOutletContext();

  return (
    <div className={styles.cartItemsContainer}>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => <CartItem key={index} product={item} />)
      ) : (
        <Text text="Cart is empty." className={styles.cartEmptyText} />
      )}
    </div>
  );
};

export default CartItemsContainer;
