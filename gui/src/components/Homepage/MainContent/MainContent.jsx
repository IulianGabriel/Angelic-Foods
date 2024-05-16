import mainImage from "../../../assets/mainImage.jpg";
import { IoArrowDown } from "react-icons/io5";
import "./mainContent.css";
const MainContent = () => {
  return (
    <div className="image-container">
      <img className="main-image" src={mainImage} />
      <div className="absolute-text">
        <h1 className="restaurant-name">Angelic Food</h1>
        <h3 className="restaurant-slogan">Indulge in flavor</h3>
        <a className="test" href="#menu">
          <button className="restaurant-seeMore">
            See Below <IoArrowDown />
          </button>
        </a>
      </div>
    </div>
  );
};

export default MainContent;
