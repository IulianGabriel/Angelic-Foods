import useFoodData from "../../hooks/useFoodData";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./foodList.css";

const FoodList = ({ foodType }) => {
  const [foodData, loading, setSortingFilter] = useFoodData(foodType);
  const [cartItems, setCartItems] = useOutletContext();
  const handleAddToCart = (itemName, itemImage, itemPrice) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === itemName
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        { name: itemName, image: itemImage, price: itemPrice, quantity: 1 },
      ]);
    }
  };

  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className="price-filter-container">
          <label className="sortBy-text" htmlFor="price">
            Sort by:{" "}
          </label>
          <select
            className="select-styling"
            name="price"
            id="price"
            onChange={(e) => setSortingFilter(e.target.value)}
          >
            <option value="">Default</option>
            <option value="asc">Low to High price</option>
            <option value="desc">High to Low price</option>
          </select>
        </div>
      )}

      <div className="food-container">
        {loading && (
          <>
            <h1 className="loading-message">Loading...</h1>
            <ClipLoader
              color="#e0a42c"
              size="50"
              cssOverride={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </>
        )}
        {foodData.map((food) => (
          <div key={food._id} className="food-card">
            <img src={food.image} alt={foodType} className="food-image" />
            <h2 className="food-name">{food.name}</h2>
            <p className="food-price">${food.price}</p>
            {foodType !== "beverage" ? (
              <p className="food-description">{food.description}</p>
            ) : null}
            <button
              className="addToCart-btn"
              onClick={() => handleAddToCart(food.name, food.image, food.price)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

FoodList.propTypes = {
  foodType: PropTypes.string.isRequired,
};
export default FoodList;
