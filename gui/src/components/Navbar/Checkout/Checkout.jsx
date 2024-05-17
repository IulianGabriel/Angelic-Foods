import PropTypes from "prop-types";
import { useState } from "react";
import "./checkout.css";
import OrderComplete from "../OrderComplete/OrderComplete";

const Checkout = ({
  openCheckout,
  setOpenCheckout,
  totalPrice,
  setCartItems,
}) => {
  const [customerData, setCustomerData] = useState("");
  const handleCloseCheckout = () => {
    setOpenCheckout("");
  };
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());
    setCustomerData(customerData);
    setOpenCheckout("orderComplete");
  }

  return (
    <>
      {openCheckout === "checkout" ? (
        <>
          <div className="modal-overlay" onClick={handleCloseCheckout}></div>
          <div className="checkout-modal">
            <h1 className="checkout-title">Checkout</h1>
            <p className="total-amount">Total Amount: ${totalPrice}</p>

            <form onSubmit={handleSubmit} className="checkout-form">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="street">Street</label>
              <input type="text" id="street" name="street" required />

              <div className="additional-info">
                <div className="postal-code">
                  <label htmlFor="postal-code">Postal Code</label>
                  <input
                    type="text"
                    id="postal-code"
                    name="postalCode"
                    required
                  />
                </div>
                <div className="city">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" name="city" required />
                </div>
              </div>

              <div className="confirm-buttons">
                <button
                  className="closeCheckout-btn"
                  type="button"
                  onClick={handleCloseCheckout}
                >
                  Close
                </button>
                <button className="submitOrder-btn" type="submit">
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </>
      ) : openCheckout === "orderComplete" ? (
        <OrderComplete
          customerData={customerData}
          totalPrice={totalPrice}
          setOpenCheckout={setOpenCheckout}
          setCartItems={setCartItems}
        />
      ) : null}
    </>
  );
};

Checkout.propTypes = {
  openCheckout: PropTypes.string.isRequired,
  setOpenCheckout: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Checkout;
