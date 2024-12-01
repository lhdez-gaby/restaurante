import { Navigate } from "react-router-dom"
import { authContext } from "../context/AuthContext"
import { useContext } from "react"

const ProtectedRoute = ({children, allowedRoles}) => {
  const {email, rol} = useContext(authContext)

  const isAllowed = allowedRoles.includes(rol)
  const accesibleRoute = email && isAllowed ? children : <Navigate to='/login' replace={true}/>
  return accesibleRoute
}

export default ProtectedRoute



