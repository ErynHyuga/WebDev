import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { WinnieThePooh } from "./components/Pages/poobear";
import { People } from "./components/Pages/People";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/OurMembers",
    element: <People/>,
  },
  {
    path: "/antiSpyWare",
    element: <WinnieThePooh/>,
  }

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
