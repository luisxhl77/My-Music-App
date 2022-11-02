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
        
        const idMyTrack = await [id];

        await spotify.addToMySavedTracks(idMyTrack);

        const data = await spotify.getMySavedTracks();
        await dispatch(setMySavedTracks({mySavedTracks: data}));
        alert("agregado a favoritos")
    }
}

export const removeInMySavedTracks = (id) => {
    return async( dispatch ) => {
        
        const idMyTrack = await [id];

        await spotify.removeFromMySavedTracks(idMyTrack);

        const data = await spotify.getMySavedTracks();
        dispatch(setMySavedTracks({mySavedTracks: data}));
    }
}