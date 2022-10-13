import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromURL } from "./SpotifyLogin";

import { getUser } from "./store/slices/user/thunks";
import { Login } from "./components/pages/login/Login";
import { AppRouter } from "./routers/AppRouter";
import { setAccessTokenUser } from "./store/slices/token/thunks";

export const App = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    
    useEffect(() => {
        const token =  getTokenFromURL();
        dispatch(setAccessTokenUser(token))
        dispatch( getUser() );
    }, [])

    return (
        <>
            {
                user ? <AppRouter/> : <Login/>
            }
        </>
    )
}