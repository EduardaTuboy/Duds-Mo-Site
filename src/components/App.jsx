import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Importa as páginas
import Home from "../pages/Home";
import EyeGloome from "../pages/EyeGloome";
import Loja from "../pages/Loja";
import Jogos from "../pages/Jogos";
import Register from "../pages/Register";
import Stock from "../pages/Stock";

const App = () => {
  // Pega a localização atual da página

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eyegloome" element={<EyeGloome />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </div>
  );
};

export default App;
