import Button from "./Button.jsx";
import Text from "./Text.jsx";
import cartIcon from "/public/cart-outline.svg";
import styles from "../styles/cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <Button className={styles.cartButton} src={cartIcon} />
      <Text className={styles.cartText} text="33" />
    </div>
  );
};

export default Cart;
