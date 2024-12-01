import { Link, useNavigate } from 'react-router-dom'
import './Registro.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

const Registro = () => {
  const [formData,setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    rol: 'cliente',
    password: ''
  })
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleInputChange = (event) => {
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  const submitHandler = async(event) => {
    event.preventDefault()
    setLoading(true)

    try {

      const res = await fetch('/api/Usuario?register=true', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const {results} = await res.json() 
      
      if(!res.ok){
        throw new Error(results.comment)
      }
      
      toast.success(results.comment)
      setLoading(false)
      navigate('/login')
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className="bg-naranja">
      <div className="container p-3">

      
      <div className="login shadow p-3  rounded bg-light">
        <h3 >Crea una <span className='texto-naranja'>cuenta</span></h3>
        <form className='py-3' onSubmit={submitHandler}>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="text" placeholder='Nombre completo' name='nombre' value={formData.nombre}
            onChange={handleInputChange}
            required/>

          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="text" placeholder='Celular' name='celular' value={formData.celular}
            onChange={handleInputChange}
            required/>
          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="email" placeholder='Ingresa tu Email' name='email' value={formData.email}
            onChange={handleInputChange}
            required/>
          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="password" placeholder='Contraseña' name='password' value={formData.password} 
            onChange={handleInputChange}
            required/>
          </div>
          <div className='d-grid'>
          <button
            type='submit'
            className='btn btn-primary'
          >
            {loading ? <HashLoader size={35} color="#ffffff"/>: 'Registrarse'}
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