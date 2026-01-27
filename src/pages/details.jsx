import React from "react";
import "./css/homepage.css";

function Details() {
  return (
    <>
      <div>
        <h1 className="name">Hi, I'm Harsh Parihar</h1>
        <p className="description">
          A FULL STACK WEB DEVELOPER BUILD STUNNING WEBSITES
        </p>
      </div>
      <div className="but">
        <button className="skill-but">Skills</button>
        <button className="project-but">Projects</button>
        <button className="contact-but">Contact</button>
        <button className="about-but">About</button>
      </div>
      <div>
        <h className="intro"> INTRODDUCTION</h>
        <h1 className="overview">Overview</h1>
        <h2 className="info">
          I’m a passionate B.Tech CSE student and aspiring web developer who
          loves turning creative ideas into sleek, functional, and user-friendly
          websites. With strong skills in React.js and a growing curiosity for
          modern frameworks and AI tools, I enjoy building impactful projects
          that combine clean code, great design, and smooth user experiences.
        </h2>
        </div>
    </>
  );
}

export default Details
