import React from "react";
import "../App.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <p className="about">
                  <h3> Lisa Le </h3>
                  <hr></hr>
                  Full Stack Web Developer based in Denver, Colorado. Having
                  experience in Javascript, Nodejs, Expressjs, and Reactjs. Time
                  to make ideas come to life!
                </p>
              </div>
            </div>
            <div className="card-body">
                <h4> Education </h4>
                <hr></hr>
                
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
