import SpotifyWebApi from "spotify-web-api-js";
import { setPlaylist } from "./PlaylistSlice";

const spotify = new SpotifyWebApi();

export const getPlaylists = (selectPlaylist) => {
    return async( dispatch ) => {
        const data = await spotify.getPlaylist(selectPlaylist)
        dispatch(setPlaylist({playlist: data}));
    }
}