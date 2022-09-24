import React from "react";
import "../App.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function home() {
  return (
    <div className="home-info" id="home">
      <div className="home-left">
        <div className="imgContainer">
          <img src="assets/me.PNG" alt="headshot" className="profile-img" />
        </div>
      </div>
      <div className="home-right">
        <div className="wrapper-home">
          <h2>Hello, meet</h2>
          <h1>Lisa Le</h1>
          <h4>
            Full Stack Web Developer based in Denver, Colorado. Having
            experience in HTML, CCS, Javascript, Nodejs, Expressjs, and Reactjs.
          </h4>
        </div>
        <KeyboardDoubleArrowDownIcon
          fontSize="large"
          color="disabled"
          className="down-arrow"
        />
      </div>
    </div>
  );
}

export default home;
