import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({ children }) => {
  
    const {pathname, search} = useLocation();
    const lastPath = pathname + search;
    window.localStorage.setItem( 'lastPath', lastPath )
    
    return( logged ) ? children : <Navigate to="/login"/>

}
