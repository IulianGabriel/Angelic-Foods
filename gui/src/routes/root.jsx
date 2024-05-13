import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const RootLayout = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar cartItems={cartItems} />
      <main>
        <Outlet context={[cartItems, setCartItems]} />
      </main>
    </>
  );
};

export default RootLayout;
