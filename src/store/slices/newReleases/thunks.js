import SpotifyWebApi from "spotify-web-api-js";
import { setNewreleases } from "./NewReleasesSlice";

const spotify = new SpotifyWebApi();

export const getNewrelease = () => {
    return async( dispatch ) => {

        const data = await spotify.getNewReleases()
        dispatch(setNewreleases({newReleases: data.albums.items}));
    }
}