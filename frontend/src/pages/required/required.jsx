// required.jsx

import React from "react";
import "./required.css";
import { Link } from "react-router-dom";

function Required() {
  return (
    <div className="breakline-container">
        <h1> Desafio: Preenchimento Obrigatório</h1>
      <form>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input type="password" required />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <Link to="/" className="back-home-button">
        Voltar para Home
      </Link>
    </div>
  );
}

export default Required;
