import React from "react";
import { BookOpen, Gamepad2, Code, User } from "lucide-react";
import "./css/about.css";

function About() {
  return (
    <>
      <hr className="divider" />
      <section className="about-box">
        <h2 className="about-heading">About Me</h2>

        <div className="about-list">

          <div className="about-item">
            <BookOpen className="about-icon" />
            <div>
              <p className="about-label">Education</p>
              <p className="about-detail">
                Pursuing B.Tech in Computer Science from Jodhpur, Rajasthan.  
                Passionate about Website development, web technologies, and problem-solving.
              </p>
            </div>
          </div>

          <div className="about-item">
            <Gamepad2 className="about-icon" />
            <div>
              <p className="about-label">Hobbies</p>
              <p className="about-detail">
                Exploring new technologies, designing websites, coding projects,  
                playing Football and E-sports games.    
              </p>
            </div>
          </div>

          <div className="about-item">
            <Code className="about-icon" />
            <div>
              <p className="about-label">Skills & Interests</p>
              <p className="about-detail">
                Frontend Development (React.js, JavaScript, CSS), Backend Basics (Node.js), MYSQL,  
                UI/UX design, and Open-Source Contribution (Git/GitHub).
              </p>
            </div>
          </div>

          <div className="about-item">
            <User className="about-icon" />
            <div>
              <p className="about-label">About Me</p>
              <p className="about-detail">
                I’m a tech enthusiast who loves to turn ideas into working projects.  
                Curious, creative, and always eager to learn something new every day.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
