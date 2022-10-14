import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getTokenFromURL } from "../SpotifyLogin";
import { setAccessTokenUser } from "../store/slices/token/thunks";

export const PublicRoute = ({ children }) => {

    const dispatch = useDispatch();
    
    const { access_token } =  getTokenFromURL();
    
    let logged = false;
    
    if ( access_token ) {
        window.localStorage.setItem("token", access_token);
        logged = true;
        localStorage.setItem("logged", logged);
    }
    useEffect(() => {
        dispatch(setAccessTokenUser(access_token));
    }, [])
    
    const logeo = localStorage.getItem("logged");
    
    return ( !logeo ) ? children : <Navigate to="/player"/>
}
