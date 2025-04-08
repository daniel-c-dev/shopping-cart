import Button from "./Button.jsx";
import styles from "../styles/AddToCartButton.module.css";

const AddToCartButton = ({ onClick }) => {
  return (
    <Button className={styles.addToCart} text="Add to Cart" onClick={onClick} />
  );
};

export default AddToCartButton;
