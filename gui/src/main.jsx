import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PizzaRoute from "./routes/PizzaRoute.jsx";
import BurgersRoute from "./routes/BurgersRoute.jsx";
import PastaRoute from "./routes/PastaRoute.jsx";
import DessertsRoute from "./routes/DessertsRoute.jsx";
import BeveragesRoute from "./routes/BeveragesRoute.jsx";
import SidesRoute from "./routes/SidesRoute.jsx";
import RootLayout from "./routes/root.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
import MealsRoute from "./routes/MealsRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "meals",
        element: <MealsRoute />,
      },
      {
        path: "pizza",
        element: <PizzaRoute />,
      },
      {
        path: "burgers",
        element: <BurgersRoute />,
      },
      {
        path: "pasta",
        element: <PastaRoute />,
      },
      {
        path: "desserts",
        element: <DessertsRoute />,
      },
      {
        path: "beverages",
        element: <BeveragesRoute />,
      },
      {
        path: "sides",
        element: <SidesRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
