import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function portfolio() {
  return (
    <div className="portfolio-body" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="port-list">
        <li className="port-items">Featured</li>
      </ul>
      <div className="container">
        <div className="item">
          <a href="#portfolio-info">
            <img src="assets/quiz.PNG" alt="" className="quiz" />
          </a>
          <h5>Timed Quiz</h5>
        </div>
        <div className="item">
          <a href="#portfolio-info">
            <img src="assets/workout.PNG" alt="" className="workout" />
          </a>
          <h5>Abs-olutely Workout Guide</h5>
        </div>
        <div className="item">
          <a href="#portfolio-info">
            <img src="assets/noteTaker.PNG" alt="" className="note" />
          </a>
          <h5>Note Taker</h5>
        </div>
        <div className="item">
          <a href="#portfolio-info">
            <img src="assets/inspirer.png" alt="" className="inspirer" />
          </a>
          <h5>Inspirer App</h5>
        </div>
        <div className="item">
          <a href="#portfolio-info">
            <img src="assets/scheduler.PNG" alt="" className="schedule" />
          </a>
          <h5>Daily Scheduler</h5>
        </div>
      </div>
      <a href="#portfolio-info">
        <KeyboardDoubleArrowDownIcon
          fontSize="large"
          color="disabled"
          className="down-arrow"
        />
      </a>
    </div>
  );
}

export default portfolio;
