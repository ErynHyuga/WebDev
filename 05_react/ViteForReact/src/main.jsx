import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import PageAbout from "./components/excercises/PageAbout";
import React from "react";
import HomePage from "./components/excercises/HomePage";
import ReactDOM from "react-dom/client";

import Excercise03 from "./components/excercises/03Excercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <PageAbout/>,
  },
  {
    path: "/people",
    element: <Excercise03/>,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
