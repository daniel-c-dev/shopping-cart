import Image from "./Image.jsx";
import Text from "./Text.jsx";
import QuantityInput from "./QuantityInput.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <Image src="https://placehold.co/100x100.png" />
      <Text text="Product Name" />
      <QuantityInput />
      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
