import React from 'react'
import "./css/projects.css";
import { Project1, Project2, Project3} from "../comp/project-card";

function Projects() {
  return (
    <>
    <hr className="line" />
    <p>Projects</p>
    <p className='pro-detail'>Following projetcs showcase my skills and experience through real-world examples of my work.</p>
    <div className="project-container">
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
    </>
  )
}

export default Projects