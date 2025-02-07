import { Link } from "react-router-dom";

const NavigationLink = ({ path, name }) => {
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
};

export default NavigationLink;
