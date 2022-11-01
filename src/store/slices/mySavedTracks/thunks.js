import SpotifyWebApi from "spotify-web-api-js";
import { setMySavedTracks } from "./MySavedTracksSlice";

const spotify = new SpotifyWebApi();

export const getMySavedTrack = () => {
    return async( dispatch ) => {
        
        const data = await spotify.getMySavedTracks();
        dispatch(setMySavedTracks({mySavedTracks: data}));
    }
}

export const addInMySavedTracks = (id) => {
    return async( dispatch ) => {

        console.log(id)
        await dispatch( spotify.addToMySavedTracks(id) );
        const data = await spotify.getMySavedTracks();
        dispatch(setMySavedTracks({mySavedTracks: data}));
    }
}