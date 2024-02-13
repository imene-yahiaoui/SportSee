import React from "react";
import "./style.css";
// import useUserData from "./services/fetchdata";

const Error = () => {
  return (
    <div>
      <p className="errBackend">
        Une erreur s'est produite lors de la récupération des données.
      </p>
      <a href="/" className="link_404">
        Aller à la page d'accueil
      </a>
    </div>
  );
};

export default Error;