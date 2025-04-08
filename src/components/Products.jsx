import ProductCard from "./ProductCard";
import styles from "../styles/Products.module.css";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  return (
    <div className={styles.productsContainer}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
