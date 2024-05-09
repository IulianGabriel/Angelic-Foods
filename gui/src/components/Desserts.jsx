import { useEffect, useState } from "react";

const Desserts = () => {
  const [dessertsData, getDessertsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/desserts");
      const json = await data.json();
      return getDessertsData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      {dessertsData.map((dessert) => (
        <div key={dessert._id}>
          <img src={dessert.image} alt="dessert" />
          <h2>{dessert.name}</h2>
          <p>{dessert.description}</p>
          <p>{dessert.price}$</p>
          <button>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Desserts;
