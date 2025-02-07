import NavigationLink from "./NavigationLink";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-link">
        <NavigationLink path="/" name="Home" />
        <NavigationLink path="/shop" name="Shop" />
      </ul>
    </div>
  );
};

export default Navbar;
