// Modal.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";

function Modal() {
  return (
    <div className="modal">
      <div>
        <Link to="/breakline" className="modal-button">
          Breakline
        </Link>
        <Link to="/required" className="modal-button">
          Required
        </Link>
      </div>
    </div>
  );
}

export default Modal;
