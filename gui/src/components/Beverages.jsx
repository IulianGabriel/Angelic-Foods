import { useEffect, useState } from "react";

const Beverages = () => {
  const [beveragesData, getBeveragesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/beverages");
      const json = await data.json();
      return getBeveragesData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      {beveragesData.map((beverage) => (
        <div key={beverage._id}>
          <img src={beverage.image} alt="drink" />
          <h2>{beverage.name}</h2>
          <p>{beverage.price}$</p>
          <button>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Beverages;
