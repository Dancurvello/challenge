// breakline.jsx

import React from "react";
import "./breakline.css";
import { Link } from "react-router-dom";

function Breakline() {
  return (
    <div className="breakline-container">
      <h1> Desafio: Quebra de linha</h1>
      <form>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input type="password" />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <Link to="/" className="back-home-button">
        Voltar para Home
      </Link>
    </div>
  );
}

export default Breakline;
