import { useEffect, useState } from "react";

const Pasta = () => {
  const [pastaData, getPastaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/pasta");
      const json = await data.json();
      return getPastaData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      {pastaData.map((pasta) => (
        <div key={pasta._id}>
          <img src={pasta.image} alt="pasta" />
          <h2>{pasta.name}</h2>
          <p>{pasta.description}</p>
          <p>{pasta.price}$</p>
          <button>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Pasta;
