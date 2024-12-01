import './ClientAccount.css'
import { authContext } from '../../context/AuthContext'
import { useContext, useState } from 'react'
import Perfil from './Perfil'
import Reservaciones from './Reservaciones'


const ClientAccount = () => {
  const {nombre, email, celular } = useContext(authContext)
  const [tab,setTab] = useState('reservaciones')
  return(
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
        <div>
          <button className='btn text-primary 'onClick={()=>setTab('reservaciones')}>Reservaciones</button>
         
          <button className='btn text-primary' onClick={()=>setTab('perfil')}>Configurar perfil</button>
        </div>
      </div>
      <div className='col'>
        {
          tab === 'perfil' && <Perfil/>
        }
        {
          tab === 'reservaciones' && <Reservaciones/>
        }
      </div>
    </div>
    </div>
  )
}

export default ClientAccount