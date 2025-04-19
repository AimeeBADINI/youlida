import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import  "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Footer />
    </Router>
  );
};

export default App;
