import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
