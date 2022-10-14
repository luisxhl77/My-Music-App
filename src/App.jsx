import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromURL } from "./SpotifyLogin";

import { setAccessTokenUser } from "./store/slices/token/thunks";

import { Login } from "./components/pages/login/Login";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
    const dispatch = useDispatch();
    // const { token } = useSelector(state => state.token);
    let authenticated = false;
    let accessToken = null;
    
    const { access_token } =  getTokenFromURL();
    if ( access_token ) {

        window.localStorage.setItem("token", access_token);
        
        authenticated = true;
    }
    useEffect(() => {
        dispatch(setAccessTokenUser(access_token));
    }, [])

    return (
        <>
            {
                authenticated ? <AppRouter/> : <Login/>
            }
        </>
    )
}