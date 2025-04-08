import Image from "./Image.jsx";
import Text from "./Text.jsx";
import QuantityInput from "./QuantityInput.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/ProductCard.module.css";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { addToCart } = useOutletContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <Image src={product.image} />
      <Text text={product.title} />
      <QuantityInput />
      <AddToCartButton onClick={handleAddToCart} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default ProductCard;
