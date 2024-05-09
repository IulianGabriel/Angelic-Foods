import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizzaData, getPizzaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/pizza");
      const json = await data.json();
      return getPizzaData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      {pizzaData.map((pizza) => (
        <div key={pizza._id}>
          <img src={pizza.image} alt="pizza" />
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>{pizza.price}$</p>
          <button>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Pizza;
