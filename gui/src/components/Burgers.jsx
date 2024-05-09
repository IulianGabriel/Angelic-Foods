import { useEffect, useState } from "react";

const Burgers = () => {
  const [burgersData, getBurgersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/burgers");
      const json = await data.json();
      return getBurgersData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      {burgersData.map((burger) => (
        <div key={burger._id}>{burger.name}</div>
      ))}
    </>
  );
};

export default Burgers;
