import './Feature.css'
import fetureIcon1 from '../../assets/imagenes/features-icon-1.png'
import fetureIcon2 from '../../assets/imagenes/features-icon-2.png'
import fetureIcon3 from '../../assets/imagenes/features-icon-3.png'
import { Link }  from 'react-router-dom'

const Features = () => {
  return (
    <section>
      <div className='container mb-5'>
        <div>
          <h4 className='text-center mt-5 mb-5 texto-naranja'>Porque escogernos</h4>
        </div>
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
          <div className="card feature mb-3">
            <img src={fetureIcon1} className="card-img-top" alt="Icono de verduras" />
            <div className="card-body">
              <h5 className="card-title">Comida higiénica</h5>
              <p className="card-text">Nuestros platillos son preparados con los mejores estándares de higiene.</p>
              <Link className="btn btn-primary" to='/menu'>
                    Ver menú
              </Link>
            </div>
          </div>
          <div className="card feature mb-3">
            <img src={fetureIcon2} className="card-img-top" alt="Icono de verduras" />
            <div className="card-body">
              <h5 className="card-title">Eventos</h5>
              <p className="card-text">Puedes disfrutar desde una ronda de bebidas hasta una cena romántica.</p>
              <Link className="btn btn-primary" to='/servicios'>
                    Ver servicios
              </Link>
            </div>
          </div>
          <div className="card feature mb-3">
            <img src={fetureIcon3} className="card-img-top" alt="Icono de verduras" />
            <div className="card-body">
              <h5 className="card-title">Chefs expertos</h5>
              <p className="card-text">Nuestros chef cuentan con una amplia experiencia cocinando.</p>
              <Link className="btn btn-primary" to='/contacto'>
                    Visítanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features