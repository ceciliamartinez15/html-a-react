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

        {/* 👇 Footer con licencia Creative Commons */}
        <footer
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            marginTop: "2rem",
            padding: "1rem 0",
            backgroundColor: "#f5f5f5"
          }}
        >
          <p>
            © {new Date().getFullYear()} — Este sitio web está bajo una{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional
            </a>.
          </p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
              alt="Licencia Creative Commons BY-NC-SA 4.0"
              style={{ marginTop: "8px" }}
            />
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
