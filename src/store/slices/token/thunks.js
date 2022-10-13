import SpotifyWebApi from "spotify-web-api-js";
import { setToken } from "./TokenSlice";

const spotify = new SpotifyWebApi();

export const setAccessTokenUser = ({access_token}) => {
    return async( dispatch ) => {

        spotify.setAccessToken(access_token);
        dispatch(setToken(access_token));
    }
}