import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromURL } from "./SpotifyLogin";

import { setAccessTokenUser } from "./store/slices/token/thunks";

import { Login } from "./components/pages/login/Login";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.token);

    useEffect(() => {
        const token =  getTokenFromURL();
        dispatch(setAccessTokenUser(token))
    }, [])

    let authenticated = false;

    if (token) {
        window.localStorage.setItem("token", token.access_token);
        let accessToken = window.localStorage.getItem("token");
        if (accessToken !== "undefined") {
            authenticated = true;
        }
    }

    return (
        <>
            {
                authenticated ? <AppRouter/> : <Login/>
            }
        </>
    )
}