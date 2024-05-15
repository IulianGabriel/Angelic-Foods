import mainImage from "../assets/mainImage.jpg";
import { IoArrowDown } from "react-icons/io5";
import "./homepage.css";
const HomePage = () => {
  return (
    <div className="image-container">
      <img className="main-image" src={mainImage} />
      <div className="absolute-text">
        <h1 className="restaurant-name">Angelic Food</h1>
        <h3 className="restaurant-slogan">Enjoy the heavenly taste</h3>
        <button className="restaurant-seeMore">
          See Below <IoArrowDown />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
