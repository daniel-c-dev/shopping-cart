import PropTypes from "prop-types";

function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
