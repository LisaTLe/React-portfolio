// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
