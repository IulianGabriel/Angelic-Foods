import { useEffect, useState } from "react";

const useFoodData = (foodType) => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:3000/${foodType}`);
      const json = await data.json();
      setFoodData(json);
      setLoading(false);
    };
    fetchData();
  }, [foodType]);

  return [foodData, loading];
};

export default useFoodData;
