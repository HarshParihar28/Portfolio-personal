import React from "react";
import "./css/homepage.css";
import { Card1, Card2, Card3, Card4 } from "../comp/card";
import Skills from "./skills";
import Details from "./details";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div>
          <Details />
        </div>
        <div>
          <div className="cards-container">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Contact />
          </div>
          <div>
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
