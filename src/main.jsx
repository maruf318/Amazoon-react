import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import HomeContents from "./Components/Home/HomeContents";
import Cart from "./Components/Cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomeContents></HomeContents>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/products/:id",
        element: <Cart></Cart>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
