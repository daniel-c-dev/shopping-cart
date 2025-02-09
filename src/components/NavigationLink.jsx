import { Link } from "react-router-dom";
import styles from "../styles/NavigationLink.module.css";

const NavigationLink = ({ path, name }) => {
  return (
    <li className={styles.navLinkListItem}>
      <Link to={path} className={styles.navLink}>
        {name}
      </Link>
    </li>
  );
};

export default NavigationLink;
