import { Link } from "react-router-dom";
import styles from "../styles/NavigationLink.module.css";

const NavigationLink = ({ path, name }) => {
  return (
    <li className={styles.navLink}>
      <Link to={path}>{name}</Link>
    </li>
  );
};

export default NavigationLink;
