import logo from '../../assets/imagenes/logo.jpg'
import './Header.css'
import { NavLink, Link} from 'react-router-dom'
import { useContext, useEffect, useRef} from 'react'
import { authContext } from '../../context/AuthContext' 

const navLinks = [
  {
    path:'/home',
    display:'Inicio'
  },
  {
    path:'/menu',
    display:'Menú'
  },
  {
    path:'/servicios',
    display:'Servicios'
  },
  {
    path:'/contacto',
    display:'Contacto'
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {email,rol, dispatch} = useContext(authContext)
  
  const handleStickyHeader = () => {
    if (headerRef.current) {
      if (document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky-header');
      } else {
        headerRef.current.classList.remove('sticky-header');
      }
    }
  };

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
  }

  useEffect(() => {
    const handleScroll = () => handleStickyHeader();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () =>{
    menuRef.current.classList.toggle('show-menu')
  }

  return (
    <header className='header d-flex align-items-center mt-3' ref={headerRef}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-row">
          <div className='d-flex flex-row align-items-center gap-0'>
            <img className='logo me-2' src={logo} alt="logo" />
            <h2 className='nombre-logo'>RESTAURANTE</h2>
          </div>

          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu d-flex align-items-center justify-content-center '>
              {
                navLinks.map((link,index)=>(
                  <li key={index} className='list-item me-3'>
                    <NavLink to={link.path} >
                      {link.display}
                    </NavLink>
                  </li>
                )
              )
              }
            </ul>
          </div>

          <div className='d-flex flex-row align-items-center'>

            {
              rol && email ?
              <div className='d-flex flex-row align-items-center'>
                <Link to={`${rol === 'cliente' ? '/clientes/profile/me':'/dashboard'}`} className='d-flex flex-column align-items-center' >
                  <i className="bi bi-person-circle me-1 user-icon"></i>
                  <small>{rol === 'cliente' ? 'Perfil' : 'Dashboard'}</small>
                </Link>
                <button className='btn btn-primary ms-1 btn-sm' onClick={handleLogout}>Cerrar sesión</button>
              </div> :
               <Link to='Login' className='btn btn-primary btn-sm'>
                  Iniciar sesión
              </Link>
            }
              <span className='menu-icon ms-1' onClick={toggleMenu}>
                <i className="bi bi-list"></i>
              </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header