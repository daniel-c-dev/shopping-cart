import CarouselItem from "./CarouselItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/HomeCarousel.module.css";
import PropTypes from "prop-types";

const HomeCarousel = ({ products }) => {
  const carouselProducts = products.slice(0, 5);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.homeCarouselContainer}>
      <Slider {...settings}>
        {carouselProducts.map((item, index) => (
          <CarouselItem key={index} product={item} />
        ))}
      </Slider>
    </div>
  );
};

HomeCarousel.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

export default HomeCarousel;
