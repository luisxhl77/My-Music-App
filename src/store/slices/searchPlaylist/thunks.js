import SpotifyWebApi from "spotify-web-api-js";
import { searchMyPlaylists, startLoadingPlaylists } from "./searchPlaylistSlice";

const spotify = new SpotifyWebApi();

const  generateRandomString = (num) => {
    let result1= Math.random().toString(36).substring(2,num);       
    return result1;
}

export const getSearchMyPlaylist = ( search = '' ) => {
    return async( dispatch ) => {

        await dispatch(startLoadingPlaylists());
        
        if (search === '') {
            const data = await spotify.searchPlaylists(generateRandomString(3))
            dispatch(searchMyPlaylists({searchPlaylist: data.playlists.items}));
        }else{
            const data = await spotify.searchPlaylists(search)
            dispatch(searchMyPlaylists({searchPlaylist: data.playlists.items}));
        }
    }
}