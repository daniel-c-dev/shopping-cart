import PropTypes from "prop-types";

const Text = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Text.defaultProps = {
  text: PropTypes.string.isRequired,
};

export default Text;
