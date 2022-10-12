import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromURL } from "./SpotifyLogin";

import { selectToken, SET_TOKEN } from "./store/slices/Token/TokenSlice";
import { getUser } from "./store/slices/user/thunks";
import { Login } from "./components/pages/login/Login";
import { AppRouter } from "./routers/AppRouter";

const spotify = new SpotifyWebApi();

export function App() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const token = useSelector(selectToken);

    useEffect(()=>{

        const data = getTokenFromURL();
        const _token = data.access_token;
        if (_token) {
            dispatch(SET_TOKEN(_token));
            spotify.setAccessToken(_token);
            dispatch( getUser() );
        }

    },[dispatch])

    return (
        <>
            {
                user ? <AppRouter/> : <Login/>
            }
        </>
    )
}