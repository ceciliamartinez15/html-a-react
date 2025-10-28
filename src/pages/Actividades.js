import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Actividades() {
  const [actividades, setActividades] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/actividades.json")
      .then((res) => res.json())
      .then((data) => setActividades(data))
      .catch((err) => console.error("Error al cargar actividades:", err));
  }, []);

  useEffect(() => {
    const reservasPrevias = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(reservasPrevias);
  }, []);

  const handleReservar = (actividad) => {
    setActividadSeleccionada(actividad);
    setCantidad(1);
    setTotal(parseFloat(actividad.precio.replace(/[^0-9.]/g, "")));
    setModalOpen(true);
  };

  const handleCantidadChange = (e) => {
    const cant = parseInt(e.target.value) || 0;
    setCantidad(cant);
    const precioNum = parseFloat(
      actividadSeleccionada.precio.replace(/[^0-9.]/g, "")
    );
    setTotal(cant * precioNum);
  };

  const handleEnviarReserva = (e) => {
    e.preventDefault();
    const nuevaReserva = {
      ...actividadSeleccionada,
      cantidad,
      total: total.toFixed(2),
    };

    const reservasGuardadas =
      JSON.parse(localStorage.getItem("reservas")) || [];
    const nuevasReservas = [...reservasGuardadas, nuevaReserva];

    localStorage.setItem("reservas", JSON.stringify(nuevasReservas));
    setReservas(nuevasReservas);

    alert(
      `✅ Reserva confirmada: ${
        actividadSeleccionada.nombre
      } x${cantidad} – Total: $${total.toFixed(2)}`
    );
    setModalOpen(false);
  };

  return (
    <div className="actividades-page">
      <header>
        <div className="container">
          <img src="imagenes/logo.jpg.png" alt="Logo de Casa Cristal" />
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
                <Link to="/actividades" className="active">
                  Actividades
                </Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/recomendaciones">Recomendaciones</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="activities-section">
          <div className="container">
            <h2>Nuestras Actividades</h2>
            <p className="section-intro">
              En Casa Cristal ofrecemos una variedad de actividades diseñadas
              para fomentar el bienestar, la conexión con la naturaleza y el
              crecimiento personal.
            </p>

            <div className="tab-content active" id="regular">
              {actividades.length === 0 ? (
                <p>Cargando actividades...</p>
              ) : (
                actividades.map((act, index) => (
                  <div key={index} className="activity-card">
                    <div className="activity-image">
                      <img src={act.imagen} alt={act.nombre} />
                    </div>
                    <div className="activity-info">
                      <h3>{act.nombre}</h3>
                      <p className="schedule">
                        <i className="far fa-calendar-alt"></i> {act.horario}
                      </p>
                      <p className="description">{act.descripcion}</p>
                      <div className="activity-meta">
                        {act.ubicacion && (
                          <span>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {act.ubicacion}
                          </span>
                        )}
                        <span>
                          <i className="fas fa-coins"></i> {act.precio}
                        </span>
                      </div>
                      <button
                        className="btn btn-small"
                        onClick={() => handleReservar(act)}
                      >
                        Reservar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal de reserva */}
            {modalOpen && (
              <div className="modal" onClick={() => setModalOpen(false)}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3>Reservar: {actividadSeleccionada.nombre}</h3>
                  <p>Precio por persona: {actividadSeleccionada.precio}</p>
                  <form onSubmit={handleEnviarReserva}>
                    <label>
                      Cantidad de personas:
                      <input
                        type="number"
                        min="1"
                        value={cantidad}
                        onChange={handleCantidadChange}
                      />
                    </label>
                    <p>Total: ${total.toFixed(2)}</p>
                    <button type="submit" className="btn">
                      Confirmar Reserva
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setModalOpen(false)}
                    >
                      Cancelar
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Mostrar reservas */}
            {reservas.length > 0 && (
              <div className="reservas-list">
                <h3>Mis Reservas</h3>
                <ul>
                  {reservas.map((r, i) => (
                    <li key={i}>
                      {r.nombre} x{r.cantidad} – Total: ${r.total}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Actividades;
