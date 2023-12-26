// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Breakline from "./pages/breakline/breakline"; // Renomeie para "Breakline" para seguir a convenção de nomenclatura de componentes
import Required from "./pages/required/required"; // Renomeie para "Required" para seguir a convenção de nomenclatura de componentes
import Modal from "./components/modal/modal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="/breakline" element={<Breakline />} />
        <Route path="/required" element={<Required />} />
      </Routes>
    </Router>
  );
}

export default App;
