import useFetchData from "../../hooks/useFetchData"
import HashLoader from "react-spinners/HashLoader"

const Reservaciones = () => {
  const { data: reservaciones, loading: loadingRes, error: errorRes } = useFetchData('/api/Reservacion')
  const { data: mesas, loading: loadingMesa, error: errorMesa } = useFetchData('/api/Mesa')
  const { data: servicios, loading: loadingServ, error: errorServ } = useFetchData('/api/Servicio')
  const { data: usuarios, loading: loading, error: error } = useFetchData('/api/Usuario?select=usuario_id,nombre,celular,email,rol')


  const adecuarReservaciones = () => {
    return reservaciones
      .map(reservacion => {
        const mesa = mesas.find(m => m.mesa_id === reservacion.mesa_id)
        const servicio = servicios.find(s => s.servicio_id === reservacion.servicio_id)
        const usuario = usuarios.find(u=>u.usuario_id === reservacion.usuario_id)
        return {
          ...reservacion,
          nombreUsuario: usuario ? usuario.nombre: null,
          numeroMesa: mesa ? mesa.numero : null,
          nombreServicio: servicio ? servicio.nombre : null,
        };
      });
  }

  const reservetions = adecuarReservaciones()

  return (
    <div>
      {(loadingMesa || loadingRes || loadingServ || loading) ? (
        // Mostrar HashLoader mientras se carga
        <div>
          <HashLoader size={35} color="#ec7c26" />
        </div>
      ) : (errorMesa || errorRes || errorServ || error) ? (
        // Mostrar mensaje de error si hay algún error y no está cargando
        <p className="text-center mt-5">Ha ocurrido un error al cargar los datos</p>
      ) : (
        <div>

          <div>
            {
              reservetions.length === 0 ?
                <p className="text-center mt-5">No hay reservaciones</p> :
                <div className="row my-3 mx-2">
                  {reservetions.map((reservation) => (
                    <div className="col m-1" key={reservation.reservacion_id}>
                      <div className="card" style={{ width: "15rem" }} >
                        <div className="card-body">
                          <h5 className="card-title">{reservation.nombreServicio}</h5>
                          <div className="card-text">
                            <p>Cliente: {reservation.nombreUsuario}</p>
                            <p>Fecha: {reservation.fecha} </p>
                            <p>Mesa : {reservation.numeroMesa}</p>
                            <p>Empieza : {reservation.hora_inicio}</p>
                            <p>Termina : {reservation.hora_fin}</p>
                            <p>Estado : {reservation.estado}</p>
                            
                          </div>
                          <div className="d-flex">
                          <button className="btn btn-primary d-flex mx-auto mt-1" >
                              <i className="bi bi bi-pencil-square me-1"></i>
                              <p>Editar</p>
                            </button>
                            <button className="btn btn-danger d-flex mx-auto mt-1" >
                              <i className="bi bi bi-x"></i>
                              <p>Cancelar</p>
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

export default Reservaciones