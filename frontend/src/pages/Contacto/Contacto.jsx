import './Contacto.css'
const Contacto = () => {
  return (
    <div className="container py-5 contacto">
      <section className="ubicacion">
        <h4 className="texto-naranja">Ubicación</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.415028043727!2d-98.20281812612583!3d19.045481652932477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0ddbfb376e5%3A0xe5fa514d3b0a9102!2sAv.%20Reforma%20302%2C%20Centro%20hist%C3%B3rico%20de%20Puebla%2C%2072000%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1ses!2smx!4v1732852946944!5m2!1ses!2smx" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mapa'></iframe>
      </section>
      <section>
        <h4 className='mb-4 texto-naranja'>Contáctanos</h4>
        <div className="d-flex flex-row">
          <i className="bi bi-geo-alt me-2 texto-naranja "></i>
          <div>
            <h6>Dirección</h6>
          <p>Avenida Reforma #305, Puebla, Puebla </p>
          </div>
        </div>
        <div className="d-flex flex-row">
          <i className="bi bi-envelope-at me-2 texto-naranja"></i>
          <div>
            <h6>Email</h6>
          <p>reservaciones@gmail.com</p>
          </div>
          
        </div>
        <div className="d-flex flex-row ">
        <i className="bi bi-telephone me-2 texto-naranja"></i>
          <div>
          <h6>Teléfono</h6>
          <p>222 23 23 156</p>
          </div> 
        </div>
        <div className="d-flex flex-row ">
        <i className="bi bi-calendar-week me-2 texto-naranja"></i>
          <div>
          <h6>Horario</h6>
          <p>Todos los días de 10:00 a 22:00 horas</p>
          </div> 
        </div>
      </section>

    </div>
  )
}

export default Contacto