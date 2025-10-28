import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Contacto() {
  const [showMapOptions, setShowMapOptions] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'informacion',
    message: '',
  });

  // 🧠 Recuperar datos guardados del localStorage al cargar
  useEffect(() => {
    const savedData = localStorage.getItem('contactForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // 💾 Guardar automáticamente cada cambio
  useEffect(() => {
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }, [formData]);

  const handleMapOptions = (e) => {
    e.preventDefault();
    setShowMapOptions(true);
  };

  const handleCloseMapOptions = () => {
    setShowMapOptions(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error en la solicitud');
        return response.json();
      })
      .then((data) => {
        console.log('Respuesta recibida:', data);
        setMensajeEnviado(true);

        // 🧹 Limpiar formulario y localStorage
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'informacion',
          message: '',
        });
        localStorage.removeItem('contactForm');

        setTimeout(() => setMensajeEnviado(false), 4000);
      })
      .catch(() => alert('Hubo un error enviando el mensaje. Intenta más tarde.'));
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
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/acerca">Acerca de</Link></li>
              <li><Link to="/galeria">Galería</Link></li>
              <li><Link to="/actividades">Actividades</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/recomendaciones">Recomendaciones</Link></li>
              <li><Link to="/contacto" className="active">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="contact-section">
          <div className="container">
            <h2>Contacto</h2>
            <div className="contact-container">
              {/* Información de contacto */}
              <div className="contact-info">
                <h3>Información de Contacto</h3>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p><a href="#" onClick={handleMapOptions}>Cerro Verde, Santa Ana, El Salvador</a></p>
                </div>
                <div className="info-item"><i className="fas fa-phone"></i><p>+503 24834713</p></div>
                <div className="info-item"><i className="fas fa-envelope"></i><p>parquecasacristal@gmail.com</p></div>
                <div className="info-item"><i className="fas fa-clock"></i><p>Lunes a Domingo de 7 am a 4 pm</p></div>

                <h3>Síguenos</h3>
                <div className="social-contact">
                  <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
                  <Link to="#"><i className="fab fa-youtube"></i></Link>
                  <Link to="#"><i className="fab fa-whatsapp"></i></Link>
                </div>
              </div>

              {/* Formulario */}
              <div className="contact-form modern-form">
                <h3>Envíanos un mensaje</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre:</label>
                    <input name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label>Teléfono:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label>Asunto:</label>
                    <select name="subject" value={formData.subject} onChange={handleChange}>
                      <option value="informacion">Información</option>
                      <option value="reservas">Reservas</option>
                      <option value="eventos">Eventos</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Mensaje:</label>
                    <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="btn modern-btn">Enviar Mensaje</button>

                  {mensajeEnviado && (
                    <p className="success-msg">
                      ✅ ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showMapOptions && (
        <div className="map-options">
          <p>¿Cómo quieres abrir la ubicación?</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Google Maps</a>
          <a href="https://waze.com" target="_blank" rel="noopener noreferrer">Waze</a>
          <button onClick={handleCloseMapOptions}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default Contacto;
