import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import LogoutButton from "./LogoutButton";

import axios from "axios";
import { API_ROUTES } from "../../utils/constants.js";

const Auth = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isSignup: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = form.isSignup ? API_ROUTES.SIGN_UP : API_ROUTES.SIGN_IN;
    try {
      const response = await axios.post(url, form);
      const data = response.data;
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", data.token);
        setMessage("Authentification réussie !");
        navigate("/dashboard"); // redirection vers le tableau de bord
      } else {
        setMessage(data.message || "Erreur lors de l'authentification.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(
          error.response.data.message ||
            "Une erreur s'est produite lors de l'authentification."
        );
      } else {
        setMessage("Une erreur s'est produite lors de l'authentification.");
      }
    }
  };

  const toggleAuthMode = () => {
    setForm((prev) => ({ ...prev, isSignup: !prev.isSignup }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Si un token existe, redirigez l'utilisateur vers le tableau de bord
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="logform-container">
      <div className="logform">
        <h2>{form.isSignup ? "Inscription" : "Connexion"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="adresse e-mail"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Mot de passe:</label>
            <input
              type="password"
              name="password"
              placeholder="mot de passe"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">
            {!form.isSignup ? "Connexion" : "Inscription"}
          </button>
        </form>
        <button onClick={toggleAuthMode}>
          {!form.isSignup
            ? "Pas encore inscrit? Inscrivez-vous"
            : "Déjà inscrit? Connectez-vous"}
        </button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Auth;
