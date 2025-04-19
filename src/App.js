import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"; // Assurez-vous que ce fichier existe
import Adhesion from "./pages/Adhesion";

import About from "./pages/AboutPage";
import "./App.css";
import Actions from "./pages/Actions";
import Evenements from "./pages/Evenements";

const App = () => {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/adhesion" element={<Adhesion />} />
        </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
