import { servicios } from "../../assets/data/servicios"
import {Link} from 'react-router-dom'
import servicioimg from '../../assets/imagenes/servicios-3.png'

const Servicios = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        {
          servicios.map((servicio) => (
            <div key={servicio.servicio_id}>
              <div className="card mb-3" >
                <div className="row g-0">{
                  <div className="col-md-3">
                    <img src={servicioimg} className="img-fluid rounded-start" alt="..."/>
                  </div>}
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">{servicio.nombre}</h5>
                      <p className="card-text">{servicio.descripcion}</p>
                      <p className="card-text">Duración {servicio.duracion} hora{servicio.duracion == 1 ? '': 's'}</p>
                      <p className="card-text"><small className="text-body-secondary">${servicio.costo} por persona.</small></p>
                      <Link to={`/servicios/${servicio.servicio_id}`} className="btn btn-primary"> 
                        Ver opiniones
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Servicios