import SpotifyWebApi from "spotify-web-api-js";
import { setToken } from "./TokenSlice";

const spotify = new SpotifyWebApi();

export const setAccessTokenUser = (data) => {
    return async( dispatch ) => {

        dispatch(setToken({token: data}));
        spotify.setAccessToken(data.access_token);
    }
}