import Input from "./Input.jsx";
import PropTypes from "prop-types";

const QuantityInput = ({ quantity, setQuantity }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  return (
    <div className="quantityInput">
      <Input type="number" value={quantity} min="1" onChange={handleChange} />
    </div>
  );
};

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
};

export default QuantityInput;
