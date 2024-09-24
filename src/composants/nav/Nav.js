import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src="/logo.png" alt="logo epsi" />
          </NavLink>
        </div>

        <li>
          <NavLink to="/" activeclassname="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/covoiturage" activeclassname="active">
            Covoiturage
          </NavLink>
        </li>
        <li>
          <NavLink to="/signaler" activeclassname="active">
            Signaler
          </NavLink>
        </li>
      </div>
    </nav>
  );
};

export default Nav;
