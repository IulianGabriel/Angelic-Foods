import useFoodData from "../hooks/useFoodData";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const FoodList = ({ foodType }) => {
  const foodData = useFoodData(foodType);
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

  console.log(cartItems);
  return (
    <>
      {foodData.map((food) => (
        <div key={food._id}>
          <img src={food.image} alt={foodType} />
          <h2>{food.name}</h2>
          {foodType !== "beverage" ? <p>{food.description}</p> : null}
          <p>{food.price}$</p>
          <button
            onClick={() => handleAddToCart(food.name, food.image, food.price)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};

FoodList.propTypes = {
  foodType: PropTypes.string.isRequired,
};
export default FoodList;
