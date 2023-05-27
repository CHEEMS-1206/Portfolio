import React from "react";

function Link(props) {
  return (
    <a href={props.href} className={props.className} id={props.link}>
      {props.value}
    </a>
  );
}

export default Link;
