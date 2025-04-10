import NavigationLink from "./NavigationLink";
import CartButton from "./CartButton";
import styles from "../styles/Navbar.module.css";
import PropTypes from "prop-types";

const Navbar = ({ itemCount }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <NavigationLink path="/" name="Home" />
        <NavigationLink path="/shop" name="Shop" />
        <CartButton itemCount={itemCount} path="/cart" />
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  itemCount: PropTypes.number,
};

export default Navbar;
