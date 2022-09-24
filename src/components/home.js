import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function home() {
  return (
    <div className="home" id="home">
      <div>Portfolio</div>
      <Navbar />
      Hello, meet Lisa Le!
      <Footer />
    </div>
  );
}

export default home;
