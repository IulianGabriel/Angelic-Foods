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
        <div key={sauce._id}>{sauce.name}</div>
      ))}
    </>
  );
};

export default Sauces;
