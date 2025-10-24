import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Videos() {
  const videos = [
    {
      category: 'talleres',
      videoId: '3M0t5CDM49M',
    },
    {
      category: 'casacristal',
      videoId: 'pdABZf9rW18',
    }
  ];

  return (
    <div className="videos-page">
      <header>
        <div className="container">
          {/* ✅ Ruta relativa */}
          <img src="imagenes/logo.jpg.png" alt="Logo de Casa Cristal" />

          <h1>Casa Cristal</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/acerca">Acerca de</Link></li>
              <li><Link to="/galeria">Galería</Link></li>
              <li><Link to="/actividades">Actividades</Link></li>
              <li><Link to="/videos" className="active">Videos</Link></li>
              <li><Link to="/recomendaciones">Recomendaciones</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card" data-category={video.category}>
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
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

export default Videos;
