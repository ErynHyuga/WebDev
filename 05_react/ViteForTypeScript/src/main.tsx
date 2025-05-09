import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import ReactDOM from "react-dom/client";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { WinnieThePooh } from "./components/Pages/poobear";
import { People } from "./components/Pages/People";
import { Menu } from "./components/Pages/Menu";
import { GiveData } from "./components/Pages/GiveData";
import { DataTo } from "./components/Pages/DataTo";
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Menu",
    element: <Menu/>,
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
  },
  {
    path: "/dataleecher",
    element: <GiveData/>,
  },
  {
    path: "/dataleecher/leech",
    element: <DataTo/>,
  },

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <RouterProvider router={router} />
);
