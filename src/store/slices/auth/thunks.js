import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromURL } from "../../../SpotifyLogin";
import { login, logout } from "./authSlice";


const spotify = new SpotifyWebApi();

export const setAuthUser = (functions) => {
    return async( dispatch ) => {
        
        switch (functions) {
            case login:

                const data =  getTokenFromURL();
                dispatch(login({
                    access_token: data.access_token, 
                    expires_in: data.expires_in,
                    logged: true,            
                }));
                spotify.setAccessToken(data.access_token);

            case logout:    

                dispatch(logout({
                    access_token: null, 
                    expires_in: null,
                    logged: false,            
                })
            );
        }

    }
}