import { opiniones } from "../../assets/data/opiniones";

const Opiniones = ({ id }) => {
  const opinionesFiltradas = opiniones.filter((opinion) => opinion.servicio_id === Number(id));

  if (opinionesFiltradas.length < 1) {
    return <p className="m-3">Este servicio no cuenta con opiniones por el momento. Te invitamos a reservar una mesa con el servicio y dejarnos tu opinión.</p>; // Maneja el caso en que el servicio no existe
  }

  return (
    <section>
      <h4 className="mt-4 mb-4">Todas las opiniones <small className="text-secondary">({opinionesFiltradas.length})</small></h4>
      {
        opinionesFiltradas.map((opinion) => (
          <div key={opinion.opinion_id}>
            <div className="card mb-3" >
              <div className="row g-0">
                
                  <div className="d-flex card-header">
                    <div className="d-flex flex-row me-3">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      <p>{opinion.valoracion}</p>
                    </div>
                    <h5 className="card-title ">{opinion.cliente_nombre}</h5>
                  </div>
                  <div className="card-body">
                  <p className="card-text">{opinion.comentario}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Opiniones