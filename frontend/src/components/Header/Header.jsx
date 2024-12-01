import logo from '../../assets/imagenes/logo.jpg'
import './Header.css'
import { NavLink, Link} from 'react-router-dom'
import { useEffect, useRef, useContext, useState } from 'react'
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
  const {email,rol} = useContext(authContext)
  
  const handleStickyHeader = () => {
    if (headerRef.current) {
      if (document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky-header');
      } else {
        headerRef.current.classList.remove('sticky-header');
      }
    }
  };

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
              <div >
                <Link to={`${rol === 'cliente' ? '/clientes/profile/me':'/'}`} className='d-flex flex-column align-items-center' >
                  <i className="bi bi-person-circle me-1 user-icon"></i>
                  <small>{email}</small>
                </Link>
                
              </div> :
               <Link to='Login' className='btn btn-primary'>
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