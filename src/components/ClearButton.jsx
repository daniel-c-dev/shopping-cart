import Button from "./Button";
import trashIcon from "/public/trash.svg";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/ClearButton.module.css";
import PropTypes from "prop-types";

const ClearButton = ({ product }) => {
  const { addToCart } = useOutletContext();

  const handleClearClick = () => {
    addToCart(product, 0);
  };

  return (
    <Button
      className={styles.clearButton}
      src={trashIcon}
      onClick={handleClearClick}
    />
  );
};

ClearButton.propTypes = {
  product: PropTypes.shape,
};

export default ClearButton;
