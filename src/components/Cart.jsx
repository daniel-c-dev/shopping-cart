import Text from "./Text";
import TotalPrice from "./TotalPrice";
import CartItemsContainer from "./CartItemsContainer";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <CartItemsContainer />
      <Text text="Total" className="totalPriceLabel" />
      <TotalPrice />
    </div>
  );
};

export default Cart;
