import Button from "./Button.jsx";
import Text from "./Text.jsx";
import cartIcon from "/public/cart-outline.svg";
import styles from "../styles/cart.module.css";
import PropTypes from "prop-types";

const Cart = ({ itemCount }) => {
  return (
    <div className={styles.cart}>
      <Button className={styles.cartButton} src={cartIcon} />
      <Text className={styles.cartText} text={itemCount} />
    </div>
  );
};

Cart.propTypes = {
  itemCount: PropTypes.number,
};

export default Cart;
