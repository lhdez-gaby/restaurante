import { useContext, useState } from "react"
import { authContext } from "../../context/AuthContext"

const Perfil = () => {
  const { usuario_id,nombre,celular,email} = useContext(authContext)
  const [formData] = useState({
    usuario_id: usuario_id,
    nombre: nombre,
    celular: celular,
    email: email,
  })
  const [formDataPass] = useState({
    usuario_id: usuario_id,
    password: "",
  })
  return (
    <section className="container">
      <div>
        <h6>Actualizar información</h6>
        <form className='py-3' onSubmit="">
        
          <div className='mb-3 input-grup'> 
          <label>Nombre:</label>
            <input className="form-control" type="text" placeholder='Nombre completo' name='nombre' value={formData.nombre}
              onChange=""
              required />

          </div>
          <label>Celular:</label>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="text" placeholder='Celular' name='celular' value={formData.celular}
              onChange=""
              required />
          </div>
          <label>Email:</label>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="email" placeholder='Ingresa tu Email' name='email' value={formData.email}
              onChange=""
              required />
          </div>
          <button
            type='submit'
            className='btn btn-primary'
          >
            {'Actualizar datos'}
          </button>
        </form>
      </div >
      <div>
        <h6>Cambiar contraseña</h6>
        <form className='py-3' onSubmit="">
        
          <div className='mb-3 input-grup'> 
          <label>Contraseña:</label>
            <input className="form-control" type="password" placeholder='Nueva contraseña' name='password' value={formDataPass.password}
              onChange=""
              required />

          </div>
          
          <button
            type='submit'
            className='btn btn-primary'
          >
            {'Actualizar contraseña'}
          </button>
        </form>
      </div >
    </section >
  )
}

export default Perfil