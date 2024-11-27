import logo from '../../assets/imagenes/logo.jpg'
import './Header.css'
import { NavLink, Link} from 'react-router-dom'
import { useEffect, useRef } from 'react'

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

  const handleStickyHeader = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.bodyscrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.currentclassList.add('sticky-header')
      }else{
        headerRef.currentclassList.remove('sticky-header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader();
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  },[])

  const toggleMenu = () =>{
    menuRef.current.classList.toggle('show-menu')
  }

  return (
    <header className='d-flex align-items-center mt-3' ref={headerRef}>
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
              <div >
                <Link to='/'>
                  <i className="bi bi-person-circle me-1"></i>
                </Link>
              </div>
              <Link to='Login'>
                    Iniciar sesión
              </Link>
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