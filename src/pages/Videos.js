import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Videos() {
  const videos = [
    {
      id: '3M0t5CDM49M',
      title: 'Taller de Conexión con la Naturaleza',
      category: 'talleres',
    },
    {
      id: 'pdABZf9rW18',
      title: 'Recorrido por Casa Cristal',
      category: 'casacristal',
    }
  ];

  return (
    <div className="videos-page">
      <header className="site-header">
        <div className="container">
          <img src="imagenes/logo.jpg.png" alt="Logo de Casa Cristal" className="logo" />
          <h1>Casa Cristal</h1>
          <nav>
            <ul className="nav-list">
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
        <section className="videos-section">
          <div className="container">
            <div className="videos-grid">
              {videos.map((video) => (
                <div key={video.id} className="video-card" data-category={video.category}>
                  <div className="video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`} // ✅ Sin espacios
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <h3 className="video-title">{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Videos;