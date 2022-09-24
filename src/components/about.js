import React from "react";
import "../App.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function about() {
  return (
    <div className="about-info" id="about">
      <hr></hr>
      <h3>Education</h3>
      <hr></hr>
      <div className="edu-list">
        <ul>
          <li className="name">University of Denver</li>
          <li className="desc">Full Stack Web Development</li>
          <li className="name">University of Colorado Denver</li>
          <li className="desc">Bachelors of Science in Biology</li>
          <li className="name">Community College of Denver</li>
          <li className="desc">Associate of Science in Biology</li>
        </ul>
      </div>
      <hr></hr>
      <h3>Languages</h3>
      <hr></hr>
      <div className="lang-list">
        <ul>
          <li className="name">English</li>
          <li className="desc">Native</li>

          <li className="name">Vietnamese</li>
          <li className="desc">Native/Bilingual Proficiency</li>

          <li className="name">French</li>
          <li className="desc">Elementary Proficiency</li>
        </ul>
        <a href="#portfolio">
          <KeyboardDoubleArrowDownIcon
            fontSize="large"
            color="disabled"
            className="down-arrow"
          />
        </a>
      </div>
    </div>
  );
}
