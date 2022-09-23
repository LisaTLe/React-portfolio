// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Header from "./components/header";
import Resume from "./components/resume";
// import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./components/project";
import About from "./components/about";

function App() {
  return (
    <div>
      <About />
      <Project />
      <Resume />
    </div>
  );
}

export default App;
