import SpotifyWebApi from "spotify-web-api-js";
import { setMySavedTracks, startLoadingTracks } from "./MySavedTracksSlice";

const spotify = new SpotifyWebApi();

export const getMySavedTrack = () => {
    return async( dispatch ) => {
        
        dispatch(startLoadingTracks());

        const data = await spotify.getMySavedTracks();
        dispatch(setMySavedTracks({mySavedTracks: data}));
    }
}