import { FaHome } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import { GiNoodles } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { GiSodaCan } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

export const foods = [
  {
    url: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    url: "/meals",
    text: "Meals",
    icon: <MdFastfood />,
  },
  {
    url: "/pizza",
    text: "Pizza",
    icon: <FaPizzaSlice />,
  },

  {
    url: "/burgers",
    text: "Burgers",
    icon: <FaBurger />,
  },
  {
    url: "/pasta",
    text: "Pasta",
    icon: <GiNoodles />,
  },
  {
    url: "/desserts",
    text: "Desserts",
    icon: <GiCakeSlice />,
  },
  {
    url: "/beverages",
    text: "Beverages",
    icon: <GiSodaCan />,
  },
  {
    url: "/sides",
    text: "Sides",
    icon: <GiFrenchFries />,
  },
];
