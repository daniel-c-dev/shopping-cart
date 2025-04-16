import Text from "./Text";
import Image from "./Image";
import Price from "./Price";
import ClearButton from "./ClearButton";
import styles from "../styles/CartItem.module.css";
import PropTypes from "prop-types";

const CartItem = ({ product }) => {
  return (
    <div className={styles.cartItemContainer}>
      <Image
        src={product.image}
        alt={product.title}
        className={styles.cartItemImage}
      />
      <Text text={product.title} className={styles.cartItemTitle} />
      <Text text={product.quantity} className={styles.cartItemQuantity} />
      <Price price={product.price} />
      <ClearButton product={product} />
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
};

export default CartItem;
