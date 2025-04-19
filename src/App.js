import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import Temoignages from "./pages/Temoignages";
import  "./App.css";
import Adhesion from "./pages/Adhesion";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import Actions from "./pages/Actions";
import Evenements from "./pages/Evenements";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/Temoignages" element={<Temoignages />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/adhesion" element={<Adhesion />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
