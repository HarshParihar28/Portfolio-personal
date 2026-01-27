import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import "./css/skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MYSQL",
    "Git/Github",
    "UI/UX Design",
  ];
  const logo = [
    { icon: <FaHtml5 /> },
    { icon: <FaCss3Alt /> },
    { icon: <FaJs /> },
    { icon: <FaReact /> },
    { icon: <FaNodeJs /> },
    { icon: <FaDatabase /> },
    { icon: <FaGitAlt /> },
    { icon: <FaGithub /> },
    { icon: <FaFigma /> },
  ];

  return (
    <>
      <hr className="line" />
      <p>Skills</p>
      <div className="skills-section">
        <div className="skills-container"></div>
        <div className="vertical-line"></div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-right">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skill-logo">
        {logo.map((logo, index) => (
          <div key={index}>
            <div>{logo.icon}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
