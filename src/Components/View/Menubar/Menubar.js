import React from "react";

// importing styles
import "../../Styles/Menubar.css";

// importing fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// importing components
import Link from "../CommonComponents/LinkComponent";

// <!-- navbar  -->
function Menubar() {

  const menuBarHandler = (e) => {
    const ul = document.querySelector(".navBar .menus");
    if (e.target.id === "bars") {
      ul.classList.toggle("active");
      e.target.id = "close";
    } else if (e.target.id === "close") {
      ul.classList.toggle("active");
      e.target.id = "bars";
    }
  };

  return (
    <div className="navBar">
      <div className="max-width">
        {/* // logo component  */}
        <div className="logo">
          <a href="/">
            Port<span>folio.</span>
          </a>
        </div>
        {/* // menus  */}
        <ul className="menus">
          <li>
            <Link className="menu-btn" value="Home" id="Home" />
          </li>
          <li>
            <Link className="menu-btn" value="About Me" id="AboutMe" />
          </li>
          <li>
            <Link className="menu-btn" value="Projects" id="Projects" />
          </li>
          <li>
            <Link
              className="menu-btn"
              value="Technical Skills"
              id="TechnicalSkills"
            />
          </li>
          <li>
            <Link className="menu-btn" value="Contact" id="Contact" />
          </li>
        </ul>
        {/* // close button  */}
        <div className="menu-btn">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            id="bars"
            onClick={menuBarHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Menubar;
