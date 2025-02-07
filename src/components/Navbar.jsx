import NavigationLink from "./NavigationLink";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarLink}>
        <NavigationLink path="/" name="Home" />
        <NavigationLink path="/shop" name="Shop" />
      </ul>
    </div>
  );
};

export default Navbar;
