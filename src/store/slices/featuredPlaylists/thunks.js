import SpotifyWebApi from "spotify-web-api-js";
import { setFeaturedPlaylist } from "./FeaturedPlaylistsSlice";

const spotify = new SpotifyWebApi();

export const getFeaturedPlaylist = () => {
    return async( dispatch ) => {
        const data = await spotify.getFeaturedPlaylists()
        dispatch(setFeaturedPlaylist({featuredPlaylists: data.playlists.items}));
    }
}