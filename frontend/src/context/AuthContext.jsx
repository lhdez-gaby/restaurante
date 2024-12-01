import {createContext, useReducer } from "react";

const initialState = {
  usuario_id: null,
  nombre:  null,
  celular:  null,
  email:  null,
  rol:  null
}

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