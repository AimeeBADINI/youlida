import React from "react";


export default function Adhesion() {
  return (
    <div className="adhesion-container">
      <h1 className="adhesion-title">Devenir membre</h1>

      {/* Formulaire d'adhésion */}
      <section className="adhesion-section form">
        <h2 className="adhesion-subtitle">Formulaire d’adhésion</h2>
        <form className="adhesion-form">
          <input
            type="text"
            placeholder="Nom complet"
            className="adhesion-input"
          />
          <input
            type="email"
            placeholder="Adresse email"
            className="adhesion-input"
          />
          <button type="submit" className="adhesion-button">
            Rejoindre l'association
          </button>
        </form>
      </section>

      {/* Avantages */}
      <section className="adhesion-section avantages">
        <h2 className="adhesion-subtitle">Avantages des membres</h2>
        <ul className="adhesion-list">
          <li>Participation à des événements exclusifs</li>
          <li>Accès à notre newsletter mensuelle</li>
          <li>Engagement concret dans les projets locaux</li>
        </ul>
      </section>

      {/* Cotisation */}
      <section className="adhesion-section cotisation">
        <h2 className="adhesion-subtitle">Cotisation</h2>
        <p className="adhesion-text">
          L’adhésion est à <strong>10€ par an</strong>. Possibilité de régler en ligne ou lors d’un événement.
        </p>
      </section>
    </div>
  );
}
