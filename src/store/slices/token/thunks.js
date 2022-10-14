import SpotifyWebApi from "spotify-web-api-js";
import { setToken } from "./TokenSlice";

const spotify = new SpotifyWebApi();

export const setAccessTokenUser = (token) => {
    return async( dispatch ) => {

        dispatch(setToken({token: token}));
        spotify.setAccessToken(token);
    }
}