// import logo from './logo.svg';

import React from "react";
// import Header from "./components/header";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <div className="home">
          <Home />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="portfolio">
          <Portfolio />
        </div>
        <div className="resume">
          <Resume />
        </div>
        <div className="contact">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
