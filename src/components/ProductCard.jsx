import Image from "./Image.jsx";
import Text from "./Text.jsx";
import QuantityInput from "./QuantityInput.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import styles from "../styles/ProductCard.module.css";
import PropTypes from "prop-types";

const ProductCard = ({ image, title }) => {
  return (
    <div className={styles.productCard}>
      <Image src={image} />
      <Text text={title} />
      <QuantityInput />
      <AddToCartButton />
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ProductCard;
