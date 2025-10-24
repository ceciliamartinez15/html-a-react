import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Acerca() {
  return (
    <div className="acerca-page">
      <header>
        <div className="container">
          {/* ✅ Ruta relativa */}
          <img src="imagenes/logo.jpg.png" alt="Logo de Casa Cristal" />

          <h1>Casa Cristal</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/acerca" className="active">Acerca de</Link></li>
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
        <section className="about-section">
          <div className="container">
            <h2>Nuestra Historia</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  El Parque de Montaña Casa Cristal está localizado en el departamento de Santa Ana 
                  y se encuentra a hora y media de Santa Salvador. Específicamente se encuentra en la finca San Blas del Cerro Verde.
                </p>
                <p>
                  Casa Cristal está a 1,800 metros sobre el nivel del mar, lo cual hace que el clima sea muy agradable 
                  durante todo el día y todos los días del año.
                </p>
              </div>

              {/* ✅ Ruta relativa */}
              <div className="about-image">
                <img src="imagenes/exterior.jpg" alt="Exterior de Casa Cristal" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="container">
            <div className="mission">
              <h3><i className="fas fa-bullseye"></i> Misión</h3>
              <p>
                Ofrecer un espacio seguro y armónico donde las personas puedan reconectarse consigo mismas, 
                con los demás y con la naturaleza, a través de experiencias transformadoras.
              </p>
            </div>
            <div className="vision">
              <h3><i className="fas fa-eye"></i> Visión</h3>
              <p>
                Ser un referente en el desarrollo de comunidades sustentables y conscientes, 
                inspirando un estilo de vida en armonía con el medio ambiente y el crecimiento personal.
              </p>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container">
            <h2>Nuestros Valores</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Amor</h3>
                <p>Actuamos con compasión y respeto hacia todos los seres.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-recycle"></i>
                </div>
                <h3>Sustentabilidad</h3>
                <p>Promovemos prácticas ecológicas y de bajo impacto ambiental.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Comunidad</h3>
                <p>Creemos en el poder de la colaboración y el apoyo mutuo.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3>Crecimiento</h3>
                <p>Fomentamos la evolución personal y espiritual continua.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Casa Cristal. Todos los derechos reservados.</p>
          <div className="social-links">
            <Link to="#"><i className="fab fa-facebook"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
            <Link to="#"><i className="fab fa-youtube"></i></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Acerca;
