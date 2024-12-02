import { useContext, useState } from "react"
import useFetchData from "../../hooks/useFetchData"
import { authContext } from "../../context/AuthContext"
import HashLoader from "react-spinners/HashLoader"
import DatePicker from "react-datepicker";
import "./Reservaciones.jsx"

const Reservaciones = () => {
  const { usuario_id } = useContext(authContext)
  const { data: reservaciones, loading: loadingRes, error: errorRes } = useFetchData('/api/Reservacion')
  const { data: mesas, loading: loadingMesa, error: errorMesa } = useFetchData('/api/Mesa')
  const { data: servicios, loading: loadingServ, error: errorServ } = useFetchData('/api/Servicio')
  const [startDate, setStartDate] = useState(new Date());

  const filtrarReservaciones = () => {
    return reservaciones
      .filter(reservacion => reservacion.usuario_id === Number(usuario_id))
      .map(reservacion => {
        const mesa = mesas.find(m => m.mesa_id === reservacion.mesa_id);
        const servicio = servicios.find(s => s.servicio_id === reservacion.servicio_id);

        return {
          ...reservacion,
          numeroMesa: mesa ? mesa.numero : null,
          nombreServicio: servicio ? servicio.nombre : null,
        };
      });
  }

  const filteredReservetions = filtrarReservaciones()

  return (
    <div>
      {(loadingMesa || loadingRes || loadingServ) ? (
        // Mostrar HashLoader mientras se carga
        <div>
          <HashLoader size={35} color="#ec7c26" />
        </div>
      ) : (errorMesa || errorRes || errorServ) ? (
        // Mostrar mensaje de error si hay algún error y no está cargando
        <p className="text-center mt-5">Ha ocurrido un error al cargar los datos</p>
      ) : (
        <div>

          <div>
            <button className="btn btn-success d-flex mx-auto mt-1" data-bs-toggle="modal" data-bs-target="#addModal" >
              <i className="bi bi-plus"></i>
              <p>Agregar reservación</p>
            </button>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar reservación</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form className='py-3' onSubmit="">
                      <div className='mb-3 input-grup'>
                        <select className="form-select" id="inputGroupSelect01" value="">
                          <option selected>Escoge un servicio...</option>
                          {servicios.map((servicio)=>(
                            <option key={servicio.id} value={servicio.id}>{servicio.nombre}</option>
                        
                          ))}
                        </select>
                      </div>
                      <div className='mb-3 input-grup'>
                        <select className="form-select" id="inputGroupSelect02" value="">
                          <option selected>Escoge una mesa...</option>
                          {mesas.map((mesa)=>(
                            <option key={mesa.id} value={mesa.id}>{mesa.numero}</option>
                          ))}
                        </select>
                      </div>
                      <div className='mb-3 input-grup'>
                        <label className="input-group-text">Escoge una fecha:</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </div>
                      <div className='mb-3 input-grup d-flex flex-row'>
                        <select className="form-select" id="inputGroupSelect03" value="">
                          <option selected>Escoge una hora...</option>
                          <option  value='10'>10</option>
                          <option  value='11'>11</option>
                          <option  value='12'>12</option>
                          <option  value='13'>13</option>
                          <option  value='14'>14</option>
                          <option  value='15'>15</option>
                          <option  value='16'>16</option>
                          <option  value='17'>17</option>
                          <option  value='18'>18</option>
                          <option  value='19'>19</option>
                          <option  value='20'>20</option>
                          <option  value='21'>21</option>
                          <option  value='22'>22</option>
                        </select>
                        <span>:</span>
                        <select className="form-select" id="inputGroupSelect04" value="">
                        <option selected>Escoge los minutos...</option>
                          <option  value='0'>00</option>
                          <option  value='30'>30</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary" >Guardar cambios</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            {
              filteredReservetions.length === 0 ?
                <p className="text-center mt-5">No tienes reservaciones</p> :
                <div className="row my-3 mx-2">
                  {filteredReservetions.map((reservation) => (
                    <div className="col m-1" key={reservation.reservacion_id}>
                      <div className="card" style={{ width: "15rem" }} >
                        <div className="card-body">
                          <h5 className="card-title">{reservation.nombreServicio}</h5>
                          <div className="card-text">
                            <p>Fecha: {reservation.fecha} </p>
                            <p>Mesa : {reservation.numeroMesa}</p>
                            <p>Empieza : {reservation.hora_inicio}</p>
                            <p>Termina : {reservation.hora_fin}</p>
                          </div>
                          <div>
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