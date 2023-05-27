import React from "react";

// importing styles
import '../../Styles/Menubar.css'

// importing components
import Link from "../CommonComponents/LinkComponent";

// <!-- navbar  -->
function Menubar() {
  return (
    <div className="navBar">
      <div className="max-width">
        {/* // logo component  */}
        <div className="logo">
          <a href=".">
            Port<span>folio.</span>
          </a>
        </div>
        {/* // menus  */}
        <ul className="menus">
          <li>
            <Link className="menu-btn" value="Home" />
          </li>
          <li>
            <Link className="menu-btn" value="About Me" />
          </li>
          <li>
            <Link className="menu-btn" value="Projects" />
          </li>
          <li>
            <Link className="menu-btn" value="Technical Skills" />
          </li>
          <li>
            <Link className="menu-btn" value="Technologies" />
          </li>
          <li>
            <Link className="menu-btn" value="Contact" />
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
