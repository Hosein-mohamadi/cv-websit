import React from "react";
import { Link } from "react-scroll";

import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container" id="Profile">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://t.me/hosein_mohamadi_1400">
                <i className="fa fa-telegram"></i>
              </a>
              <a href="https://www.linkedin.com/in/hosein-mohammadi-076237214">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/18__hosein">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/hosein-mohammadi-076237214">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello,I'M <span className="highlighted-text">Hosein</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Hosein Mohamadi 🔴",
                    2000,
                    "Junior frontend developer💻",
                    2000,
                    "React js  🌐",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Using React Library in the field of frontend developer is
                excellent
              </span>
            </span>
          </div>
          <div className="profile-optins">
            <Link
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="primary-btn btn primary-text"
            >
              {""}
              Hire Me{" "}
            </Link>
            <a href="CV.hosein.pdf" download="hosein CV.hosein.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
