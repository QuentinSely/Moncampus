import React from "react";
import Nav from "../composants/nav/Nav";
import Cards from "../composants/covoiturage/Cards";
import Titre from "../composants/covoiturage/Titre";

const Covoiturage = () => {
  return (
    <>
      <Nav />
      <Titre />
      <Cards/>
    </>
  );
};

export default Covoiturage;
