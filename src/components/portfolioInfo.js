import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function portfolioInfo() {
  return (
    <div className="portfolio-info" id="portfolio-info">
      <h1>Portfolio Links & Info</h1>
      <br></br>
      <div className="info-container">
        <div className="info-list">
          <ul className="text">
            <li className="title">Timed Quiz</li>
            <li className="info">
              <a className="info" href="https://github.com/LisaTLe/Timed-quiz">
                Github Link
              </a>
            </li>
            <li className="info">
              <a className="info" href="https://lisatle.github.io/Timed-quiz/">
                Deployed Link
              </a>
            </li>
          </ul>
        </div>
        <div className="info-list">
          <ul className="text">
            <li className="title">Abs-olutely Workout Guide</li>
            <li className="info">
              <a
                className="info"
                href="https://github.com/DosTorrez/ABS-olutelyWorkoutGuide"
              >
                Github Link
              </a>
            </li>
            <li className="info">
              <a
                className="info"
                href="https://dostorrez.github.io/ABS-olutelyWorkoutGuide/"
              >
                Deployed Link
              </a>
            </li>
          </ul>
        </div>
        <div className="info-list">
          <ul className="text">
            <li className="title">Note Taker</li>
            <li className="info">
              <a className="info" href="https://github.com/LisaTLe/Note-Taker">
                Github Link
              </a>
            </li>
            <li className="info">
              <a
                className="info"
                href="https://mysterious-badlands-73655.herokuapp.com/"
              >
                Deployed Link
              </a>
            </li>
          </ul>
        </div>
        <div className="info-list">
          <ul className="text">
            <li className="title">Shutter Up</li>
            <li className="info">
              <a className="info" href="https://github.com/Ginger421/ShutterUp">
                Github Link
              </a>
            </li>
            <li className="info">
              <a
                className="info"
                href="https://desolate-cove-27983.herokuapp.com/"
              >
                Deployed Link
              </a>
            </li>
          </ul>
        </div>
        <div className="info-list">
          <ul className="text">
            <li className="title">Daily Scheduler</li>
            <li className="info">
              <a
                className="info"
                href="https://github.com/LisaTLe/Daily-Planner"
              >
                Github Link
              </a>
            </li>
            <li className="info">
              <a
                className="info"
                href="https://lisatle.github.io/Daily-Planner/"
              >
                Deployed Link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#resume">
        <KeyboardDoubleArrowDownIcon
          fontSize="large"
          color="disabled"
          className="down-arrow"
        />
      </a>
    </div>
  );
}
