import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./component/Navbar";
import { createBrowserRouter } from "react-router-dom";

const Layoutrouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "/Home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
]);

export default Layoutrouter;
