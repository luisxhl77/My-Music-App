import { Login } from "./components/pages/login/Login";
import { Player } from "./components/pages/player/Player";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { SET_PLAYLIST } from "./features/PlaylistSlice";
import { selectToken, SET_TOKEN } from "./features/TokenSlice";
import { selectUser, SET_USER } from "./features/UserSlice";
import { getTokenFromURL } from "./SpotifyLogin";

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
            //spotify.getMyTopTracks().then(savedTracks => console.log(savedTracks))
            //spotify.getMyRecentlyPlayedTracks().then(savedTracks => console.log(savedTracks))
            //spotify.getMySavedTracks().then(savedTracks => console.log(savedTracks))
            //spotify.getUserPlaylists().then(userPlaylists => console.log(userPlaylists))
            //spotify.getMySavedAlbums().then(savedTracks => console.log(savedTracks))
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