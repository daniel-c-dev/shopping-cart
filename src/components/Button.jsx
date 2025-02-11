import PropTypes from "prop-types";

const Button = ({ className, text, src, value, onClick }) => {
  return (
    <button className={className} value={value} onClick={onClick}>
      {text ? text : null}
      {src ? <img src={src} /> : null}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
