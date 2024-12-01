import {createContext, useEffect, useReducer } from "react";

const initialState = {
  usuario_id: localStorage.getItem('usuario_id') !== 'null' ? localStorage.getItem('usuario_id') : null,
  nombre: localStorage.getItem('nombre') !== 'null' ? localStorage.getItem('nombre') : null,
  celular: localStorage.getItem('celular') !== 'null' ? localStorage.getItem('celular') : null,
  email: localStorage.getItem('email') !== 'null' ? localStorage.getItem('email') : null,
  rol: localStorage.getItem('rol') !== 'null' ? localStorage.getItem('rol') : null,
};


export const authContext = createContext(initialState);

const authReducer = (state,action)=>{
  switch(action.type){
    case 'LOGIN_START':
      return{
        usuario_id: null,
        nombre:  null,
        celular:  null,
        email:  null,
        rol:  null
      }
    
    case 'LOGIN_SUCCESS':
      return{
        usuario_id: action.payload.usuario_id,
        nombre:  action.payload.nombre,
        celular:  action.payload.celular,
        email:  action.payload.email,
        rol:  action.payload.rol
      }

      case 'LOGOUT':
        localStorage.removeItem('usuario_id')
        localStorage.removeItem('nombre')
        localStorage.removeItem('celular')
        localStorage.removeItem('email')
        localStorage.removeItem('rol')

        return{
          usuario_id: null,
          nombre:  null,
          celular:  null,
          email:  null,
          rol:  null
        }

    default:
      return state;
  }
}

export const AuthContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(authReducer, initialState)
  useEffect(()=>{
    localStorage.setItem("usuario_id",state.usuario_id)
    localStorage.setItem("nombre",state.nombre)
    localStorage.setItem("celular",state.celular)
    localStorage.setItem("email",state.email)
    localStorage.setItem("rol",state.rol)
  },[state])
  return(
    <authContext.Provider value={
      {usuario_id: state.usuario_id,
        nombre:  state.nombre,
        celular:  state.celular,
        email:  state.email,
        rol:  state.rol,
        dispatch}
    }>
      {children}
    </authContext.Provider>
  )
}