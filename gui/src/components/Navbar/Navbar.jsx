import { Link } from "react-router-dom";
import { foods } from "../../utils/foods";
import PropTypes from "prop-types";
import Cart from "./Cart";
import "./navbar.css";

const Navbar = ({ cartItems, setCartItems }) => {
  return (
    <>
      <div className="navbar-div">
        {foods.map((food, index) => (
          <Link key={index} to={food.url}>
            <button>{food.text}</button>
          </Link>
        ))}
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Navbar;
