import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import cartIcon from "/public/cart-outline.svg";
import styles from "../styles/CartButton.module.css";
import PropTypes from "prop-types";

const CartButton = ({ itemCount, path }) => {
  return (
    <Link to={path} className={styles.cart}>
      <Button className={styles.cartButton} src={cartIcon} />
      <Text className={styles.cartText} text={itemCount} />
    </Link>
  );
};

CartButton.propTypes = {
  itemCount: PropTypes.number,
  path: PropTypes.string,
};

export default CartButton;
