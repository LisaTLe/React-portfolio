import React from "react";
// import { Route, Redirect, HashRouter as Router } from "react-router-dom";
import Navbar from "../components/navbar";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Resume from "../components/resume";

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;

function Header() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <div className="content">
        <Route exact path="/" render={() => <Link to="/about" />} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </div>
    </BrowserRouter>
  );
}

export default Header;
