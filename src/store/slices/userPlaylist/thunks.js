import SpotifyWebApi from "spotify-web-api-js";
import { setUserPlaylist } from "./UserPlaylistsSlice";

const spotify = new SpotifyWebApi();

export const getUserPlaylist = () => {
    return async( dispatch ) => {

        const data = await spotify.getUserPlaylists()
        dispatch(setUserPlaylist({userPlaylists: data.items}));

    }
}