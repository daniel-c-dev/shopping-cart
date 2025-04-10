import Image from "./Image.jsx";
import Text from "./Text.jsx";
import Price from "./Price.jsx";
import QuantityInput from "./QuantityInput.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/ProductCard.module.css";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { addToCart } = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className={styles.productCard}>
      <Image src={product.image} />
      <Text text={product.title} />
      <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      <Price price={product.price} />
      <AddToCartButton onClick={handleAddToCart} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ProductCard;
