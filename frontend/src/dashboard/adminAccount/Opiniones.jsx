import HashLoader from "react-spinners/HashLoader"
import useFetchData from "../../hooks/useFetchData"

const Opiniones = () => {
  const { data: Opiniones, loading: loadingOp, error: errorOp } = useFetchData('/api/Opinion')
  const { data: servicios, loading: loadingServ, error: errorServ } = useFetchData('/api/Servicio')
  const { data: usuarios, loading: loading, error: error } = useFetchData('/api/Usuario?select=usuario_id,nombre,celular,email,rol')


  const adecuarOpiniones = () => {
    return Opiniones
      .map(reservacion => {
        const servicio = servicios.find(s => s.servicio_id === reservacion.servicio_id)
        const usuario = usuarios.find(u=>u.usuario_id === reservacion.usuario_id)
        return {
          ...reservacion,
          nombreUsuario: usuario ? usuario.nombre: null,
          nombreServicio: servicio ? servicio.nombre : null,
        };
      });
  }

  const opinions = adecuarOpiniones()

  return (
    <div>
      {( loadingOp || loadingServ || loading) ? (
        // Mostrar HashLoader mientras se carga
        <div>
          <HashLoader size={35} color="#ec7c26" />
        </div>
      ) : (errorOp || errorServ || error) ? (
        // Mostrar mensaje de error si hay algún error y no está cargando
        <p className="text-center mt-5">Ha ocurrido un error al cargar los datos</p>
      ) : (
        <div>

          <div>
            {
              opinions.length === 0 ?
                <p className="text-center mt-5">No hay opiniones</p> :
                <div className="row my-3 mx-2">
                  {opinions.map((opinion) => (
                    <div className="col m-1" key={opinion.reservacion_id}>
                      <div className="card" style={{ width: "15rem" }} >
                        <div className="card-body">
                          <h5 className="card-title">{opinion.nombreServicio}</h5>
                          <div className="card-text">
                            <p>Cliente: {opinion.nombreUsuario}</p>
                            <p>Valoración: {opinion.valoracion} </p>
                            <p>Comentario : {opinion.comentario}</p>
                          </div>
                          <div className="d-flex">
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

export default Opiniones