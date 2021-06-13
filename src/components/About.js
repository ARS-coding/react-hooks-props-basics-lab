import React from "react";
import Links from "./Links.js";

// Object.keys(props).includes("bio") === true

// props.bio != false
// Object.keys(props).includes("bio") === true
// props.bio !== ""

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {!!props.bio == true ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
