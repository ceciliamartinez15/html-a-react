import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Recomendaciones() {
  const [activeTab, setActiveTab] = useState('volcan');

  return (
    <div className="recomendaciones-page">
      <header>
        <div className="container">
          {/* ✅ Ruta relativa, sin process.env.PUBLIC_URL */}
          <img src="imagenes/logo.jpg.png" alt="Logo de Casa Cristal" />

          <h1>Casa Cristal</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/acerca">Acerca de</Link></li>
              <li><Link to="/galeria">Galería</Link></li>
              <li><Link to="/actividades">Actividades</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/recomendaciones" className="active">Recomendaciones</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="recommendations-section">
          <div className="container">
            <h2>Recomendaciones para tu Aventura</h2>
            <p className="section-intro">
              En Casa Cristal queremos que tu experiencia en la naturaleza sea segura y memorable. 
              Aquí tienes nuestros mejores consejos.
            </p>

            <div className={`tab-content ${activeTab === 'volcan' ? 'active' : ''}`} id="volcan">
              <div className="recommendation-card">
                <div className="recommendation-image">
                  {/* ✅ Ruta relativa */}
                  <img src="imagenes/volcansanta.jpg" alt="Recomendaciones para el volcán" />
                </div>
                <div className="recommendation-info">
                  <h3>Preparación para la Ascensión</h3>
                  <div className="recommendation-list">
                    <div className="recommendation-item">
                      <div className="recommendation-icon">
                        <i className="fas fa-hiking"></i>
                      </div>
                      <div className="recommendation-text">
                        <h4>Equipo Esencial</h4>
                        <ul>
                          <li>Zapatos de montaña</li>
                          <li>Ropa térmica</li>
                          <li>Mochila</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="recommendation-item">
                      <div className="recommendation-icon">
                        <i className="fas fa-utensils"></i>
                      </div>
                      <div className="recommendation-text">
                        <h4>Alimentación</h4>
                        <ul>
                          <li>2 litros de agua</li>
                          <li>Frutos secos y barras energéticas</li>
                          <li>Chocolate o dulces para energía rápida</li>
                          <li>Comida ligera pero nutritiva</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="recommendation-item">
                      <div className="recommendation-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="recommendation-text">
                        <h4>Seguridad</h4>
                        <ul>
                          <li>Verifica el pronóstico del tiempo</li>
                          <li>Informa tu ruta y hora estimada de regreso</li>
                          <li>No te separes del grupo</li>
                          <li>Lleva un botiquín básico</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="weather-alert">
                    <i className="fas fa-exclamation-triangle"></i>
                    <p>
                      El clima en el volcán puede cambiar bruscamente. Lleva protección para lluvia 
                      y abrigo extra incluso en días soleados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="emergency-info">
              <h3>Información de Emergencia</h3>
              <div className="emergency-content">
                <div className="emergency-item">
                  <i className="fas fa-phone-alt"></i>
                  <p>Emergencias: 911</p>
                </div>
                <div className="emergency-item">
                  <i className="fas fa-map-marked-alt"></i>
                  <p>Punto de encuentro: Recepción Casa Cristal</p>
                </div>
                <div className="emergency-item">
                  <i className="fas fa-first-aid"></i>
                  <p>Botiquín disponible en recepción</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Casa Cristal. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Recomendaciones;
