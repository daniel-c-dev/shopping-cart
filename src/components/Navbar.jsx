import NavigationLink from "./NavigationLink";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <NavigationLink path="/" name="Home" />
        <NavigationLink path="/shop" name="Shop" />
      </ul>
    </nav>
  );
};

export default Navbar;
