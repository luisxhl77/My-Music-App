import SpotifyWebApi from "spotify-web-api-js";
import { setUser } from "./UserSlice";

const spotify = new SpotifyWebApi();

export const getUser = () => {
    return async( dispatch ) => {
        const data = await spotify.getMe()
        dispatch(setUser({user: data}));
    }
}