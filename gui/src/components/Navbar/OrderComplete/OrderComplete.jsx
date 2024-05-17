import PropTypes from "prop-types";
import "./orderComplete.css";
import { Link } from "react-router-dom";

const OrderComplete = ({
  customerData,
  totalPrice,
  setOpenCheckout,
  setCartItems,
}) => {
  const handleCloseModal = () => {
    setOpenCheckout("");
    setCartItems([]);
  };
  return (
    <>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
      <div className="orderComplete-modal">
        <h1>Order Successful</h1>
        <div className="orderComplete-container">
          <p className="orderComplete-text">
            Dear <span className="highlight-span">{customerData.name},</span>{" "}
            <br /> Thank you for your order! Your total comes to{" "}
            <span className="highlight-span">${totalPrice}. </span> <br />
            Your delivery address:{" "}
            <span className="highlight-span">
              &quot;{customerData.street},
            </span>{" "}
            <span className="highlight-span">{customerData.city}&quot;</span>
            <br /> Keep an eye on your inbox for additional information sent to
            <span className="highlight-span"> {customerData.email}.</span>
          </p>
          <Link to="/">
            <button className="confirm-btn" onClick={handleCloseModal}>
              Okay
            </button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

OrderComplete.propTypes = {
  customerData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
  setOpenCheckout: PropTypes.func.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default OrderComplete;
