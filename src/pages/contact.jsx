import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import "./css/contact.css";

function Contact() {
  return (
    <>
      <hr className="line" />
      <section className="contact-container">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-info">
          
          <div className="info-item">
            <Mail className="icon" />
            <div>
              <p className="contact-text">Email</p>
              <p className="contact-email">Pariharharsh285@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <Phone className="icon" />
            <div>
              <p className="contact-text">Phone</p>
              <p className="contact-phone">+91 94605-88408</p>
            </div>
          </div>

          <div className="linkedin-item">
            <a
              href="https://www.linkedin.com/in/harsh-pariharr"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <Linkedin className="linkedin-icon" />
              <div>
                <p className="contact-text">LinkedIn</p>
                <p className="contact-location">
                  linkedin : harsh-pariharr
                </p>
              </div>
            </a>
          </div>

          <div className="linkedin-item">
            <a
              href="https://github.com/HarshParihar28"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <Github className="linkedin-icon" />
              <div>
                <p className="contact-text">Github</p>
                <p className="contact-location">
                  Github : HarshParihar28
                </p>
              </div>
            </a>
          </div>

          <div className="info-item">
            <MapPin className="icon-location" />
            <div>
              <p className="contact-text">Location</p>
              <p className="contact-location">
                Chopasni Housing Board, Jodhpur, Rajasthan, 342001
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
