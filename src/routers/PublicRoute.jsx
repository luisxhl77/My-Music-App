import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {
    
    //extraer los datos para validar si esta autenticado

    return ( !logged) ? children : <Navigate to="/player"/>
}
