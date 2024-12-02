import useFetchData from "../../hooks/useFetchData"
import HashLoader from "react-spinners/HashLoader"


const Mesas = () => {
  const { data: mesas, loading: loading, error: error } = useFetchData('/api/Mesa')

  return (
    <div>
      {(loading) ? (
        // Mostrar HashLoader mientras se carga
        <div>
          <HashLoader size={35} color="#ec7c26" />
        </div>
      ) : (error) ? (
        // Mostrar mensaje de error si hay algún error y no está cargando
        <p className="text-center mt-5">Ha ocurrido un error al cargar los datos</p>
      ) : (
        <div>

          <div>
            <button className="btn btn-success d-flex mx-auto mt-1" data-bs-toggle="modal" data-bs-target="#addModal" >
              <i className="bi bi-plus"></i>
              <p>Agregar Mesa</p>
            </button>
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Mesa</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form className='py-3' onSubmit="">
                    <div className='mb-3 input-grup'>
                        <input className="form-control" type="number" placeholder='Ingresa el número de mesa...' name='numero' value=""
                          onChange="" required />
                      </div>
                      <div className='mb-3 input-grup'>
                        <input className="form-control" type="number" placeholder='Ingresa para cuantas personas es...' name='capacidad' value=""
                          onChange="" required />
                      </div>
                      <div className='mb-3 input-grup'>
                        <select className="form-select" id="inputGroupSelect01" value="">
                          <option selected>Escoge la disponibilidad...</option>
                          <option>Disponible</option>
                          <option>Reservada</option>
                        </select>
                      </div>
                      
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" >Guardar cambios</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div>
            {
              mesas.length === 0 ?
                <p className="text-center mt-5">No hay mesas registradas</p> :
                <div className="row my-3 mx-2">
                  {mesas.map((mesa) => (
                    <div className="col m-1" key={mesa.mesa_id}>
                      <div className="card" style={{ width: "15rem" }} >
                        <div className="card-body">
                          <h5 className="card-title">Mesa No.{mesa.numero}</h5>
                          <div className="card-text">
                            <p>Capacidad: para {mesa.capacidad} personas  </p>
                            <p>Disponibilidad : {mesa.disponibilidad}</p>
                          </div>
                          <div className="d-flex">
                          <button className="btn btn-primary d-flex mx-auto mt-1" >
                              <i className="bi bi bi-pencil-square me-1"></i>
                              <p>Editar</p>
                            </button>
                            <button className="btn btn-danger d-flex mx-auto mt-1" >
                              <i className="bi bi bi-x"></i>
                              <p>Eliminar</p>
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            }
          </div>

        </div>
      )}
    </div>
  )
}

export default Mesas