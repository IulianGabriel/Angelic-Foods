import { Link } from "react-router-dom";
import { foods } from "../../utils/foods";
import PropTypes from "prop-types";
import Cart from "./Cart";
import "./navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <>
      <div className="navbar-div">
        {foods.map((food, index) => (
          <Link key={index} to={food.url}>
            <button>{food.text}</button>
          </Link>
        ))}
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Navbar;
