import Button from "./Button.jsx";
import styles from "../styles/AddToCartButton.module.css";

const AddToCartButton = () => {
  return <Button className={styles.addToCart} text="Add to Cart" />;
};

export default AddToCartButton;
