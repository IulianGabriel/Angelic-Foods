import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";
import { calculateQuantity } from "../../utils/calculateQuantity";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
import "./cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    console.log(updatedCartItems);
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    console.log(updatedCartItems);
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="shopping-cart" onClick={handleOpenModal}>
        <FaShoppingCart style={{ width: "20px", height: "20px" }} />
        <p>Cart ({calculateQuantity(cartItems)})</p>
      </div>
      {openModal ? (
        <>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-container">
            <button onClick={handleCloseModal}>
              <IoCloseSharp />
            </button>
            <h2>Your Cart</h2>
            {cartItems.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  style={{ width: "50px", height: "50px" }}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>
                  {item.quantity} X ${item.price}
                </p>
                <section>
                  <button onClick={() => handleDecreaseQuantity(index)}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(index)}>
                    +
                  </button>
                </section>
              </div>
            ))}
            <p>Total: ${calculateTotalPrice(cartItems)}</p>
            <button onClick={handleCloseModal}>Close</button>
            {cartItems.length < 1 ? "" : <button>Go to Checkout</button>}
          </div>
        </>
      ) : null}
    </>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Cart;
