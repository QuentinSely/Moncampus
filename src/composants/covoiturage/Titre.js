import React from 'react';

const Titre = () => {
    return (
        <div>
            <div className="covoiturage">
                <h1>Covoiturage de l'EPSI</h1>
                <img src="/img/covoiturage/voitures.png" alt="voitures" />
            </div> 
            <h2>Annonces</h2>
            <img src="/img/covoiturage/voiture.png" alt="voiture" className='voiture1'/>
            <img src="/img/covoiturage/voiture2.png" alt="voiture" className='voiture2'/>
            <img src="/img/covoiturage/voiture3.png" alt="voiture" className='voiture3'/>
            <img src="/img/covoiturage/voiture.png" alt="voiture" className='voiture4'/>
            <img src="/img/covoiturage/voiture2.png" alt="voiture" className='voiture5'/>
            <img src="/img/covoiturage/voiture3.png" alt="voiture" className='voiture6'/>
        </div>
    );
};

export default Titre;