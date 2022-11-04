
import SpotifyWebApi from "spotify-web-api-js";
import Swal from "sweetalert2";
import { getStateTracks, setMySavedTracks } from "./MySavedTracksSlice";

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
        Swal.fire({
            position: 'bottom-end',
            text: 'song added to favorites',
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            color: 'white',
            background: '#249433'
        })
    }
}

export const removeInMySavedTracks = (id) => {
    return async( dispatch ) => {
        
        const idMyTrack = await [id];

        await spotify.removeFromMySavedTracks(idMyTrack);

        const data = await spotify.getMySavedTracks();
        await dispatch(setMySavedTracks({mySavedTracks: data}));
        Swal.fire({
            position: 'bottom-end',
            text: 'song removed from favorites',
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            color: 'white',
            background: '#249433'
        })
    }
}

export const stateMySavedTracks = (id) => {

    return async( dispatch ) => {
        
        const idMyTrack = await [id];
        const data = await spotify.containsMySavedTracks(idMyTrack);
        dispatch(getStateTracks({stateTracks: data[0]}));

    }

}