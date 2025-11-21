import { createHashRouter, Navigate, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const routes = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "/", element: <Navigate to="home" /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={routes} />;
