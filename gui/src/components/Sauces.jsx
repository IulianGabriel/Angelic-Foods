import { useEffect, useState } from "react";

const Sauces = () => {
  const [saucesData, getSaucesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/sauces");
      const json = await data.json();
      return getSaucesData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      {saucesData.map((sauce) => (
        <div key={sauce._id}>
          <img src={sauce.image} alt="sauce" />
          <h2>{sauce.name}</h2>
          <p>{sauce.description}</p>
          <p>{sauce.price}$</p>
          <button>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Sauces;
