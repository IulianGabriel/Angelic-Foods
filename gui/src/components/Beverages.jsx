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
        <div key={beverage._id}>{beverage.name}</div>
      ))}
    </>
  );
};

export default Beverages;
