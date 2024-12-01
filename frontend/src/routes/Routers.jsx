import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Login from '../pages/Login/Login'
import Registro from '../pages/Registro/Registro'
import Contacto from '../pages/Contacto/Contacto'
import Servicios from '../pages/Servicios/Servicios'
import DetalleServicios from '../pages/Servicios/DetalleServicios'
import { Routes, Route } from 'react-router-dom'
import ClientAccount from '../dashboard/clientAccount/ClientAccount'
import Dashboard from '../dashboard/adminAccount/Dashboard'
import ProtectedRoute from './ProtectedRoute'

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
      <Route path="/clientes/profile/me" element={ <ProtectedRoute allowedRoles={'cliente'}><ClientAccount /></ProtectedRoute> } />
      <Route path="/dashboard" element={ <ProtectedRoute allowedRoles={'admin'}><Dashboard /></ProtectedRoute> } />
    </Routes>
  )
}

export default Routers