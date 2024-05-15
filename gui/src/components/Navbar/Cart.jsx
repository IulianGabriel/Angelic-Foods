import { useState } from "react";
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
            <div className="cart-title-container">
            <h2 className="cart-title">Your Cart</h2>
            <hr />
            </div>
            {cartItems.length === 0 && (
              <p className="empty-cart-text">Your cart is empty</p>
            )}
            {cartItems.map((item, index) => (
              <div className="product-container" key={index}>
                <div className="product-details">
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <p className="product-name">{item.name}</p>
                  <p className="product-qp">
                    {item.quantity} x ${item.price}
                  </p>
                </div>
                <div className="product-quantity">
                  <button
                    className="quantity-buttons"
                    onClick={() => handleDecreaseQuantity(index)}
                  >
                    -
                  </button>
                  <p className="display-selected-quantity">{item.quantity}</p>
                  <button
                    className="quantity-buttons"
                    onClick={() => handleIncreaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              {cartItems.length === 0 ? null : (
                <p className="total-price">
                  Total: ${calculateTotalPrice(cartItems)}
                </p>
              )}
              <div className="cart-summary-buttons">
                <button className="closeCart-btn" onClick={handleCloseModal}>
                  Close
                </button>
                {cartItems.length < 1 ? null : (
                  <button className="checkout-button">Go to Checkout</button>
                )}
              </div>
            </div>
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
