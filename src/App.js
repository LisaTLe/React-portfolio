// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Header from "./components/header";
import Resume from "./components/resume";
// import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
