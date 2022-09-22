import { Player } from "./components/pages/Player";
import { Login } from "./components/pages/Login";

import { useEffect } from "react";
import { getTokenFromURL } from "./spotifyLogin";
import { useDispatch, useSelector } from "react-redux";
import {  selectUser, SET_USER } from "./features/UserSlice";
import SpotifyWebApi from "spotify-web-api-js";
import { selectToken, SET_TOKEN } from "./features/TokenSlice";
import { SET_PLAYLIST } from "./features/PlaylistSlice";

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
            spotify.getMe().then( user => dispatch(SET_USER({user})))
            //console.log("token => ",_token)
            spotify.getPlaylist("6IkYKhWOcocPCJffDilA9h").then(playlist => dispatch(SET_PLAYLIST(playlist)))
            spotify.getArtistAlbums ("6IkYKhWOcocPCJffDilA9h").then(albums => console.log(albums))
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