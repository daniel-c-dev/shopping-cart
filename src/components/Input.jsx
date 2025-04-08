import PropTypes from "prop-types";

const Input = ({ type, value, min, onChange }) => {
  return <input type={type} value={value} min={min} onChange={onChange} />;
};

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
