import '../clientAccount/ClientAccount.css'
import { authContext } from '../../context/AuthContext'
import { useContext, useState } from 'react'
import Perfil from '../clientAccount/Perfil'
import Reservaciones from './Reservaciones'
import Usuarios from './Usuarios'
import Servicios from './Servicios'
import Mesas from './Mesas'
import Opiniones from './Opiniones'


const ClientAccount = () => {
  const { nombre, email, celular } = useContext(authContext)
  const [tab, setTab] = useState('reservaciones')
  return (
    <div className="container">
      <div className="row">
        <div className="pb-5 px-3 rounded texto-naranja col-3 text-center"  >
          <div >
            <i className="bi bi-person-circle client-icon"></i>
          </div>
          <div>
            <h6>{nombre}</h6>
            <small className='text-secondary'>{email}</small>
            <p className='text-secondary'>{celular}</p>
          </div>
          <div className='d-flex flex-column'>
            <button className='btn text-primary ' onClick={() => setTab('reservaciones')}>Reservaciones</button>
            <button className='btn text-primary ' onClick={() => setTab('usuarios')}>Usuarios</button>
            <button className='btn text-primary ' onClick={() => setTab('servicios')}>Servicios</button>
            <button className='btn text-primary ' onClick={() => setTab('mesas')}>Mesas</button>
            <button className='btn text-primary ' onClick={() => setTab('opiniones')}>Opiniones</button>
            <button className='btn text-primary' onClick={() => setTab('perfil')}>Configurar perfil</button>

          </div>
        </div>
        <div className='col'>
          {
            tab === 'reservaciones' && <Reservaciones />
          }
          {
            tab === 'usuarios' && <Usuarios />
          }
          {
            tab === 'servicios' && <Servicios />
          }
          {
            tab === 'mesas' && <Mesas />
          }
          {
            tab === 'opiniones' && <Opiniones />
          }
          {
            tab === 'perfil' && <Perfil />
          }

        </div>
      </div>
    </div>
  )
}

export default ClientAccount