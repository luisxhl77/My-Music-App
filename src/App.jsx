import { Login } from "./components/pages/login/Login";
import { Player } from "./components/pages/player/Player";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromURL } from "./SpotifyLogin";

import { selectUser, SET_USER } from "./store/slices/UserSlice";
import { selectToken, SET_TOKEN } from "./store/slices/TokenSlice";
import { SET_PLAYLIST } from "./store/slices/PlaylistSlice";
import { SET_MYSAVEDTRACKS } from "./store/slices/MySavedTracksSlice";

const spotify = new SpotifyWebApi();

export function App() {
    const token = useSelector(selectToken)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(()=>{
        const data = getTokenFromURL();
        //window.location.hash= "";
        const _token = data.access_token;
        if (_token) {
            dispatch(SET_TOKEN(_token));
            spotify.setAccessToken(_token);
            spotify.getMe().then( user => dispatch(SET_USER({user})));
            spotify.getMySavedTracks().then(savedTracks => dispatch(SET_MYSAVEDTRACKS(savedTracks)));
            spotify.getPlaylist("6IkYKhWOcocPCJffDilA9h").then(playlist => dispatch(SET_PLAYLIST(playlist)));
        }

    },[dispatch])

    return (
        <>
            { 
                user ? <Player/> : <Login/>
            }
        </>
    )
}