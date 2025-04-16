import Button from "./Button";
import MinusIcon from "/public/minus.svg";
import PropTypes from "prop-types";

const MinusButton = ({ className, onClick }) => {
  return <Button className={className} src={MinusIcon} onClick={onClick} />;
};

MinusButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MinusButton;
