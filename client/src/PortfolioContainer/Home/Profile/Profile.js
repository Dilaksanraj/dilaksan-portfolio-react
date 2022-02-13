import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {

  const skillData = [
    "Php Developer (Laravel)😎",
    1000,
    "Full stack Developer 💻",
    1000,
    "Angular 📱",
    1000,
    "Javascript 🔴",
    1000,
    "React/React Native 🌐",
    1000,
    "Html 🌐",
    1000,
    "css 🌐",
    1000,
  ];
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/dilaksanraj.alexsander/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/dilaksanraj-alexsandar">
              <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/dilaksan_raj/">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Dilaksan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={skillData}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              BSc Business information system (Special)
            </span>
            <span className="profile-role-tagline">
              MSc Computer Science (Software engineering) 💻
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="AJ.pdf" download="Alexsandar_Dilaksanraj.pdf">
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
