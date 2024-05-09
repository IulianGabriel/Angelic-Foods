import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PizzaRoute from "./routes/PizzaRoute.jsx";
import BurgersRoute from "./routes/BurgersRoute.jsx";
import PastaRoute from "./routes/PastaRoute.jsx";
import DessertsRoute from "./routes/DessertsRoute.jsx";
import BeveragesRoute from "./routes/BeveragesRoute.jsx";
import SaucesRoute from "./routes/SaucesRoute.jsx";
import RootLayout from "./routes/root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
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
        path: "sauces",
        element: <SaucesRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
