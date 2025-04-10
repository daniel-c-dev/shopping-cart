import { useOutletContext } from "react-router-dom";
import Text from "./Text.jsx";

const TotalPrice = () => {
  const { cartItems } = useOutletContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const priceInUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <Text text={priceInUSD.format(totalPrice)} className="totalPrice" />
    </div>
  );
};

export default TotalPrice;
