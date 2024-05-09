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
        <div key={dessert._id}>{dessert.name}</div>
      ))}
    </>
  );
};

export default Desserts;
