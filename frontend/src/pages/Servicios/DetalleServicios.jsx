import { servicios } from "../../assets/data/servicios"
import { useParams, Link } from "react-router-dom"
import Opiniones from "./Opiniones"
import servicioimg from '../../assets/imagenes/servicios-3.png'

const DetalleServicios = () => {
  const { id } = useParams()
  const servicio = servicios.find((servicio) => servicio.servicio_id === Number(id));
  return (
    <div className="container">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-3">
            <img src={servicioimg} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{servicio.nombre}</h5>
              <p className="card-text">{servicio.descripcion}</p>
              <p className="card-text">Duración {servicio.duracion} hora{servicio.duracion == 1 ? '' : 's'}</p>
              <p className="card-text"><small className="text-body-secondary">${servicio.costo} por persona.</small></p>
              <Link to="/clientes/profile/me" className="btn btn-primary">
                Reservar mesa
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Opiniones id={servicio.servicio_id}/>
    </div>
  )
}

export default DetalleServicios