import React from 'react';

const Cards = () => {
  return (
    <div className="card">
      <div className="profile">
        <img src="/img/covoiturage/pp.jpg" alt="Profile" />
        <h2>Prénom</h2>
      </div>
      <div className="details">
        <p>Trajet : Villeurbane - EPSI</p>
        <p>Heure : 8h00</p>
        <p>Participation : 5€</p>
      </div>
      <div className="contact">
        <button>Contacter</button>
      </div>
    </div>
  );
};

export default Cards;

