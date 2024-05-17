import PropTypes from "prop-types";
import "./checkout.css";

const Checkout = ({ openCheckout, setOpenCheckout, totalPrice }) => {
  const handleCloseCheckout = () => {
    setOpenCheckout(false);
  };
  return (
    <>
      <div className="modal-overlay" onClick={handleCloseCheckout}></div>
      <div className="checkout-modal">
        <h1 className="checkout-title">Checkout</h1>
        <p className="total-amount">Total Amount: ${totalPrice}</p>

        <form className="checkout-form">
          <label htmlFor="">Full Name</label>
          <input type="text" name="" id="" />

          <label htmlFor="">E-Mail Address</label>
          <input type="text" name="" id="" />

          <label htmlFor="">Street</label>
          <input type="text" name="" id="" />
          <div className="additional-info">
            <div className="postal-code">
              <label htmlFor="">Postal Code</label>
              <input type="text" name="" id="" />
            </div>
            <div className="city">
              <label htmlFor="">City</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </form>
        <div className="confirm-buttons">
          <button className="closeCheckout-btn" onClick={handleCloseCheckout}>
            Close
          </button>
          <button className="submitOrder-btn">Submit Order</button>
        </div>
      </div>
    </>
  );
};

Checkout.propTypes = {
  openCheckout: PropTypes.bool.isRequired,
  setOpenCheckout: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Checkout;
