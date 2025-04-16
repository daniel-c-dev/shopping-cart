import Input from "./Input.jsx";
import MinusButton from "./MinusButton.jsx";
import PlusButton from "./PlusButton.jsx";
import styles from "../styles/QuantityInput.module.css";
import PropTypes from "prop-types";

const QuantityInput = ({ quantity, setQuantity }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const handleMinusClick = () => {
    let value = quantity - 1;
    if (value <= 1) {
      value = 1;
    }
    setQuantity(value);
  };
  const handlePlusClick = () => {
    let value = quantity + 1;
    setQuantity(value);
  };

  return (
    <div className={styles.quantityInput}>
      <MinusButton className={styles.minusButton} onClick={handleMinusClick} />
      <Input
        className={styles.inputField}
        type="number"
        value={quantity}
        min="1"
        onChange={handleChange}
      />
      <PlusButton className={styles.plusButton} onClick={handlePlusClick} />
    </div>
  );
};

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
};

export default QuantityInput;
