import { useEffect, useState } from "react";

const useFoodData = (foodType) => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:3000/${foodType}`);
      const json = await data.json();
      setFoodData(json);
    };
    fetchData();
  }, [foodType]);

  return foodData;
};

export default useFoodData;
