import Button from "./Button";
import PlusIcon from "/public/plus.svg";
import PropTypes from "prop-types";

const PlusButton = ({ className, onClick }) => {
  return <Button className={className} src={PlusIcon} onClick={onClick} />;
};

PlusButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default PlusButton;
