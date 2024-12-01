import { useState,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import { toast } from 'react-toastify'
import { authContext } from '../../context/AuthContext'
import HashLoader from 'react-spinners/HashLoader'

const Login = () => {
  const [formData,setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading,setLoading]= useState(false)
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)

  const handleInputEmailChange = (event)=>{
    const newEmail = event.target.value
    setFormData({...formData, email:newEmail})
  }

  const handleInputPassChange = (event)=>{
    const newPassword = event.target.value
    setFormData({...formData, password:newPassword})

  }

  
  const submitHandler = async(event) => {
    event.preventDefault()
    setLoading(true)

    try {

      const res = await fetch('/api/Usuario?login=true', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let {results} = await res.json() 
      
      if(!res.ok){
        throw new Error(results.comment)
      }

      results = results[0]

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          usuario_id: results.usuario_id,
        nombre:  results.nombre,
        celular:  results.celular,
        email:  results.email,
        rol:  results.rol
        }
      })
      
      toast.success('Inicio de sesión exitosa')
      setLoading(false)
      navigate('/home')
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }


  return (
    <section className="bg-naranja">
      <div className="container p-3">
      <div className="login shadow p-3 mb-5 rounded bg-light">
        <h3 className='texto-naranja'>¡Bienvenido!</h3>
        <form className='py-3' onSubmit={submitHandler}>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="email" placeholder='Ingresa tu Email' name='email' value={formData.email} 
            onChange={handleInputEmailChange} required/>
          </div>
          <div className='mb-3 input-grup'>
            <input className="form-control" type="password" placeholder='Ingresa tu contraseña' name='password' value={formData.password} 
            onChange={handleInputPassChange} required/>
          </div>
          <div className='d-grid'>
          <button
            type='submit'
            className='btn btn-primary'
          >
             {loading ? <HashLoader size={35} color="#ffffff"/>: 'Iniciar sesión'}  
        </button>
          </div>
        </form>
        <p className='text-secondary text-center'>
          ¿Aún no tienes una cuenta?
          <Link className="ms-1" to='/registro'>
            Registrarse
          </Link>
        </p>
      </div>
      </div>
    </section>
  )
}

export default Login