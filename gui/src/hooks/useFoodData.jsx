import { useEffect, useState } from "react";

const useFoodData = (foodType) => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortingFilter, setSortingFilter] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `http://localhost:3000/${foodType}`;
        if (sortingFilter !== "") {
          url += `?sort=${sortingFilter}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [foodType, sortingFilter]);

  return [foodData, loading, setSortingFilter];
};

export default useFoodData;
