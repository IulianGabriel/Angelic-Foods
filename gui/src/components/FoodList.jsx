import useFoodData from "../hooks/useFoodData";
import PropTypes from "prop-types";

const FoodList = ({ foodType }) => {
  const foodData = useFoodData(foodType);
  return (
    <>
      {foodData.map((food) => (
        <div key={food._id}>
          <img src={food.image} alt={foodType} />
          <h2>{food.name}</h2>
          {foodType !== "beverage" ? <p>{food.description}</p> : null}
          <p>{food.price}$</p>
          <button>Add to cart</button>
        </div>
      ))}
    </>
  );
};

FoodList.propTypes = {
  foodType: PropTypes.string.isRequired,
};
export default FoodList;
