import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Youlida" className="logo-img" />
        <span>YOULIDA</span>
      </div>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/AboutPage">À propos</Link>
        <Link to="/Actions">Nos actions</Link>
        <Link to="/Evenements">Événements</Link>
        <Link to="/Adhesion">Adhésion</Link>
        <Link to="/BlogPage">Blog</Link>
        <Link to="/Temoignages">Témoignages</Link>
        <Link to="/ContactPage">Contact</Link>
      </nav>
    </header>
  );
}
