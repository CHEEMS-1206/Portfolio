import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../View/Sections/Home";

const routerName = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Aboutme",
    element: <Home />,
  },
  {
    path: "/Projects",
    element: <Home />,
  },
  {
    path: "/Technicalskills",
    element: <Home />,
  },
  {
    path: "/Technologies",
    element: <Home />,
  },
  {
    path: "/Contact",
    element: <Home />,
  },
]);

export default routerName;
