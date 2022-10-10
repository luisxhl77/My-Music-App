import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { selectUserPlaylists, SET_USERPLAYLIST } from "../store/slices/UserPlaylistsSlice";

const spotify = new SpotifyWebApi();
const dispatch = useDispatch()

export const getPlaylist = () => {
    

    useEffect(()=>{
        spotify.getUserPlaylists().then(userPlaylists => dispatch(SET_USERPLAYLIST(userPlaylists)));
    },[dispatch])
    
    const userPlaylists = useSelector(selectUserPlaylists);
    
    const listPlaylist = userPlaylists?.items?.map((item) => ({
        name: item.name,
        description: item.description,
        image: item.images[0].url,
        type: item.type,
    }));
    
    return listPlaylist;
}