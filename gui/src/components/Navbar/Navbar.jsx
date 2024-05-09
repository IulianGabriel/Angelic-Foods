import { Link } from "react-router-dom";
import { foods } from "../../utils/foods";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-div">
        {foods.map((food, index) => (
          <Link key={index} to={food.url}>
            <button>{food.text}</button>
          </Link>
        ))}
        <button>Cart(0)</button>
      </div>
    </>
  );
};

export default Navbar;
