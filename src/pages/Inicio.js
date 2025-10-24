import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Asegúrate de importar tus estilos

function Inicio() {
  return (
    <div className="inicio-page">
      <header>
        <div className="container header-flex">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/imagenes/logo.jpg.png" alt="Logo de Casa Cristal" />
            <img src={`${process.env.PUBLIC_URL}/imagenes/logo.jpg.png`} alt="Logo de Casa Cristal" />

          </Link>

          <h1>Casa Cristal</h1>

          <nav>
            <ul>
              <li><Link to="/" className="active">Inicio</Link></li>
              <li><Link to="/acerca">Acerca de</Link></li>
              <li><Link to="/galeria">Galería</Link></li>
              <li><Link to="/actividades">Actividades</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/recomendaciones">Recomendaciones</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Bienvenidos a Casa Cristal</h2>
            <p>Un espacio de recreación, diversión y conexión con la naturaleza.</p>
            <Link to="/acerca" className="btn">Conócenos</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Inicio;