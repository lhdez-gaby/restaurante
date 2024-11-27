import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import Registro from '../pages/Registro'
import Contacto from '../pages/Contacto'
import Servicios from '../pages/Servicios/Servicios'
import DetalleServicios from '../pages/Servicios/DetalleServicios'
import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/servicios/:id" element={<DetalleServicios />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}

export default Routers