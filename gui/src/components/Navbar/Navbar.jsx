import { NavLink } from "react-router-dom";
import { foods } from "../../utils/foods";
import PropTypes from "prop-types";
import Cart from "./Cart";
import logo from "../../assets/Logo.png";
import "./navbar.css";

const Navbar = ({ cartItems, setCartItems }) => {
  return (
    <>
      <div className="navbar-div">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="food-routes">
          {foods.map((food, index) => (
            <NavLink
              key={index}
              to={food.url}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {food.text}
            </NavLink>
          ))}
        </div>
        <div className="cart-container">
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
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
