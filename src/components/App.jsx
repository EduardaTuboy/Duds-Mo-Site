import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// Importa as páginas
import Home from '../pages/Home';
import EyeGloome from '../pages/EyeGloome';
import Loja from '../pages/Loja';
import Jogos from '../pages/Jogos';

const App = () => {
  // Pega a localização atual da página

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eyegloome" element={<EyeGloome />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/jogos" element={<Jogos />} />
        </Routes>
      </div>
    
  );
};

export default App;
