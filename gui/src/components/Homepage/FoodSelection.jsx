import { carouselFoods } from "../../utils/carouselFoods";
import { LuMenuSquare } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./homepage.css";

const FoodSelection = () => {
  return (
    <div className="meals-container" id="mealImage">
      <h1 className="promote-meals-text">
        <span className="icon-styling">
          <LuMenuSquare color="#e0a42c" />
        </span>
        View our selection!
      </h1>
      <div className="foodType-container">
        <Carousel
          autoPlay={true}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={2500}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          draggable={false}
          focusOnSelect={false}
          infinite
          keyBoardControl
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {carouselFoods.map((food, index) => (
            <div key={index}>
              <div className="carousel-item">
                <img className="foodtype-image" src={food.img} />
                <p className="foodtype-description">{food.description}</p>
                <Link
                  style={{ marginBottom: "2rem" }}
                  to={food.type.toLowerCase()}
                  className="foodtype-button"
                >
                  {food.type}
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FoodSelection;
