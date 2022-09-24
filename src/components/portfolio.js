import React from "react";

function portfolio() {
  return (
    <div className="portfolio-body" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="port-list">
        <li className="port-items">Featured</li>
        <li className="port-items">Featured</li>
        <li className="port-items">Featured</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/quiz.PNG" alt="" className="quiz" />
          <h5>Timed Quiz</h5>
        </div>
        <div className="item">
          <img src="assets/workout.PNG" alt="" className="workout" />
          <h5>Abs-olutely Workout Guide</h5>
        </div>
        <div className="item">
          <img src="assets/quiz.PNG" alt="" className="quiz" />
          <h5>Timed Quiz</h5>
        </div>
        <div className="item">
          <img src="assets/quiz.PNG" alt="" className="quiz" />
          <h5>Timed Quiz</h5>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
