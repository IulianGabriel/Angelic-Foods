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
        <div key={pizza._id}>{pizza.name}</div>
      ))}
    </>
  );
};

export default Pizza;
