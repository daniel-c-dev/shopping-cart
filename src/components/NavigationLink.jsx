import { Link } from "react-router-dom";
import styles from "../styles/NavigationLink.module.css";
import PropTypes from "prop-types";

const NavigationLink = ({ path, name, className }) => {
  return (
    <li className={className}>
      <Link to={path} className={styles.navLink}>
        {name}
      </Link>
    </li>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default NavigationLink;
