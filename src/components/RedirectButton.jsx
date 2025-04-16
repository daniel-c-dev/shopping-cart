import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import styles from "../styles/RedirectButton.module.css";
import PropTypes from "prop-types";

const RedirectButton = ({ path, text }) => {
  return (
    <Link to={path} className={styles.redirectButtonContainer}>
      <Button className={styles.redirectButton} text={text} />
    </Link>
  );
};

RedirectButton.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default RedirectButton;
