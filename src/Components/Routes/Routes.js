import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../View/Sections/Home/Home";
import AboutMe from "../View/Sections/AboutMe/AboutMe";
import Projects from '../View/Sections/Projects/Projects'
import TechnicalSkills from "../View/Sections/TechnicalSkills/TechnicalSkills";
import Technologies from "../View/Sections/Technologies/Technologies";
import Contact from "../View/Sections/Contact/Contact";

const routerName = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About-me",
    element: <AboutMe/>,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Technical-skills",
    element: <TechnicalSkills />,
  },
  {
    path: "/Technologies",
    element: <Technologies />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

export default routerName;
