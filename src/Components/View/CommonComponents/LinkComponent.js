import React from "react";
import { useNavigate } from "react-router-dom";

function Link(props) {
  const pathToMove = useNavigate();

  // menu handler function
  function MenusHandler(e) {
    if (e.target.id === "Home") {
      pathToMove("/");
      console.log("Home");
    } else if (e.target.id === "AboutMe") {
      pathToMove("/About-me");
      console.log("AboutMe");
    } else if (e.target.id === "Projects") {
      pathToMove("/Projects");
      console.log("Projects");
    } else if (e.target.id === "TechnicalSkills") {
      pathToMove("/Technical-skills");
      console.log("Technical skills");
    } else if (e.target.id === "Technologies") {
      pathToMove("/Technologies");
      console.log("Technologies");
    } else if (e.target.id === "Contact") {
      pathToMove("/Contact");
      console.log("Contact");
    }
  }
  return (
    <a
      href={props.href}
      className={props.className}
      id={props.id}
      onClick={MenusHandler}
    >
      {props.value}
    </a>
  );
}

export default Link;
