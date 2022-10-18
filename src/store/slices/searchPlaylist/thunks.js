import SpotifyWebApi from "spotify-web-api-js";
import { searchMyPlaylists } from "./searchPlaylistSlice";

const spotify = new SpotifyWebApi();

export const getSearchMyPlaylist = (search = '') => {
    return async( dispatch ) => {
        if (search === '') {
            const data = await spotify.searchPlaylists("bad")
            dispatch(searchMyPlaylists({searchPlaylist: data.playlists.items}));
        }else{
            const data = await spotify.searchPlaylists(search)
            dispatch(searchMyPlaylists({searchPlaylist: data.playlists.items}));
        }
    }
}