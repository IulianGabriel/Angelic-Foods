import mainImage from "../assets/mainImage.jpg";
import mealImage from "../assets/MealPhoto.jpg";
import { IoArrowDown } from "react-icons/io5";
import "./homepage.css";
const HomePage = () => {
  return (
    <>
      <div className="image-container">
        <img className="main-image" src={mainImage} />
        <div className="absolute-text">
          <h1 className="restaurant-name">Angelic Food</h1>
          <h3 className="restaurant-slogan">Enjoy the heavenly taste</h3>
          <a className="test" href="#mealImage">
            <button className="restaurant-seeMore">
              See Below <IoArrowDown />
            </button>
          </a>
        </div>
      </div>
      <div className="meals-container" id="mealImage">
        <h1 className="promote-meals-text">Check out our freshest meals!</h1>
        {/* <div className="mealImage-container">
          <img className="mealImage" src={mealImage} alt="Meal Image" />
          <img className="mealImage" src={mealImage} alt="Meal Image" />
          <img className="mealImage" src={mealImage} alt="Meal Image" />
          <img className="mealImage" src={mealImage} alt="Meal Image" />
          <img className="mealImage" src={mealImage} alt="Meal Image" />
          <img className="mealImage" src={mealImage} alt="Meal Image" />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
