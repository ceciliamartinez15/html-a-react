import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Actividades from './pages/Actividades';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import Recomendaciones from './pages/Recomendaciones';
import Videos from './pages/Videos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/recomendaciones" element={<Recomendaciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
