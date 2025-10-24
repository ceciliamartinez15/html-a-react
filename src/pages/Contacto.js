import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Contacto() {
  const [showMapOptions, setShowMapOptions] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleMapOptions = (e) => {
    e.preventDefault();
    setShowMapOptions(true);
  };

  const handleCloseMapOptions = () => {
    setShowMapOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Respuesta recibida:', data);
        setMensajeEnviado(true);

        e.target.reset();

        setTimeout(() => {
          setMensajeEnviado(false);
        }, 4000);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error enviando el mensaje. Intenta más tarde.');
      });
  };

  return (
    <div className="contacto-page">
      <header>
        <div className="container">
          <Link to="/" className="logo">
            <img
              src={process.env.PUBLIC_URL + '/imagenes/logo.jpg.png'}
              alt="Logo de Casa Cristal"
            />
          </Link>
          <h1>Casa Cristal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/acerca">Acerca de</Link>
              </li>
              <li>
                <Link to="/galeria">Galería</Link>
              </li>
              <li>
                <Link to="/actividades">Actividades</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/recomendaciones">Recomendaciones</Link>
              </li>
              <li>
                <Link to="/contacto" className="active">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="contact-section">
          <div className="container">
            <h2>Contacto</h2>
            <div className="contact-container">
              <div className="contact-info">
                <h3>Información de Contacto</h3>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    <a href="#" onClick={handleMapOptions}>
                      Cerro Verde, Santa Ana, El Salvador
                    </a>
                  </p>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <p>+503 24834713</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <p>parquecasacristal@gmail.com</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <p>Lunes a Domingo de 7 am a 4 pm</p>
                </div>
                <h3>Síguenos</h3>
                <div className="social-contact">
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                </div>
              </div>

              <div className="contact-form">
                <h3>Envíanos un mensaje</h3>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Asunto:</label>
                    <select id="subject" name="subject">
                      <option value="informacion">Información</option>
                      <option value="reservas">Reservas</option>
                      <option value="eventos">Eventos</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Enviar Mensaje
                  </button>

                  {mensajeEnviado && (
                    <p
                      style={{
                        color: 'green',
                        marginTop: '10px',
                        fontWeight: 'bold',
                      }}
                    >
                      Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="container">
            <h3>¿Cómo llegar?</h3>
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=Cerro%20Verde%2C%20Santa%20Ana%2C%20El%20Salvador&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Casa Cristal Location"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {showMapOptions && (
        <div id="mapOptions" className="map-options">
          <p>¿Cómo quieres abrir la ubicación?</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
          <a href="https://waze.com" target="_blank" rel="noopener noreferrer">
            Waze
          </a>
          <button onClick={handleCloseMapOptions}>Cancelar</button>
        </div>
      )}

      <footer>
        {/* Aquí puedes poner el footer si quieres */}
      </footer>
    </div>
  );
}

export default Contacto;
