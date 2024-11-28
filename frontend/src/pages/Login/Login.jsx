import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [formData,setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputEmailChange = (event)=>{
    const newEmail = event.target.value
    setFormData({...formData, email:newEmail})
  }

  const handleInputPassChange = (event)=>{
    const newPassword = event.target.value
    setFormData({...formData, password:newPassword})

  }
  return (
    <section className="container">
      <div className="login shadow p-3 mb-5 rounded">
        <h3 className='texto-naranja'>¡Bienvenido!</h3>
        <form className='py-3'>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="email" placeholder='Ingresa tu Email' name='email' value={formData.email} 
            onChange={handleInputEmailChange}/>
          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="password" placeholder='Ingresa tu contraseña' name='password' value={formData.password} 
            onChange={handleInputPassChange}/>
          </div>
          <div className='d-grid'>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Iniciar sesión
        </button>
          </div>
        </form>
        <p className='text-secondary text-center'>
          ¿Aún no tienes una cuenta?
          <Link className="ms-1" to='/registro'>
            Registrate
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login