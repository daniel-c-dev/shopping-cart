import Text from "./Text";
import TotalPrice from "./TotalPrice";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <Text text="Total" className="totalPriceLabel" />
      <TotalPrice totalPrice={0} />
    </div>
  );
};

export default Cart;
