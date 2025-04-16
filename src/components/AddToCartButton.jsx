import Button from "./Button.jsx";
import PropTypes from "prop-types";
import styles from "../styles/AddToCartButton.module.css";

const AddToCartButton = ({ onClick }) => {
  return (
    <Button className={styles.addToCart} text="Add to Cart" onClick={onClick} />
  );
};

AddToCartButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddToCartButton;
