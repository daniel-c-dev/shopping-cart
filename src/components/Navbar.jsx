import NavigationLink from "./NavigationLink";
import Cart from "./Cart";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <NavigationLink path="/" name="Home" />
        <NavigationLink path="/shop" name="Shop" />
        <Cart />
      </ul>
    </nav>
  );
};

export default Navbar;
