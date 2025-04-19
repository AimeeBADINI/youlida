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
        <Link to="/a-propos">À propos</Link>
        <Link to="/actions">Nos actions</Link>
        <Link to="/evenements">Événements</Link>
        <Link to="/adhesion">Adhésion</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/temoignages">Témoignages</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
