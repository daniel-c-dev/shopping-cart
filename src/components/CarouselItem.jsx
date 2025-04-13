import Text from "./Text";
import Image from "./Image";
import styles from "../styles/CarouselItem.module.css";
import PropTypes from "prop-types";

const CarouselItem = ({ product }) => {
  return (
    <div className={styles.carouselItemContainer}>
      <Image
        src={product.image}
        alt={product.title}
        className={styles.carouselItemImage}
      />
      <Text text={product.title} className={styles.carouselItemTitle} />
    </div>
  );
};

CarouselItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default CarouselItem;
