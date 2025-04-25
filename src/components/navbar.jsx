import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css"; // Assurez-vous d'importer le fichier CSS

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1e293b" }}>

      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center " to="/">
          <img src={logo} alt="Logo Youlida" className="me-2" style={{ height: "70px" }} />
          <span className="text-white">YOULIDA</span>
        </Link>
        
        {/* Bouton menu hamburger */}
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        {/* Liens de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/AboutPage">À propos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Actions">Nos actions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Evenements">Événements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Adhesion">Adhésion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/BlogPage">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Temoignages">Témoignages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ContactPage">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
