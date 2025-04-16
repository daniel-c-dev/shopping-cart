import PropTypes from "prop-types";

const Input = ({ className, type, value, min, onChange }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      min={min}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.number,
  onChange: PropTypes.func,
};

export default Input;
