import React from "react";

// importing styles
import "../../Styles/Menubar.css";

// importing components
import Link from "../CommonComponents/LinkComponent";

// <!-- navbar  -->
function Menubar() {
  return (
    <div className="navBar">
      <div className="max-width">
        {/* // logo component  */}
        <div className="logo">
          <a href="/" >
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
            <Link className="menu-btn" value="Technologies" id="Technologies" />
          </li>
          <li>
            <Link className="menu-btn" value="Contact" id="Contact" />
          </li>
        </ul>
        {/* // close button  */}
        <div className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Menubar;