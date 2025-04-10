import Text from "./Text.jsx";
import PropTypes from "prop-types";

const Price = ({ price }) => {
  const priceInUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return <Text text={priceInUSD.format(price)} className="totalPrice" />;
};

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
