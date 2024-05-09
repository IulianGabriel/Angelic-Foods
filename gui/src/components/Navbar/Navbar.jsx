import { Link } from "react-router-dom";
import "./navbar.css";

const foods = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/pizza",
    text: "Pizza",
  },
  {
    url: "/burgers",
    text: "Burgers",
  },
  {
    url: "/pasta",
    text: "Pasta",
  },
  {
    url: "/desserts",
    text: "Desserts",
  },
  {
    url: "/beverages",
    text: "Beverages",
  },
  {
    url: "/sauces",
    text: "Sauces",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="navbar-div">
        {foods.map((food, index) => (
          <Link key={index} to={food.url}>
            <button>{food.text}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
