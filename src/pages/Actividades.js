import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Actividades() {
  return (
    <div className="actividades-page">
      <header>
        <div className="container">
          <img src="imagenes/logo.jpg.png" alt="Logo de Casa Cristal" />

          <h1>Casa Cristal</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/acerca">Acerca de</Link></li>
              <li><Link to="/galeria">Galería</Link></li>
              <li><Link to="/actividades" className="active">Actividades</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/recomendaciones">Recomendaciones</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="activities-section">
          <div className="container">
            <h2>Nuestras Actividades</h2>
            <p className="section-intro">
              En Casa Cristal ofrecemos una variedad de actividades diseñadas para fomentar el bienestar, la conexión con la naturaleza y el crecimiento personal.
            </p>
            
            <div className="activity-tabs">
              <button className="tab-btn active" data-tab="regular">Regulares</button>
            </div>
            
            <div className="tab-content active" id="regular">
              <div className="activity-card">
                <div className="activity-image">
                  <img src="imagenes/camping.jpg" alt="camping" />
                </div>
                <div className="activity-info">
                  <h3>Camping</h3>
                  <p className="schedule"><i className="far fa-calendar-alt"></i> Lunes a domingo</p>
                  <p className="description">Cabañas disponibles para acampar.</p>
                  <div className="activity-meta">
                    <span><i className="fas fa-map-marker-alt"></i> Jardín Principal</span>
                    <span><i className="fas fa-coins"></i> $35.00 por cabaña</span>
                  </div>
                  <button className="btn btn-small">Reservar</button>
                </div>
              </div>
              
              <div className="activity-card">
                <div className="activity-image">
                  <img src="imagenes/volcan.jpg" alt="volcan" />
                </div>
                <div className="activity-info">
                  <h3>Visita al volcán</h3>
                  <p className="schedule"><i className="far fa-calendar-alt"></i> Lunes a Domingo</p>
                  <p className="description">Visitas al volcán guiadas.</p>
                  <div className="activity-meta">
                    <span><i className="fas fa-coins"></i> $2.00 por persona</span>
                  </div>
                  <button className="btn btn-small">Reservar</button>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              {/* Tu tabla sigue igual */}
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

export default Actividades;
