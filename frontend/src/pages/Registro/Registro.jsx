import { Link } from 'react-router-dom'
import './Registro.css'
import { useState } from 'react'

const Registro = () => {
  const [formData,setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    password: '',
    rol: 'cliente',
  })

  const handleInputChange = (event) => {
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  const submitHandler = async(event) => {
    event.preventDefault()
  }

  return (
    <section className="bg-naranja">
      <div className="container p-3">

      
      <div className="login shadow p-3  rounded bg-light">
        <h3 >Crea una <span className='texto-naranja'>cuenta</span></h3>
        <form className='py-3' onSubmit={submitHandler}>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="text" placeholder='Nombre completo' name='nombre' value={formData.nombre}
            onChange={handleInputChange}/>
          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="text" placeholder='Celular' name='celular' value=''
            onChange={handleInputChange}/>
          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="email" placeholder='email' name='Ingresa tu Email' value=''
            onChange={handleInputChange}/>
          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="password" placeholder='Contraseña' name='password' value='' 
            onChange={handleInputChange}/>
          </div>
          <div className='d-grid'>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Registrarse
        </button>
          </div>
        </form>
        <p className='text-secondary text-center'>
          ¿Ya tienes una cuenta?
          <Link className="ms-1" to='/login'>
            Iniciar sesión
          </Link>
        </p>
      </div>
      </div>
    </section>
  )
}

export default Registro