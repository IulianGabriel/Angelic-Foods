import React from "react";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import "./cart.css";

const Cart = ({ cartItems }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  console.log(cartItems);
  return (
    <>
      <button onClick={handleOpenModal}>Cart({cartItems.length})</button>
      {openModal ? (
        <>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-container">
            <button onClick={handleCloseModal}>
              <IoCloseSharp />
            </button>
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
                  {item.quantity} X {item.price}$
                </p>
                <section>
                  <button>-</button>
                  <p>{item.quantity}</p>
                  <button>+</button>
                </section>
                <button>Close</button>
                {cartItems.length < 1 ? "" : <button>Go to Checkout</button>}
              </div>
            ))}
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
};

export default Cart;
