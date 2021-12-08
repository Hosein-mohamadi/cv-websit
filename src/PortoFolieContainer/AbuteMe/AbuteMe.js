import React from "react";
import { Link } from "react-scroll";

import "./AbuteMe.css";

export default function AbuteMe() {
  return (
    <div
      className="about-me-container screen-container fade-in"
      id="AboutMe"
      style={{ opacity: 5, transform: "translateY(1px)" }}
    >
      <div className="about-me-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>About Me</span>
          </div>
          <div className="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Hossein Mohammadi, born in 2002, resident of Zanjan, is one of the
              programming enthusiasts that I started learning in the winter of
              1399, and I work in Frontend Developer (React.js) and I enjoy it
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>junior web and frontend developer</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Interested in learning</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>React and JavaScript</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Redux for State Mnanagement</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Managing database</span>
              </div>
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">
                {" "}
                <Link
                  to="ContactMe"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {""}
                  Hire Me{" "}
                </Link>{" "}
              </button>
              <a href="CV-hosein.pdf" download="hosein CV-hosein.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
