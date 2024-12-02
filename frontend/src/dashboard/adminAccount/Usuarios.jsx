import HashLoader from "react-spinners/HashLoader"
import useFetchData from "../../hooks/useFetchData"


const Usuarios = () => {
  const { data: usuarios, loading: loading, error: error } = useFetchData('/api/Usuario?select=usuario_id,nombre,celular,email,rol')

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
            {
              usuarios.length === 0 ?
                <p className="text-center mt-5">No hay usuarios registrados</p> :
                <div className="row my-3 mx-2">
                  {usuarios.map((usuario) => (
                    <div className="col m-1" key={usuario.usuario_id}>
                      <div className="card" style={{ width: "15rem" }} >
                        <div className="card-body">
                          <h5 className="card-title">{usuario.nombre}</h5>
                          <div className="card-text">
                            <p>Celular: {usuario.celular}  </p>
                            <p>Email: {usuario.email}</p>
                            <p>Rol: {usuario.rol}</p>
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

export default Usuarios