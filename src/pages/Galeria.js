import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Galeria() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      category: 'instalaciones',
      image: '/imagenes/casacristall.jpg',
      title: 'Salón Principal',
      description: 'Nuestro espacio principal para talleres y reuniones'
    },
    {
      category: 'naturaleza',
      image: '/imagenes/cristal.jpg',
      title: 'Jardín',
      description: 'Espacio verde para meditación y conexión'
    },
    {
      category: 'eventos',
      image: '/imagenes/foto1.jpg',
      title: 'Jardín',
      description: 'Caminatas. Amanecer. Comienza el día con un desayuno frente a una vista espectacular.'
    },
    {
      category: 'instalaciones',
      image: '/imagenes/casacristal.jpg',
      title: 'Cocina Comunitaria',
      description: 'Preparamos alimentos orgánicos juntos'
    },
    {
      category: 'naturaleza',
      image: '/imagenes/foto2.jpg',
      title: 'Amanecer',
      description: 'Vistas privilegiadas desde Casa Cristal'
    },
    {
      category: 'naturaleza',
      image: '/imagenes/foto3.jpg',
      title: 'Naturaleza',
      description: ''
    },
    {
      category: 'naturaleza',
      image: '/imagenes/foto4.jpg',
      title: 'Naturaleza',
      description: ''
    },
    {
      category: 'eventos',
      image: '/imagenes/foto5.jpg',
      title: 'Ceremonia',
      description: 'Celebraciones especiales en fechas significativas'
    }
  ];

  return (
    <div className="galeria-page">
      <header>
        <div className="container">
          <img src="/imagenes/logo.jpg.png" alt="Logo de Casa Cristal" />
          <h1>Casa Cristal</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/acerca">Acerca de</Link></li>
              <li><Link to="/galeria" className="active">Galería</Link></li>
              <li><Link to="/actividades">Actividades</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/recomendaciones">Recomendaciones</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="gallery-section">
          <div className="container">
            <h2>Galería de Casa Cristal</h2>
            <div className="gallery-filter">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                Todo
              </button>
            </div>
            
            <div className="gallery-grid">
              {galleryItems
                .filter(item => filter === 'all' || item.category === filter)
                .map((item, index) => (
                  <div key={index} className="gallery-item" data-category={item.category}>
                    <img src={item.image} alt={item.title} />
                    <div className="overlay">
                      <h3>{item.title}</h3>
                      {item.description && <p>{item.description}</p>}
                    </div>
                  </div>
                ))}
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

export default Galeria;